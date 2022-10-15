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
			<table>
				<thead>
					<tr>
						<th></th>
						<th className='full'>title</th>
						{/* <th>singles</th>
						<th>album</th>
						<th>b-sides</th> */}
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
								<td className='full'>{song.title}</td>
								{/* <td>-</td>
								<td>-</td>
								<td>-</td> */}
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
			{/* </div> */}
		</StyledSongsTableMobile>
	);
};
const StyledSongsTableMobile = styled.div`
	padding: 2rem;
	overflow-y: auto;
	/* height: 400px; */
	/* flex: 1; */
	/* .table-container {
		overflow-y: auto; */
	/* height: min-content; */
	/* height: 400px; */
	/* height: 100%; */
	/* flex: 1; */
	/* thead th {
			position: sticky;
			top: 0;
		} */
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
					/* padding: 1rem 0.5rem; */
					padding: 1rem;
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
	/* thead th {
			position: sticky;
			top: 0;
		} */
	/* } */
`;

export default SongsTableMobile;
