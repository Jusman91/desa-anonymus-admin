import Button from '@/components/elements/button';
import Loading from '@/components/loading/loading';
import { useTableContext } from '@/hooks/use-context';
import { useUserHandlers } from '@/hooks/use-user-handlers';
import { useGetUser } from '@/lib/react-query/querys-mutations-user';
import { Modal } from 'antd';

const DeleteUser = () => {
	const { idDelete, open } = useTableContext();
	const { data: user } = useGetUser(idDelete);
	const { handleDelete, onCancelDelete, loading } =
		useUserHandlers();

	return loading ? (
		<Loading loading={loading} />
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
						onClick={() => handleDelete(idDelete)}>
						Delete
					</Button>
				</div>
			)}
		/>
	);
};

export default DeleteUser;
