import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
import { LevelsContextProvider } from './context/LevelContext';
import { ResultsContextProvider } from './context/ResultContext';
import { ViewportContextProvider } from './context/ViewportContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ViewportContextProvider>
			<AuthContextProvider>
				<LevelsContextProvider>
					<SongsContextProvider>
						<ResultsContextProvider>
							<App />
						</ResultsContextProvider>
					</SongsContextProvider>
				</LevelsContextProvider>
			</AuthContextProvider>
		</ViewportContextProvider>
	</React.StrictMode>
);
