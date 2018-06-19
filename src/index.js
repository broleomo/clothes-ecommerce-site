import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Shoes from './components/Shoes';
import Shirts from './components/Shirts';
import Hats from './components/Hats';

import About from './components/About';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import ShirtInfo from './components/ShirtInfo';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop-shirts/shirt-info' component={ShirtInfo} />
        <Route path='/shop-shirts' component={Shirts}/>
        <Route path='/shop-shoes' component={Shoes}/>
        <Route path='/shop-hats' component={Hats}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/thankyou' component={ThankYou}/>
        
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,

  document.getElementById('root'));
registerServiceWorker();
