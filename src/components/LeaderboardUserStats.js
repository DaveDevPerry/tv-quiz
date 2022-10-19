import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const LeaderboardUserStats = ({ userStats, users }) => {
	return (
		<StyledLeaderboardUserStats className='br'>
			<h2>current position</h2>
			<table>
				{/* <caption>current position</caption> */}
				<thead>
					<tr>
						<th>pos</th>
						<th className='full'>username</th>
						<th className='wrap'>games played</th>
						<th className='wrap'>songs played</th>
						<th className='wrap'>songs correct</th>
						<th className='wrap'>overall success</th>
						<th>
							<FaStar className='star-on' />
						</th>
					</tr>
				</thead>
				<tbody>
					{userStats && userStats && (
						<tr>
							<td>
								{users.findIndex((object) => {
									return object.username === userStats.username;
								}) + 1}
							</td>
							<td className='full'>{userStats.username}</td>
							<td>{userStats.results.playedCount}</td>
							<td>{userStats.results.songCount}</td>
							<td>{userStats.results.correctSongCount}</td>
							<td>
								{(
									(userStats.results.correctSongCount /
										userStats.results.songCount) *
									100
								).toFixed(2)}{' '}
								%
							</td>
							<td>{userStats.correctSongIDs.length}</td>
						</tr>
					)}
					{/* {userStats &&
						userStats.map((user, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className='full'>{user.username}</td>
								<td>-</td>
								<td>-</td>
								<td>-</td>
								<td>{user.correctSongIDs.length}</td>
							</tr>
						))} */}
				</tbody>
			</table>
		</StyledLeaderboardUserStats>
	);
};
const StyledLeaderboardUserStats = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	h2 {
		color: ${({ theme }) => theme.txtGrey};
		text-transform: capitalize;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		thead {
			tr {
				background-color: #dddddd;
				text-transform: uppercase;
				th {
					border-bottom: 1px solid #bdbdbd;
					/* padding: 1rem 0.5rem; */
					padding: 1rem;
					font-size: 1.4rem;
					.star-on {
						color: ${({ theme }) => theme.txtGrey};
					}
					&.full {
						flex: 1;
						text-align: left;
						/* width: 100%; */
					}
					&:nth-of-type(2) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(3) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(4) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(5) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(6) {
						background-color: rgba(0, 0, 0, 0.07);
						/* display: grid;
						place-content: center; */
						/* display: flex;
						justify-content: center;
						align-items: center; */
						/* height: 100%; */
						/* vertical-align: center; */
					}
					&.wrap {
						word-wrap: wrap;
					}
				}
			}
		}
		tbody {
			/* border-bottom: 1px solid; */
			tr {
				&:nth-of-type(even) {
					background-color: #ededed;
				}
				td {
					padding: 1rem;
					/* padding: 1rem 0.5rem; */
					text-align: center;
					&.full {
						flex: 1;
						text-align: left;
						/* width: 100%; */
					}
					/* display: grid;
					place-content: center; */
					&:nth-of-type(1) {
						font-weight: bolder;
					}
					&:nth-of-type(2) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(3) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(4) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(5) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(6) {
						background-color: rgba(0, 0, 0, 0.07);
						font-weight: bolder;
					}
				}
			}
		}
		/* .full {
			flex: 1;
			text-align: left;
		} */
	}
`;

export default LeaderboardUserStats;
