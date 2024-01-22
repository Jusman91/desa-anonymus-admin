import { IResponseCategories } from '@/types';
import { productFormValidation } from '@/validations/product-form-validation';
import { Form, Select } from 'antd';

const { Item } = Form;
const { Option } = Select;

const FormItemCategories = ({
	data,
}: IResponseCategories) => {
	return (
		<Item
			className='flex-1'
			name='category'
			label='Category'
			required
			rules={productFormValidation.category}
			hasFeedback>
			<Select
				placeholder='Select a category'
				listItemHeight={10}
				listHeight={350}
				className='capitalize'>
				{data?.map((category, idx: number) => (
					<Option
						key={idx}
						value={category.name}
						style={{ textTransform: 'capitalize' }}>
						{category.name}
					</Option>
				))}
			</Select>
		</Item>
	);
};

export default FormItemCategories;
