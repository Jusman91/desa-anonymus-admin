import { useFormContext } from '@/hooks/use-context';
import { useGetCategories } from '@/lib/react-query/querys-categories';
import { useGetArticle } from '@/lib/react-query/querys-mutations-article';
import { Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import FormItemCategories from '../form-item-categories';
import FormItemButton from '../form-item-button';
import FormItemUploadImg from '../form-item-upload-Img';
import { IArticle } from '@/types';
import ItemTags from './tag/item-tags';
import Editor from '@/lib/editor/editor';
import { articleFormValidation } from '@/validations/article-form-validation';

const { Item } = Form;
const ArticleFormItem = () => {
	const { id } = useParams();
	const { formName } = useFormContext();
	const update = formName === 'update-article';
	const { data: categories } = useGetCategories('article');
	const { data: article } = useGetArticle(id || '');

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-x-4'>
			<div className='col-span-1 h-full overflow-hidden'>
				<FormItemUploadImg data={article as IArticle} />
				<FormItemCategories
					data={categories}
					rules={articleFormValidation.category}
				/>
				<Item name='tags'>
					<ItemTags />
				</Item>
			</div>
			<div className='col-span-1 md:col-span-2'>
				<Item
					name='title'
					label='Title'
					required
					rules={articleFormValidation.title}
					hasFeedback>
					<Input
						placeholder='Type title article'
						showCount
						maxLength={50}
					/>
				</Item>
				<Item
					name='author'
					label='Author'
					required
					rules={articleFormValidation.author}
					hasFeedback>
					<Input
						placeholder='Type author article'
						showCount
						maxLength={15}
					/>
				</Item>
				<Item
					name='description'
					label='Description'
					required
					rules={articleFormValidation.description}
					hasFeedback>
					<Input.TextArea
						placeholder='Type description article'
						showCount
						maxLength={200}
						style={{ resize: 'none' }}
					/>
				</Item>
				<Item
					name='content'
					required
					rules={articleFormValidation.content}
					hasFeedback>
					<Editor />
				</Item>
			</div>
			<div className='col-span-1 md:col-span-3'>
				<FormItemButton update={update} />
			</div>
		</div>
	);
};

export default ArticleFormItem;
