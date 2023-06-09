/* @refresh reload */
import { render } from 'solid-js/web';
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';
import App from './App';
import { Router } from '@solidjs/router';
import { CardContextProvider } from './context/CardContext';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <Router> <CardContextProvider> <App /> </CardContextProvider> </Router>, root);
