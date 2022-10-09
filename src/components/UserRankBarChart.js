import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { useAuthContext } from '../hooks/useAuthContext';
// import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const UserRankBarChart = ({ users }) => {
	// const { users } = useAuthContext();
	const clonedUsers = [...users];

	// Math.max(...clonedWeights.map(o => o.target_weight))
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: 'player leaderboard',
			},
		},

		// 	indexAxis: 'y' as const,
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		// responsive: true,
		// plugins: {
		//   legend: {
		//     position: 'right' as const,
		//   },
		//   title: {
		//     display: true,
		//     text: 'Chart.js Horizontal Bar Chart',
		//   },
		// },
		// scales: {
		// 	y: {
		// 		suggestedMin: targets[0].target_weight,
		// 		suggestedMax:
		// 			Math.ceil(Math.max(...clonedWeights.map((o) => o.load)) / 5) * 5,
		// 	},

		// },
	};

	// const nameLabels = clonedUsers.map((a) => a.username);
	const songLabels = clonedUsers.map((a) => a.correctSongIDs.length);

	// const nameLabels = weights.map((a) => a.createdAt.slice(5, 10));
	// const nameLabels = weights.map((a) => a.createdAt);

	const data = {
		labels: songLabels,
		// labels: nameLabels,
		// labels: weights.map((a) => a.createdA),
		// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Name',
				data: clonedUsers.map((a) => a.username),
				// data: clonedUsers.map((a) => a.correctSongIDs.length),
				// data: [100, 115, 200, 50, 523],
				// data: labels.map(() =>
				// 	faker.datatype.number({ min: -1000, max: 1000 })
				// ),
				borderColor: 'rgb(38, 151, 244)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
				// borderColor: 'rgb(255, 99, 132)',
				// backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			// {
			// 	label: 'Dataset 2',
			// 	data: labels.map(() =>
			// 		faker.datatype.number({ min: -1000, max: 1000 })
			// 	),
			// 	borderColor: 'rgb(53, 162, 235)',
			// 	backgroundColor: 'rgba(53, 162, 235, 0.5)',
			// },
		],
	};

	return <Bar options={options} data={data} />;
};

export default UserRankBarChart;
