import React from 'react';

const ResultWidget = ({ result }) => {
	return (
		<div>
			<h3>result state</h3>
			<ul>
				<li>playedCount: {result && result.playedCount}</li>
				<li>songCount:{result && result.songCount}</li>
				<li>correctSongCount:{result && result.correctSongCount}</li>
				<li>correctSongs: {result && result.correctSongs.length}</li>
			</ul>
		</div>
	);
};

export default ResultWidget;
