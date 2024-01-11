import { Flex, Space } from 'antd';
import TOTAL_LOGO from '@/assets/img/total-log.png';
import CustomTypography from '../elements/typography';
import { Link } from 'react-router-dom';
import { ITotalDataProps } from '@/types';
import { getColorPercentage } from '@/lib/utils/utils';
import { Line } from 'react-chartjs-2';
import { setupLineChart } from '@/lib/chart/chart-setup';
import { LineChartOption } from '@/lib/chart/chart-config';

const TotalData = ({ data }: ITotalDataProps) => {
	return (
		<div className='grid grid-cols-12 h-full'>
			<Flex
				vertical
				justify='space-between'
				className='col-span-6'>
				<Space>
					<img src={TOTAL_LOGO} alt='' />
					<small className='text-white font-bold opacity-55 w-fit'>
						{data.title}
					</small>
				</Space>
				<CustomTypography className='md:text-3xl'>
					{data.total}
				</CustomTypography>
				<Link
					to={data.path}
					className='hover:text-[#D2EEF4]'>
					Lihat Semua
				</Link>
			</Flex>
			<Flex
				vertical
				justify='flex-end'
				className='col-span-6 text-white'>
				<Line
					data={setupLineChart(data.dataChart)}
					options={LineChartOption}
				/>
				<Flex vertical className='text-end'>
					<span
						className={getColorPercentage(data.percent)}>
						{data.percent}%
					</span>
					<small className='opacity-30'>Bulan ini</small>
				</Flex>
			</Flex>
		</div>
	);
};

export default TotalData;
