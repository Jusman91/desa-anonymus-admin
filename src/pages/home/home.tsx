import NewProduct from './new-product';
import NewArticle from './new-article';
import UserStatistics from './user-statistics';
import ArticleStatistics from './article-statistics';
import ProductStatistics from './product-statistics';

const Home = () => {
	return (
		<>
			<section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(100px,auto)] md:auto-rows-[minmax(160px,auto)] gap-2'>
				<div className='bg-bkg-container rounded-md row-span-2 p-2'>
					<NewProduct />
				</div>
				<div className='bg-bkg-container rounded-md p-2'>
					<ProductStatistics />
				</div>
				<div className='bg-bkg-container rounded-md p-2'>
					<ArticleStatistics />
				</div>
				<div className='bg-bkg-container rounded-md row-span-2 p-2'>
					<NewArticle />
				</div>
				<div className='bg-bkg-container rounded-md p-2'>
					<UserStatistics />
				</div>
				<div className='bg-bkg-container rounded-md p-2 grid place-items-center'>
					<small className='text-orange-600 font-bold tracking-widest'>
						**Coming soon**
					</small>
				</div>
				<div className='bg-bkg-container rounded-md md:col-span-2 row-span-2 p-2 grid place-items-center'>
					{/* <AnalitycsData data={dataAnalitycs} services /> */}
					<small className='text-orange-600 font-bold tracking-widest'>
						**Coming soon**
					</small>
				</div>
				<div className='bg-bkg-container rounded-md md:col-span-2 row-span-2 p-2 grid place-items-center'>
					{/* <AnalitycsData data={dataAnalitycsService} /> */}
					<small className='text-orange-600 font-bold tracking-widest'>
						**Coming soon**
					</small>
				</div>
			</section>
		</>
	);
};

export default Home;
