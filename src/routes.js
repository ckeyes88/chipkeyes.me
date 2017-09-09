import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Landing from './Containers/Landing';
import Self from './Containers/Self';
import Thoughts from './Containers/Thoughts';
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/self" component={Self} />
    <Route exact path="/thoughts" component={Thoughts} />
    <Route exact path="/work" component={Landing} />
    <Route component={NotFound} />
  </Switch>
);
