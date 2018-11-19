import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppLayout from './components/base_layout/AppLayout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppLayout />, document.getElementById('root'));
registerServiceWorker();
