import TotalData from '@/components/dashboard/total-data';
import { useGetProductStatistics } from '@/lib/react-query/querys-mutations-product';

const ProductStatistics = () => {
	const { data: productleStatistic } =
		useGetProductStatistics();
	return (
		<TotalData
			title='Total Products'
			path='/products'
			data={productleStatistic}
		/>
	);
};

export default ProductStatistics;
