import TotalData from '@/components/dashboard/total-data';
import { useGetArticleStatistics } from '@/lib/react-query/querys-mutations-article';

const ArticleStatistics = () => {
	const { data: articleStatistic } =
		useGetArticleStatistics();
	return (
		<TotalData
			title='Total Articles'
			path='/articles'
			data={articleStatistic}
		/>
	);
};

export default ArticleStatistics;
