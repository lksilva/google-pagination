import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './components/Home/Home.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
