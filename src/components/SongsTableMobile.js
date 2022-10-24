import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useSongsContext } from '../hooks/useSongsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const SongsTableMobile = () => {
	const { songs } = useSongsContext();
	const { currentUser } = useAuthContext();
	return (
		<StyledSongsTableMobile className='br'>
			{/* <div className='table-container'> */}
			<h2>all songs</h2>
			<table>
				<thead>
					<tr>
						<th></th>
						<th className='full'>title</th>
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
					{songs &&
						songs.map((song, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className='full'>{song.title}</td>
								{/* <td>-</td>
								<td>-</td>
								<td>-</td> */}
								<td>
									{currentUser.correctSongIDs.includes(song._id) ? (
										<div className='td-star-wrapper'>
											<FaStar className='star-on' />
										</div>
									) : (
										<div className='td-star-wrapper'>
											<FaStar className='star-off' />
										</div>
									)}
								</td>
							</tr>
						))}
				</tbody>
			</table>
			{/* </div> */}
		</StyledSongsTableMobile>
	);
};
const StyledSongsTableMobile = styled.div`
	padding: 1rem;
	/* overflow-y: auto; */
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
			/* position: sticky;
				top: 0; */
			tr {
				background-color: #dddddd;
				text-transform: uppercase;
				/* position: sticky;
					top: 0; */
				th {
					border-bottom: 1px solid #bdbdbd;
					padding: 0.5rem 1rem;
					/* padding: 1rem; */
					/* position: sticky;
						top: 0; */
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
						.td-star-wrapper {
							display: grid;
							place-content: center;

							.star-on {
								/* color: ${({ theme }) => theme.bgCircle}; */
								color: ${({ theme }) => theme.white};
								/* color: ${({ theme }) => theme.bgLightGrey}; */
							}
						}
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
					padding: 0.5rem;
					/* padding: 1rem 0.5rem; */
					text-align: center;
					&.full {
						flex: 1;
						text-align: left;
						padding: 0.5rem 1rem;
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
						.td-star-wrapper {
							display: grid;
							place-content: center;
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
		}
		/* .full {
			flex: 1;
			text-align: left;
		} */
	}
	/* thead th {
			position: sticky;
			top: 0;
		} */
	/* } */
`;

export default SongsTableMobile;
