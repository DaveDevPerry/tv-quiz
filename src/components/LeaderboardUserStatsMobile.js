import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const LeaderboardUserStatsMobile = ({ userStats, users }) => {
	return (
		<StyledLeaderboardUserStatsMobile className='br'>
			<h2>current position</h2>
			<table>
				{/* <caption>current position</caption> */}
				<thead>
					<tr>
						<th>pos</th>
						<th className='full'>username</th>
						{/* <th>singles</th>
						<th>album</th>
						<th>b-sides</th> */}
						<th>
							<div className='td-star-wrapper'>
								<FaStar className='star-on' />
							</div>
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
							{/* <td>-</td>
							<td>-</td>
							<td>-</td> */}
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
		</StyledLeaderboardUserStatsMobile>
	);
};
const StyledLeaderboardUserStatsMobile = styled.div`
	padding: 1rem;
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
					padding: 0.5rem 1rem;
					/* .star-on {
						color: ${({ theme }) => theme.txtGrey};
					} */
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
						.td-star-wrapper {
							display: grid;
							place-content: center;
							.star-on {
								color: ${({ theme }) => theme.green};
							}
						}
					}
					/* &:nth-of-type(4) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(5) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(6) {
						background-color: rgba(0, 0, 0, 0.07);
					} */
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
					padding: 0.5rem 1rem;
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
						font-weight: bolder;
					}
					/* &:nth-of-type(4) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(5) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(6) {
						background-color: rgba(0, 0, 0, 0.07);
						font-weight: bolder;
					} */
				}
			}
		}
		/* .full {
			flex: 1;
			text-align: left;
		} */
	}
`;

export default LeaderboardUserStatsMobile;
