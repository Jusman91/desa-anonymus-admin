import Button from '@/components/elements/button';
import Loading from '@/components/loading/loading';
import { useUserFormContext } from '@/hooks/use-context';
import { useUserHandlers } from '@/hooks/use-user-handlers';
import {
	useDeleteUser,
	useGetUser,
} from '@/lib/react-query/querys-mutations-user';
import { Modal } from 'antd';

const DeleteUser = () => {
	const { id, open } = useUserFormContext();
	const { data: user } = useGetUser(id);
	const { isPending } = useDeleteUser();
	const { handleDelete, onCancelDelete } =
		useUserHandlers();

	return isPending ? (
		<Loading loading={isPending} />
	) : (
		<Modal
			title={`Are you sure you want to delete ${user?.username.toUpperCase()}`}
			open={open}
			centered
			onCancel={onCancelDelete}
			footer={(_, { CancelBtn }) => (
				<div className='flex items-center justify-end'>
					<CancelBtn />
					<Button
						type='primary'
						danger
						onClick={() => handleDelete(id)}>
						Delete
					</Button>
				</div>
			)}
		/>
	);
};

export default DeleteUser;
