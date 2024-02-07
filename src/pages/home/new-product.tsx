import NewData from '@/components/dashboard/new-data';
import CustomTypography from '@/components/elements/typography';
import { useGetProducts } from '@/lib/react-query/querys-mutations-product';

const NewProduct = () => {
	const { data: dataProducts } = useGetProducts({
		limit: 6,
		page: 1,
		search: '',
		sort: '',
	});
	const { data: products } = dataProducts ?? {};
	return (
		<>
			<CustomTypography>Produk Terbaru</CustomTypography>
			<div className='flex flex-col gap-4 p-2 text-white'>
				{products?.map((product, idx) => (
					<NewData key={idx} data={product} />
				))}
			</div>
		</>
	);
};

export default NewProduct;
