import ProductForm from '@/components/forms/product/product-form';
import { useForm } from '@/hooks/use-form';

const UpdateProduct = () => {
	const { FormName } = useForm();
	FormName('update-product');
	return (
		<section className='relative'>
			<ProductForm />
		</section>
	);
};

export default UpdateProduct;
