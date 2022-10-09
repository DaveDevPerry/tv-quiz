import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChartWidget from '../components/ChartWidget';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
// import LevelSelectButton from '../components/LevelSelectButton';
// import { useLevelsContext } from '../hooks/useLevelsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
import { FaStar } from 'react-icons/fa';

const Leaderboard = () => {
	const { dataLoaded } = useStateContext();

	const { users } = useAuthContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
		// if (isMobile) {
		// 	log('is mobile');
		// } else {
		// 	log('is not mobile');
		// }
	}, [navigate, dataLoaded]);
	// const { songs } = useSongsContext();
	// const { levels } = useLevelsContext();
	return (
		<StyledLeaderboard
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h2>Leaderboard page</h2>

			<div className='table-container br'>
				<table>
					<thead>
						<tr>
							<th></th>
							<th className='full'>username</th>
							<th>
								<FaStar className='star-on' />
							</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user, index) => (
								<tr key={index}>
									<td>{index + 1 < 10 ? `0${index + 1}` : index + 1}</td>
									<td className='full'>{user.username}</td>
									<td>
										{user.correctSongIDs.length < 10
											? `0${user.correctSongIDs.length}`
											: user.correctSongIDs.length}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>

			<ChartWidget users={users} />
		</StyledLeaderboard>
	);
};
const StyledLeaderboard = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	padding: 1rem; */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	flex: 1;
	max-width: 42rem;
	padding: 0.5rem 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	/* margin: 0 auto; */
	/* .level-select-container {
		padding: 0.5rem;
		flex: 1;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 2rem;
	} */
	h2 {
		/* color: ${({ theme }) => theme.primaryColor}; */
		text-transform: capitalize;
		text-align: center;
	}
	ol {
		padding: 2rem;
		flex: 1;
		/* list-style:  */
		li {
			display: flex;
			/* display: list-item; */
			justify-content: space-between;
			align-items: center;
			p {
				text-transform: capitalize;
			}
			.star-off {
				/* color: ${({ theme }) => theme.bgCircle}; */
				color: ${({ theme }) => theme.borderLine};
				/* color: ${({ theme }) => theme.bgLightGrey}; */
			}
		}
	}
	.table-container {
		padding: 2rem;
		table {
			width: 100%;
			border-collapse: collapse;
			thead {
				tr {
					th {
						border-bottom: 1px solid;
						padding: 0.3rem;
						.star-on {
							/* color: ${({ theme }) => theme.bgCircle}; */
							color: ${({ theme }) => theme.gold};
							/* color: ${({ theme }) => theme.bgLightGrey}; */
						}
					}
				}
			}
			tbody {
				border-bottom: 1px solid;
				tr {
					&:nth-of-type(odd) {
						background-color: #d2d2d2;
					}
					td {
						padding: 0.3rem;
					}
				}
			}
			.full {
				flex: 1;
				text-align: left;
			}
		}
	}
`;

export default Leaderboard;
