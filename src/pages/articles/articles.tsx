import DataTable from '@/components/table/data-table';
import TableColumnArticle from '@/components/table/table-column-article';
import { useArticleHandlers } from '@/hooks/use-article-handlers';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import { useGetArticles } from '@/lib/react-query/querys-mutations-article';
import { IArticle } from '@/types';
import { DeleteArticle } from '..';

const Articles = () => {
	const { columnArticle } = TableColumnArticle();
	const { page, limit, sort, search, category } =
		useSearchParamsQuery();
	const { data, isFetching, isLoading } = useGetArticles({
		page,
		limit,
		sort,
		search,
		category,
	});

	const { data: articles, totalData } = data ?? {};
	const loading = isFetching || isLoading;
	const { handleTableChangeArticle } = useArticleHandlers();

	return (
		<section className='relative'>
			<DataTable
				columns={columnArticle}
				data={articles as IArticle[]}
				totalData={totalData as number}
				loading={loading}
				onChange={handleTableChangeArticle}
				addData='articles'
			/>
			<DeleteArticle />
		</section>
	);
};

export default Articles;
