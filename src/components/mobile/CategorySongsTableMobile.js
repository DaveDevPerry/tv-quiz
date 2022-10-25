import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLevelsContext } from '../../hooks/useLevelsContext';

const CategorySongsTableMobile = () => {
	const { level } = useLevelsContext();
	const { currentUser } = useAuthContext();
	return (
		<StyledCategorySongsTableMobile className='br'>
			<h2>all {level && level.category}</h2>
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
					{level &&
						level.songs
							.sort((a, b) => {
								return a.title > b.title ? 1 : -1;
							})
							.map((song, index) => (
								<tr key={song._id}>
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
		</StyledCategorySongsTableMobile>
	);
};
const StyledCategorySongsTableMobile = styled.div`
	padding: 1rem;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	flex: 1;
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
				background-color: ${({ theme }) => theme.theadTr};
				text-transform: uppercase;
				/* position: sticky;
					top: 0; */
				th {
					border-bottom: 1px solid ${({ theme }) => theme.theadTh};
					/* padding: 1rem 0.5rem; */
					padding: 0.5rem 1rem;
					/* position: sticky;
						top: 0; */

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
								color: ${({ theme }) => theme.white};
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
					background-color: ${({ theme }) => theme.trEven};
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

export default CategorySongsTableMobile;
