import App from './App';
import { StrictMode } from 'react';
import { render } from 'react-dom';

const rootEle = document.getElementById('root') as HTMLElement;

render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootEle
);
