import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/hlc/layout';
import LoginRegister from './components/login_register';
import Register from './components/login_register/register';
import UserDashboard from './components/user';

const routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={UserDashboard} />

        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginRegister} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Layout>
  );
};

export default routes;


