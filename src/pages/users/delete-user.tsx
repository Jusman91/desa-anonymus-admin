import ModalDelete from '@/components/fragments/modal-delete';
import { useTableContext } from '@/hooks/use-context';
import { useUserHandlers } from '@/hooks/use-user-handlers';
import { useGetUser } from '@/lib/react-query/querys-mutations-user';

const DeleteUser = () => {
	const { idDelete, open } = useTableContext();
	const { data: user } = useGetUser(idDelete);
	const title = `Are you sure you want to delete ${user?.username.toUpperCase()}`;
	const { handleDelete, onCancelDelete, loading } =
		useUserHandlers();

	return (
		<section>
			<ModalDelete
				loading={loading}
				open={open}
				title={title}
				onCancel={onCancelDelete}
				onDelete={() => handleDelete(idDelete)}
			/>
		</section>
	);
};

export default DeleteUser;
