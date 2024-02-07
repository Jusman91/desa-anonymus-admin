import NewData from '@/components/dashboard/new-data';
import CustomTypography from '@/components/elements/typography';
import { useGetArticles } from '@/lib/react-query/querys-mutations-article';

const NewArticle = () => {
	const { data: dataArticles } = useGetArticles({
		limit: 6,
		page: 1,
		search: '',
		sort: '',
	});
	const { data: articles } = dataArticles ?? {};
	return (
		<>
			<CustomTypography>Artikel Terbaru</CustomTypography>
			<div className='flex flex-col gap-4 p-2 text-white'>
				{articles?.map((article, idx) => (
					<NewData key={idx} data={article} />
				))}
			</div>
		</>
	);
};

export default NewArticle;
