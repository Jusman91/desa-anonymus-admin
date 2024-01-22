import ModalDelete from '@/components/fragments/modal-delete';
import { useTableContext } from '@/hooks/use-context';
import { useProductHandlers } from '@/hooks/use-product-handlers';
import { useGetProduct } from '@/lib/react-query/querys-mutations-product';

const DeleteProduct = () => {
	const { open, idDelete } = useTableContext();
	const { data: product } = useGetProduct(idDelete);
	const { loading, onCancelDelete, handleDelete } =
		useProductHandlers();
	const title = `Are you sure you want to delete ${product?.name.toUpperCase()}`;
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

export default DeleteProduct;
