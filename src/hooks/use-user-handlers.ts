import {
	useCreateUser,
	useDeleteUser,
	useUpdateUser,
} from '@/lib/react-query/querys-mutations-user';
import { ICreateUser, IUpdateUser, IUser } from '@/types';
import type {
	FilterValue,
	SorterResult,
	TablePaginationConfig,
} from 'antd/es/table/interface';
import { useTableHandlers } from './use-table-handlers';
import {
	useTableContext,
	useUserFormContext,
} from './use-context';
import { useQueryClient } from '@tanstack/react-query';
import { key } from '@/static/key';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useUploadFile } from '@/lib/react-query/mutation-upload-file';

export function useUserHandlers() {
	const { setOpen } = useTableContext();
	const { form } = useUserFormContext();
	const { id } = useParams();
	const url = `users/upload_profile_pic/${id}`;

	const {
		mutate: createUser,
		isPending: isPendingCreate,
		isSuccess: isSuccessCreate,
	} = useCreateUser();

	const {
		mutateAsync: uploadPic,
		isPending: isPendingUpload,
	} = useUploadFile();

	const { mutate: updateUser, isPending: isPendingUpdate } =
		useUpdateUser();

	const { mutate: deleteUser, isPending: isPendingDelete } =
		useDeleteUser();

	const queryClient = useQueryClient();
	const { handleTableChange } = useTableHandlers();

	const loading =
		isPendingCreate ||
		isPendingUpload ||
		isPendingUpdate ||
		isPendingDelete;

	const handleTableChangeUser = (
		pagination: TablePaginationConfig,
		_filters: Record<string, FilterValue | null>,
		sorter: SorterResult<IUser> | SorterResult<IUser>[],
	) => {
		handleTableChange<IUser>({
			pagination,
			sorter,
		});
	};

	const handleCreate = (value: ICreateUser) => {
		createUser(value, {
			onSuccess: () => {
				form.resetFields();
			},
		});
	};

	const handleSubmit = async (
		value: ICreateUser | IUpdateUser,
	) => {
		if (id && 'profilePic' in value) {
			const profilePicObj = value.profilePic;

			let picURL = '';
			if (
				profilePicObj &&
				typeof profilePicObj === 'object'
			) {
				const file = (profilePicObj as { file?: File })
					.file;
				if (file) {
					const result = await uploadPic({ url, file });
					picURL = result;
				}
			}

			const newFormData: IUpdateUser = {
				...value,
				...(profilePicObj && { profilePic: picURL }),
			};
			updateUser({ id, formData: newFormData });
		} else {
			createUser(value as ICreateUser);
		}
	};

	const handleDelete = async (id: string) => {
		deleteUser(id, {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [key.QUERY_KEY_USERS, id],
				});
			},
		});
		setOpen(false);
	};

	const onCancelDelete = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (isSuccessCreate) {
			form.resetFields();
		}
	}, [form, isSuccessCreate]);

	return {
		loading,
		handleTableChangeUser,
		handleCreate,
		handleDelete,
		onCancelDelete,
		handleSubmit,
	};
}
