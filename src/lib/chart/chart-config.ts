import {
	Chart as ChartJS,
	CategoryScale,
	scales,
	plugins,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions,
	TooltipItem,
} from 'chart.js';
import { getSatisfaction } from '../utils';
import { IChartConfigOptions } from '@/types';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	scales,
	plugins,
);

export const LineChartOption: ChartOptions<'line'> = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
			position: 'top' as const,
		},
		title: {
			display: false,
		},
	},
	animations: {
		tension: {
			duration: 1000,
			easing: 'linear',
			from: 1,
			to: 0,
			loop: true,
		},
	},
	scales: {
		x: {
			display: false,
		},
		y: {
			display: false,
		},
	},
};

export const chartConfigOptions = ({
	services,
}: IChartConfigOptions): ChartOptions<'bar'> => {
	const chartOptions: ChartOptions<'bar'> = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: (context: TooltipItem<'bar'>) => {
						const rawValue = context.raw as number;
						if (services) {
							return getSatisfaction(rawValue);
						} else {
							return;
						}
					},
				},
			},
		},
	};
	return chartOptions;
};
