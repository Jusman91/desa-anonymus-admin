import { Form } from 'antd';
import ProductFormItem from './product-form-item';
import { useParams } from 'react-router-dom';
import { useGetProduct } from '@/lib/react-query/querys-mutations-product';
import { useFormContext } from '@/hooks/use-context';
import { IProduct } from '@/types';
import { useProductHandlers } from '@/hooks/use-product-handlers';
import Loading from '@/components/loading/loading';
import { useForm } from '@/hooks/use-form';

const ProductForm = () => {
	const initilaValues = {
		name: '',
		price: 0,
		category: 'lainnya',
		contact: '',
		description: '',
		location: '',
		inStock: true,
	};

	const { id } = useParams();
	const { data: product } = useGetProduct(id || '');
	const { formName, form } = useFormContext();
	const { SetFieldsValue } = useForm();
	const { handleSubmit, loading } = useProductHandlers();

	SetFieldsValue<IProduct>(product as IProduct);

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
				<ProductFormItem />
			</Form>
		</>
	);
};

export default ProductForm;
