import {
	Chart as ChartJS,
	CategoryScale,
	scales,
	plugins,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	scales,
	plugins,
);

// interface LineProps {
//   options: ChartOptions<'line'>;
//   data: ChartData<'line'>;
// }

const options: ChartOptions<'line'> = {
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
	// tension: 0.6,
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
			min: 0,
			// max: 200,
		},
	},
};

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

const data = {
	labels,
	datasets: [
		{
			label: '',
			data: [5, 10, 5, 5, 5, 10, 5, 5, 10, 5, 5, 5],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
	],
};
const Chart = () => {
	return (
		<Line options={options} data={data} />
		// <div className='w-full h-full'>
		// </div>
	);
};

export default Chart;
