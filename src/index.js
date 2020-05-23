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
import Router1 from './router1';
import Router2 from './router2';
import not from './notfound';
import ParentOne from './parent1';
import Child from './child';
import CharApp from './graph';
import ProductsMain from './productlist/products-mainpage';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';
const sample=[1,2,3];
const products=[
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
const routing=(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/router1">Router1</Link>
        </li>
        <li><Link to="/router2">Router2</Link>
</li>

      </ul>
    </div>
    <Switch>
    <Route path="/router1/:id" component={Router1}></Route>
    <Route path="/router2" component={Router2}></Route>
    <Route component={not}></Route>
    </Switch>
  </Router>
)
// import firstComp from './parent';
// ReactDOM.render(<div><Parent eligible={true}/><Parent/></div>, document.getElementById('root'));
// ReactDOM.render(<Conditional name={'narendra'}/>,document.getElementById('root'))
// ReactDOM.render(<List sample={sample}/>,document.getElementById('root'))
//ReactDOM.render(<Temper/>,document.getElementById('root'))
//  ReactDOM.render(<InterClass name="naredra" id="1"/>,document.getElementById('root'))
// ReactDOM.render(<ProductsMain products={products}/>,document.getElementById('root'));
ReactDOM.render(<CharApp />,document.getElementById('root'))

registerServiceWorker();
