import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './parent';
import Conditional from './conditional';
import List from './list'
import registerServiceWorker from './registerServiceWorker';
const sample=[1,2,3]
// ReactDOM.render(<div><Parent eligible={true}/><Parent/></div>, document.getElementById('root'));
// ReactDOM.render(<Conditional name={'narendra'}/>,document.getElementById('root'))
ReactDOM.render(<List sample={sample}/>,document.getElementById('root'))

registerServiceWorker();
