import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const LeaderboardTable = ({ users }) => {
	return (
		<StyledLeaderboardTable className='br'>
			<h2>leaderboard</h2>
			<table>
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
					{users &&
						users.map((user, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className='full'>{user.username}</td>
								<td>{user.results.playedCount}</td>
								<td>{user.results.songCount}</td>
								<td>{user.results.correctSongCount}</td>
								<td>
									{user.results.correctSongCount === 0 &&
									user.results.songCount === 0 ? (
										'-'
									) : (
										<>
											{(
												(user.results.correctSongCount /
													user.results.songCount) *
												100
											).toFixed(2)}{' '}
											%
										</>
									)}
								</td>
								<td>{user.correctSongIDs.length}</td>
							</tr>
						))}
				</tbody>
			</table>
			{/* <table>
				<thead>
					<tr>
						<th>pos</th>
						<th className='full'>username</th>
						<th>singles</th>
						<th>album</th>
						<th>b-sides</th>
						<th>
							<FaStar className='star-on' />
						</th>
					</tr>
				</thead>
				<tbody>
					{users &&
						users.map((user, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className='full'>{user.username}</td>
								<td>-</td>
								<td>-</td>
								<td>-</td>
								<td>{user.correctSongIDs.length}</td>
							</tr>
						))}
				</tbody>
			</table> */}
		</StyledLeaderboardTable>
	);
};
const StyledLeaderboardTable = styled.div`
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
				background-color: ${({ theme }) => theme.theadTr};
				text-transform: uppercase;
				th {
					border-bottom: 1px solid ${({ theme }) => theme.theadTh};
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
					background-color: ${({ theme }) => theme.trEven};
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

export default LeaderboardTable;
