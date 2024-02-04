import ArticleForm from '@/components/forms/article/article-form';
import { useForm } from '@/hooks/use-form';

const CreateAericle = () => {
	const { FormName } = useForm();
	FormName('create-article');

	return (
		<section className='relative'>
			<ArticleForm />
		</section>
	);
};

export default CreateAericle;
