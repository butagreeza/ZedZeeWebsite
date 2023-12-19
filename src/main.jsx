import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/montserrat';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { GlobalProvider } from './global/contexts/GlobalProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalProvider>
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		</GlobalProvider>
	</React.StrictMode>,
);
