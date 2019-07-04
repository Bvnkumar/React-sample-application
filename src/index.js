import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './parent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Parent eligible={true}/><Parent/></div>, document.getElementById('root'));
registerServiceWorker();
