import AnalitycsData from '@/components/dashboard/analitycs-data';
import NewData from '@/components/dashboard/new-data';
import TotalData from '@/components/dashboard/total-data';
import CustomTypography from '@/components/elements/typography';
import {
	dataAnalitycs,
	dataAnalitycsService,
	dataProduct,
	newArticle,
	newProduct,
} from '@/static/data-local';

const Home = () => {
	return (
		<>
			<section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(100px,auto)] md:auto-rows-[minmax(160px,auto)] gap-2'>
				<aside className='bg-[#192930] rounded-md row-span-2 p-2'>
					<CustomTypography>
						Produk Terbaru
					</CustomTypography>
					<div className='flex flex-col gap-4 p-2 text-white'>
						{newProduct.map((product, idx) => (
							<NewData key={idx} data={product} />
						))}
					</div>
				</aside>
				<div className='bg-[#192930] rounded-md p-2'>
					<TotalData data={dataProduct} />
				</div>
				<div className='bg-[#192930] rounded-md p-2'>
					<TotalData data={dataProduct} />
				</div>
				<div className='bg-[#192930] rounded-md row-span-2 p-2'>
					<CustomTypography>
						Artikel Terbaru
					</CustomTypography>
					<aside className='flex flex-col gap-4 p-2 text-white'>
						{newArticle.map((article, idx) => (
							<NewData key={idx} data={article} />
						))}
					</aside>
				</div>
				<div className='bg-[#192930] rounded-md p-2'>
					<TotalData data={dataProduct} />
				</div>
				<div className='bg-[#192930] rounded-md p-2'>
					<TotalData data={dataProduct} />
				</div>
				<div className='bg-[#192930] rounded-md md:col-span-2 row-span-2 p-2'>
					<AnalitycsData data={dataAnalitycs} services />
				</div>
				<div className='bg-[#192930] rounded-md md:col-span-2 row-span-2 p-2'>
					<AnalitycsData data={dataAnalitycsService} />
				</div>
			</section>
		</>
	);
};

export default Home;
