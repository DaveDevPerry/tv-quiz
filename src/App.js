import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

import { useAuthContext } from './hooks/useAuthContext';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { GamesContextProvider } from './context/GameContext';

function App() {
	const { user } = useAuthContext();
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<GamesContextProvider>
				<div className='App'>
					<BrowserRouter>
						<AnimatedRoutes
							user={user}
							themeToggler={themeToggler}
							theme={theme}
						/>
					</BrowserRouter>
				</div>
			</GamesContextProvider>
		</ThemeProvider>
	);
}

export default App;
