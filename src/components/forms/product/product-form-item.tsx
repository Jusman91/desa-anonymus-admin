import { Form, Input, InputNumber, Select } from 'antd';
import { useGetCategories } from '@/lib/react-query/querys-categories';
import { useFormContext } from '@/hooks/use-context';
import FormItemCategories from '@/components/forms/form-item-categories';
import { useParams } from 'react-router-dom';
import { useGetProduct } from '@/lib/react-query/querys-mutations-product';
import FormItemUploadImg from '../form-item-upload-Img';
import { IProduct } from '@/types';
import FormItemButton from '../form-item-button';
import { productFormValidation } from '@/validations/product-form-validation';

const { Item } = Form;
const { Option } = Select;

const ProductFormItem = () => {
	const { id } = useParams();
	const { formName } = useFormContext();
	const update = formName === 'update-product';
	const { data: categories } = useGetCategories('product');
	const { data: product } = useGetProduct(id || '');

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-x-4'>
			<div className='col-span-1 h-full overflow-hidden'>
				<FormItemUploadImg data={product as IProduct} />
			</div>
			<div className='col-span-1 md:col-span-2'>
				<Item
					name='name'
					label='Name'
					required
					rules={productFormValidation.name}
					hasFeedback>
					<Input placeholder='Type name product' />
				</Item>
				<div className='flex flex-col gap-0 md:flex-row md:gap-4 w-full'>
					<Item
						className='flex-1'
						name='price'
						label='Price'
						rules={productFormValidation.price}
						required
						hasFeedback>
						<InputNumber className='w-full' min={0} />
					</Item>
					<FormItemCategories data={categories} />
					<Item
						className='flex-1'
						name='inStock'
						label='In-Stock'
						rules={productFormValidation.inStock}
						required
						hasFeedback>
						<Select placeholder='Select stock'>
							<Option value={true}>Ready</Option>
							<Option value={false}>Not Ready</Option>
						</Select>
					</Item>
				</div>
				<Item
					name='contact'
					label='Contact'
					required
					rules={productFormValidation.contact}
					hasFeedback>
					<Input
						addonBefore={'+62'}
						placeholder='Type contact'
					/>
				</Item>
				<Item
					name='location'
					label='Location'
					required
					rules={productFormValidation.location}
					hasFeedback>
					<Input placeholder='Type location' />
				</Item>
				<Item
					name='description'
					label='Description'
					required
					rules={productFormValidation.description}
					hasFeedback>
					<Input.TextArea
						placeholder='Type description product'
						rows={4}
					/>
				</Item>
			</div>
			<div className='col-span-1 md:col-span-3'>
				<FormItemButton update={update} />
			</div>
		</div>
	);
};

export default ProductFormItem;
