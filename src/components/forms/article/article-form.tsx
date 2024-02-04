import Loading from '@/components/loading/loading';
import { useFormContext } from '@/hooks/use-context';
import { Form } from 'antd';
import ArticleFormItem from './article-form-item';
import ContentPreview from './content-preview';
import { useParams } from 'react-router-dom';
import { useGetArticle } from '@/lib/react-query/querys-mutations-article';
import { useForm } from '@/hooks/use-form';
import { useArticleHandlers } from '@/hooks/use-article-handlers';
import { IArticle } from '@/types';

const ArticleForm = () => {
	const initilaValues = {
		title: '',
		author: '',
		description: '',
		thumbnail: '',
		category: 'pemerintahan',
		content: '',
		tags: [],
	};

	const { id } = useParams();
	const { data: article } = useGetArticle(id || '');
	const { formName, form } = useFormContext();
	const { SetFieldsValue } = useForm();
	const { handleSubmit, loading } = useArticleHandlers();

	SetFieldsValue<IArticle>(article as IArticle);
	const content = form.getFieldValue('content');

	return (
		<>
			<Loading loading={loading} />
			<Form
				name={formName}
				form={form}
				autoComplete='off'
				layout='vertical'
				initialValues={initilaValues}
				onFinish={handleSubmit}>
				<ArticleFormItem />
			</Form>
			<ContentPreview contentPreview={content} />
		</>
	);
};

export default ArticleForm;
