import { ChartData } from 'chart.js';

const labels = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const setupLineChart = (
	data: number[],
): ChartData<'line'> => {
	const dataChart: ChartData<'line'> = {
		labels,
		datasets: [
			{
				label: '',
				data,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
	return dataChart;
};

export const setupBarChart = (
	data: number[],
): ChartData<'bar'> => {
	const dataChart: ChartData<'bar'> = {
		labels,
		datasets: [
			{
				label: 'Layanan',
				data,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
	return dataChart;
};
