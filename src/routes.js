import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import Dashboard from './components/dashboard';
import NotFoundPage from './components/not-found-page';
import NewDealForm from './components/new-deal-form';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Dashboard}/>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/new-deal" component={NewDealForm} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;

