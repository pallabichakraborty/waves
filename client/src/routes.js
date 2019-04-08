import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/hoc/layout';
import LoginRegister from './components/login_register';
import Register from './components/login_register/register';
import UserDashboard from './components/user';
import Auth from './components/hoc/auth';
import Shop from './components/Shop';

const routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)} />


        <Route path="/" exact component={Auth(Home,null)} />
        <Route path="/shop" exact component={Auth(Shop,null)} />


        <Route path="/login" exact component={Auth(LoginRegister,false)} />
        <Route path="/register" exact component={Auth(Register,false)} />
      </Switch>
    </Layout>
  );
};

export default routes;


