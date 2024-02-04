import ModalDelete from '@/components/fragments/modal-delete';
import { useArticleHandlers } from '@/hooks/use-article-handlers';
import { useTableContext } from '@/hooks/use-context';
import { useGetArticle } from '@/lib/react-query/querys-mutations-article';

const DeleteArticle = () => {
	const { open, idDelete } = useTableContext();
	const { data: article } = useGetArticle(idDelete);
	const { loading, onCancelDelete, handleDelete } =
		useArticleHandlers();
	const title = `Are you sure you want to delete ${article?.title.toUpperCase()}`;

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

export default DeleteArticle;
