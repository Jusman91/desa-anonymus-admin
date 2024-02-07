import { ChartData } from 'chart.js';
export const setupLineChart = (
	data: number[],
	labels: string[],
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
	labels: string[],
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
