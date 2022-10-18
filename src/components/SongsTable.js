import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useSongsContext } from '../hooks/useSongsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const SongsTable = () => {
	const { songs } = useSongsContext();
	const { currentUser } = useAuthContext();
	return (
		<StyledSongsTable className='br'>
			<h2>all songs</h2>
			<table>
				<thead>
					<tr>
						<th></th>
						<th className='full'>title</th>
						<th>singles</th>
						<th>album</th>
						<th>b-sides</th>
						<th>
							<FaStar className='star-on' />
						</th>
					</tr>
				</thead>
				<tbody>
					{songs &&
						songs.map((song, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								{/* <td>{index + 1 < 10 ? `0${index + 1}` : index + 1}</td> */}
								<td className='full'>{song.title}</td>
								<td>-</td>
								<td>-</td>
								<td>-</td>
								<td>
									{currentUser.correctSongIDs.includes(song._id) ? (
										<FaStar className='star-on' />
									) : (
										<FaStar className='star-off' />
									)}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</StyledSongsTable>
	);
};
const StyledSongsTable = styled.div`
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
						/* font-weight: bolder; */
						.star-off {
							/* color: ${({ theme }) => theme.bgCircle}; */
							color: ${({ theme }) => theme.tapeBase};
							/* color: ${({ theme }) => theme.bgLightGrey}; */
						}
						.star-on {
							/* color: ${({ theme }) => theme.bgCircle}; */
							color: ${({ theme }) => theme.green};
							/* color: ${({ theme }) => theme.bgLightGrey}; */
						}
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

export default SongsTable;
