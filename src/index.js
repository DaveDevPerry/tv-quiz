import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
// import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
import { LevelsContextProvider } from './context/LevelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<LevelsContextProvider>
				<SongsContextProvider>
					<App />
				</SongsContextProvider>
			</LevelsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
