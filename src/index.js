import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
// import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
import { LevelsContextProvider } from './context/LevelContext';
import { ResultsContextProvider } from './context/ResultContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<LevelsContextProvider>
				<SongsContextProvider>
					<ResultsContextProvider>
						<App />
					</ResultsContextProvider>
				</SongsContextProvider>
			</LevelsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
