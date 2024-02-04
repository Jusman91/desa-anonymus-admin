/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	IArticle,
	ICreateArticle,
	IResponseError,
} from '@/types';
import { type TablePaginationConfig } from 'antd';
import type {
	FilterValue,
	SorterResult,
} from 'antd/es/table/interface';
import { useParams } from 'react-router-dom';
import { useTableHandlers } from './use-table-handlers';
import { useQueryClient } from '@tanstack/react-query';
import {
	useUpdateFile,
	useUploadFile,
} from '@/lib/react-query/mutation-file';
import { useForm } from './use-form';
import {
	useCreateArticle,
	useDeleteArticle,
	useUpdateArticle,
} from '@/lib/react-query/querys-mutations-article';
import { key } from '@/static/key';
import { useEffect } from 'react';
import { useTableContext } from './use-context';
import FroalaEditor from 'froala-editor';

export function useArticleHandlers() {
	const { id } = useParams();
	const { setOpen, setIdDelete } = useTableContext();
	const thumbnailEndpoint = `articles/thumbnail/${
		id ? id : ''
	}`;
	const imgContentEndpoint = `articles/img_content`;
	const { ResetFieldsValue } = useForm();

	const {
		mutateAsync: uploadImg,
		isPending: isPendingUploadImg,
	} = useUploadFile();

	const {
		mutateAsync: updateImg,
		isPending: isPendingUpdateImg,
	} = useUpdateFile();

	const {
		mutate: createArticle,
		isPending: isPendingCreate,
		isSuccess: isSuccessCreate,
	} = useCreateArticle();

	const {
		mutateAsync: updateArticle,
		isPending: isPendingUpdate,
	} = useUpdateArticle();

	const {
		mutate: deleteArticle,
		isPending: isPendingDelete,
		isSuccess: isSuccessDelete,
	} = useDeleteArticle();

	const queryClient = useQueryClient();
	const { handleTableChange } = useTableHandlers();

	const loading =
		isPendingCreate ||
		isPendingUploadImg ||
		isPendingUpdateImg ||
		isPendingUpdate ||
		isPendingDelete;

	const success = isSuccessCreate;

	const handleTableChangeArticle = (
		pagination: TablePaginationConfig,
		_filters: Record<string, FilterValue | null>,
		sorter:
			| SorterResult<IArticle>
			| SorterResult<IArticle>[],
	) => {
		handleTableChange<IArticle>({
			pagination,
			sorter,
		});
	};

	const handleImgUploadContent = async (files: any) => {
		try {
			const uploadedImageURL = await uploadImg({
				url: imgContentEndpoint,
				file: files[0],
			}); // Upload image file
			return uploadedImageURL; // Return URL of uploaded image
		} catch (error) {
			const myError = error as IResponseError;
			throw `${myError.status} ${myError.message}`;
		}
	};

	const handleImageErrorContent = (
		editor: FroalaEditor,
	) => {
		// Tampilkan pesan kesalahan pada gambar
		const $popup = editor.popups.get('image.insert');
		const $layer = $popup.find(
			'.fr-image-progress-bar-layer',
		);
		$layer.find('h3').text();
	};

	const handleRemoveStyleContent = (html: string) => {
		const cleanedHtml = html.replace(
			/<[^>]+>/g,
			(match) => {
				return match.replace(/ style="[^"]+"/g, '');
			},
		);

		return cleanedHtml;
	};

	const handleSubmit = async (value: ICreateArticle) => {
		const thumbnailObj = value.thumbnail;
		let thumbURL = '';

		if (thumbnailObj && typeof thumbnailObj === 'object') {
			const file = (thumbnailObj as { file?: File }).file;

			if (file) {
				const result = id
					? await updateImg({
							url: thumbnailEndpoint,
							file,
						})
					: await uploadImg({
							url: thumbnailEndpoint,
							file,
						});
				thumbURL = result;
			}
		}

		if (id) {
			const newFormData: ICreateArticle = {
				...value,
				...(typeof thumbnailObj === 'object' && {
					thumbnail: thumbURL,
				}),
			};
			await updateArticle(
				{
					id,
					formData: newFormData,
				},
				{
					onSuccess: () => {
						queryClient.invalidateQueries({
							queryKey: [key.QUERY_KEY_ARTICLE],
						});
					},
				},
			);
		} else {
			const newArticle: ICreateArticle = {
				...value,
				thumbnail: thumbURL,
			};
			createArticle(newArticle);
		}
	};

	const handleDelete = (id: string) => {
		deleteArticle(id, {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [key.QUERY_KEY_ARTICLES, id],
				});
			},
		});
		setOpen(false);
	};

	const onCancelDelete = () => {
		setOpen(false);
	};

	ResetFieldsValue(success);

	useEffect(() => {
		if (isSuccessDelete) {
			setIdDelete('');
		}

		return () => {
			setIdDelete('');
		};
	}, [isSuccessDelete, setIdDelete]);

	return {
		loading,
		handleTableChangeArticle,
		handleImgUploadContent,
		handleImageErrorContent,
		handleRemoveStyleContent,
		handleSubmit,
		handleDelete,
		onCancelDelete,
	};
}
