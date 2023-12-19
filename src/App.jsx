import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './global/assets/theme';
import MainRoute from './routes/MainRoute';
import Footer from './global/components/Footer';
import NavBar from './global/components/NavBar';
import DownloadApp from './global/components/DownloadApp';

import { useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Loader from './global/components/Loader';
import { GlobalContext } from './global/contexts/GlobalProvider';
import ScrollToTop from './global/components/ScrollToTop';

function App() {
	const [theme, colorMode] = useMode();
	const { loader } = useContext(GlobalContext);
	const loggedIn = true;

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Loader isVisible={loader} />
				<CssBaseline />
				<NavBar />
				<MainRoute />

				<DownloadApp />
				<Footer />
				{/* <ScrollToTop /> */}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
