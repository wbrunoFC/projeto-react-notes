import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';
import { Routes } from './routes';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	</StrictMode>
);
