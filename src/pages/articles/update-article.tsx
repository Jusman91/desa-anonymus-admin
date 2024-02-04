import ArticleForm from '@/components/forms/article/article-form';
import { useForm } from '@/hooks/use-form';

const UpdateArticle = () => {
	const { FormName } = useForm();
	FormName('update-article');
	return (
		<section className='relative'>
			<ArticleForm />
		</section>
	);
};

export default UpdateArticle;
