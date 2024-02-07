import { Flex, Space } from 'antd';
import TOTAL_LOGO from '@/assets/img/total-log.png';
import CustomTypography from '../elements/typography';
import { Link } from 'react-router-dom';
import { ITotalDataProps } from '@/types';
import {
	getColorPercentage,
	getMonthName,
} from '@/lib/utils/utils';
import { Line } from 'react-chartjs-2';
import { setupLineChart } from '@/lib/chart/chart-setup';
import { LineChartOption } from '@/lib/chart/chart-config';

const TotalData = ({
	title,
	path,
	data,
}: ITotalDataProps) => {
	const newDataCountPerMonth = (
		data?.newDataCountPerMonth ?? []
	).sort((a, b) => a.year - b.year);

	const dataCount = data?.newDataCountPerMonth.map(
		(item) => item.total,
	);

	const labels = newDataCountPerMonth.map((item) => {
		const monthName = getMonthName(item.month);
		return monthName;
	});

	const increasePercentage = () => {
		if (!data || data?.totalData === 0) return 0; // Hindari pembagian dengan nol
		const currentMonthTotal =
			dataCount[dataCount.length - 1];
		return (
			(currentMonthTotal / data?.totalData) *
			100
		).toFixed(2);
	};

	return (
		<div className='grid grid-cols-12 h-full'>
			<Flex
				vertical
				justify='space-between'
				className='col-span-6'>
				<Space>
					<img src={TOTAL_LOGO} alt='' />
					<small className='text-color-base font-bold opacity-55 w-fit'>
						{title}
					</small>
				</Space>
				<CustomTypography className='md:text-3xl'>
					{data?.totalData}
				</CustomTypography>
				<Link to={path} className='hover:text-[#D2EEF4]'>
					Lihat Semua
				</Link>
			</Flex>
			<Flex
				vertical
				justify='flex-end'
				className='col-span-6 text-color-base'>
				<Line
					data={setupLineChart(dataCount, labels)}
					options={LineChartOption}
				/>
				<Flex vertical className='text-end'>
					<span
						className={getColorPercentage(
							increasePercentage() as number,
						)}>
						{increasePercentage()}%
					</span>
					<small className='dark:opacity-30'>
						Bulan ini
					</small>
				</Flex>
			</Flex>
		</div>
	);
};

export default TotalData;
