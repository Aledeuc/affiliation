import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FeaturedProductsPage from './components/FeaturedProductsPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/featured-products" component={FeaturedProductsPage} />
    </Switch>
  );
}

export default Routes;
