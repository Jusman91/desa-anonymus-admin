import { Bar } from 'react-chartjs-2';
import CustomTypography from '../elements/typography';
import { setupBarChart } from '@/lib/chart/chart-setup';
import { IAnalitycsDataProps } from '@/types';
import { chartConfigOptions } from '@/lib/chart/chart-config';
import { Flex } from 'antd';

const AnalitycsData = ({
	data,
	services,
}: IAnalitycsDataProps) => {
	const labels = ['label1', 'label2'];
	return (
		<div className='h-full'>
			<Flex
				vertical
				justify='space-between'
				className='h-full'>
				<CustomTypography>{data.title}</CustomTypography>
				<Bar
					data={setupBarChart(data.dataChart, labels)}
					options={chartConfigOptions({ services })}
				/>
			</Flex>
		</div>
	);
};

export default AnalitycsData;
