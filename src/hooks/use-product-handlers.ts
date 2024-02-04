import {
	useUpdateFile,
	useUploadFile,
} from '@/lib/react-query/mutation-file';
import {
	useCreateProduct,
	useDeleteProduct,
	useUpdateProduct,
} from '@/lib/react-query/querys-mutations-product';
import { ICreateProduct, IProduct } from '@/types';
import { useParams } from 'react-router-dom';
import { useForm } from './use-form';
import { useQueryClient } from '@tanstack/react-query';
import { key } from '@/static/key';
import { useTableContext } from './use-context';
import { useEffect } from 'react';
import type { TablePaginationConfig } from 'antd';
import type {
	FilterValue,
	SorterResult,
} from 'antd/es/table/interface';
import { useTableHandlers } from './use-table-handlers';

export function useProductHandlers() {
	const { id } = useParams();
	const { setOpen, setIdDelete } = useTableContext();
	const url = `products/thumbnail/${id ? id : ''}`;
	const { ResetFieldsValue } = useForm();

	const {
		mutateAsync: uploadThumbnail,
		isPending: isPendingUploadThum,
	} = useUploadFile();

	const {
		mutateAsync: updateThumbnail,
		isPending: isPendingUpdateThum,
	} = useUpdateFile();

	const {
		mutate: createProduct,
		isPending: isPendingCreate,
		isSuccess: isSuccessCreate,
	} = useCreateProduct();

	const {
		mutate: updateProduct,
		isPending: isPendingUpdate,
	} = useUpdateProduct();

	const {
		mutate: deleteProduct,
		isPending: isPendingDelete,
		isSuccess: isSuccessDelete,
	} = useDeleteProduct();

	const queryClient = useQueryClient();
	const { handleTableChange } = useTableHandlers();

	const loading =
		isPendingCreate ||
		isPendingUploadThum ||
		isPendingUpdateThum ||
		isPendingUpdate ||
		isPendingDelete;

	const handleTableChangeProduct = (
		pagination: TablePaginationConfig,
		_filters: Record<string, FilterValue | null>,
		sorter:
			| SorterResult<IProduct>
			| SorterResult<IProduct>[],
	) => {
		handleTableChange<IProduct>({
			pagination,
			sorter,
		});
	};

	const handleSubmit = async (value: ICreateProduct) => {
		const thumbnailObj = value.thumbnail;
		let thumbURL = '';

		if (thumbnailObj && typeof thumbnailObj === 'object') {
			const file = (thumbnailObj as { file?: File }).file;

			if (file) {
				const result = id
					? await updateThumbnail({ url, file })
					: await uploadThumbnail({ url, file });
				thumbURL = result;
			}
		}

		if (id) {
			const newFormData: ICreateProduct = {
				...value,
				...(typeof thumbnailObj === 'object' && {
					thumbnail: thumbURL,
				}),
			};
			updateProduct({ id, formData: newFormData });
		} else {
			const newProduct: ICreateProduct = {
				...value,
				thumbnail: thumbURL,
			};
			createProduct(newProduct);
		}
	};

	const handleDelete = (id: string) => {
		deleteProduct(id, {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [key.QUERY_KEY_PRODUCTS, id],
				});
			},
		});
		setOpen(false);
	};

	const onCancelDelete = () => {
		setOpen(false);
	};

	ResetFieldsValue(isSuccessCreate);

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
		handleTableChangeProduct,
		handleSubmit,
		handleDelete,
		onCancelDelete,
	};
}
