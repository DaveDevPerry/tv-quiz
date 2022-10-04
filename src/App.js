import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

import { useAuthContext } from './hooks/useAuthContext';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './assets/globalStyles';
import { lightTheme, darkTheme } from './assets/Themes';
import { GamesContextProvider } from './context/GameContext';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { StateContext } from './lib/context';

function App() {
	const { user } = useAuthContext();
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<GamesContextProvider>
				<StateContext>
					<div className='App'>
						<BrowserRouter>
							<Toaster />
							<Header />
							<AnimatedRoutes
								user={user}
								themeToggler={themeToggler}
								theme={theme}
							/>
							<Footer />
						</BrowserRouter>
					</div>
				</StateContext>
			</GamesContextProvider>
		</ThemeProvider>
	);
}

export default App;
