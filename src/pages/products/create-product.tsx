import ProductForm from '@/components/forms/product/product-form';
import { useForm } from '@/hooks/use-form';

const CreateProduct = () => {
	const { FormName } = useForm();
	FormName('create-product');
	return (
		<section className='relative'>
			<ProductForm />
		</section>
	);
};

export default CreateProduct;
