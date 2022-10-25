import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useSongsContext } from '../hooks/useSongsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useViewport } from '../hooks/useViewport';

const SongsTableMobile = () => {
	const { songs } = useSongsContext();
	const { currentUser } = useAuthContext();

	const { height } = useViewport();
	// const breakpoint = 620;

	const tHeight = `${height}px`;

	// const bodyStyle = {
	// 	height: '100px',
	// };
	return (
		<StyledSongsTableMobile className='br'>
			<h2>all songs</h2>
			<table id='all-songs-table'>
				<thead>
					<tr>
						<th></th>
						<th className='full'>title</th>
						<th>
							<div className='td-star-wrapper'>
								<FaStar className='star-on' />
							</div>
						</th>
					</tr>
				</thead>
				<tbody style={{ height: `calc(${tHeight} - 234.5px)` }}>
					{/* <tbody style={bodyStyle}> */}
					{songs &&
						songs.map((song, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className='full'>{song.title}</td>
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
		</StyledSongsTableMobile>
	);
};
const StyledSongsTableMobile = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	overflow-y: hidden;
	flex: 1;
	h2 {
		color: ${({ theme }) => theme.txtGrey};
		text-transform: capitalize;
	}
	#all-songs-table {
		width: 100%;
		border-collapse: collapse;
		thead {
			display: block;
			tr {
				background-color: ${({ theme }) => theme.theadTr};
				text-transform: uppercase;
				width: 100%;
				th {
					border-bottom: 1px solid ${({ theme }) => theme.theadTh};
					padding: 0.5rem;
					min-width: 30px;
					&.full {
						flex: 1;
						text-align: left;
						width: 100%;
						padding: 0.5rem 1rem;
					}
					&:nth-of-type(2) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(3) {
						background-color: rgba(0, 0, 0, 0.07);
						min-width: 30px;
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
			display: block;
			overflow-y: auto;
			tr {
				display: block;
				background-color: ${({ theme }) => theme.trOdd};
				/* &:nth-of-type(odd) {
					background-color: ${({ theme }) => theme.trOdd};
				} */
				&:nth-of-type(even) {
					background-color: ${({ theme }) => theme.trEven};
				}
				td {
					padding: 0.5rem;
					text-align: center;
					&.full {
						flex: 1;
						text-align: left;
						padding: 0.5rem 1rem;
						width: 100%;
					}
					&:nth-of-type(1) {
						font-weight: bolder;
						min-width: 30px;
					}
					&:nth-of-type(2) {
						background-color: rgba(0, 0, 0, 0.07);
					}
					&:nth-of-type(3) {
						background-color: rgba(0, 0, 0, 0.07);
						min-width: 30px;
						.td-star-wrapper {
							display: grid;
							place-content: center;
							.star-off {
								color: ${({ theme }) => theme.tapeBase};
							}
							.star-on {
								color: ${({ theme }) => theme.green};
							}
						}
					}
				}
			}
		}
	}
	/* #all-songs-table {
		display: inline-grid;
		grid-template-areas:
			'head-fixed'
			'body-scrollable';
		width: 100%;
		border-collapse: collapse;
		border: 1px solid;
		thead {
			grid-area: head-fixed;
			width: 100%;
			tr {
				background-color: ${({ theme }) => theme.theadTr};
				text-transform: uppercase;
				width: 100%;
				th {
					border-bottom: 1px solid ${({ theme }) => theme.theadTh};
					padding: 0.5rem 1rem;
					&.full {
						flex: 1;
						text-align: left;
						width: 100%;
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
			grid-area: body-scrollable;
			overflow: auto;
			height: calc(60vh - 55px);
			tr {
				&:nth-of-type(even) {
					background-color: ${({ theme }) => theme.trEven};
				}
				td {
					padding: 0.5rem;
					text-align: center;
					&.full {
						flex: 1;
						text-align: left;
						padding: 0.5rem 1rem;
						width: 100%;
					}
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
								color: ${({ theme }) => theme.tapeBase};
							}
							.star-on {
								color: ${({ theme }) => theme.green};
							}
						}
					}
				}
			}
		}
	} */
	/* table {
		width: 100%;
		border-collapse: collapse;
		thead {
			tr {
				background-color: ${({ theme }) => theme.theadTr};
				text-transform: uppercase;
				th {
					border-bottom: 1px solid ${({ theme }) => theme.theadTh};
					padding: 0.5rem 1rem;
					&.full {
						flex: 1;
						text-align: left;
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
			tr {
				&:nth-of-type(even) {
					background-color: ${({ theme }) => theme.trEven};
				}
				td {
					padding: 0.5rem;
					text-align: center;
					&.full {
						flex: 1;
						text-align: left;
						padding: 0.5rem 1rem;
					}
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
								color: ${({ theme }) => theme.tapeBase};
							}
							.star-on {
								color: ${({ theme }) => theme.green};
							}
						}
					}
				}
			}
		}
	} */
`;

export default SongsTableMobile;
