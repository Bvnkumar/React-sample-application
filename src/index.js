import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Parent from './parent';
import Conditional from './conditional';
import List from './list'
 import registerServiceWorker from './registerServiceWorker';
import FormClass from './form';
import Temper from './temperature'
import InterClass from './interface';
import ProductsMain from './productlist/products-mainpage';

const sample=[1,2,3];
const products=[
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
// import firstComp from './parent';
// ReactDOM.render(<div><Parent eligible={true}/><Parent/></div>, document.getElementById('root'));
// ReactDOM.render(<Conditional name={'narendra'}/>,document.getElementById('root'))
// ReactDOM.render(<List sample={sample}/>,document.getElementById('root'))
//ReactDOM.render(<Temper/>,document.getElementById('root'))
//  ReactDOM.render(<InterClass name="naredra" id="1"/>,document.getElementById('root'))
ReactDOM.render(<ProductsMain products={products}/>,document.getElementById('root'))

registerServiceWorker();
