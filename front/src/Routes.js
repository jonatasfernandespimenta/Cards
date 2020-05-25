import React from 'react';
import { BrowserRouter as Br, Switch } from 'react-router-dom';

import Route from './Route';

import MainPage from './pages/MainPage';
import CardCreate from './components/CardCreate';
import Card from './components/Card';


function Routes() {
  return (
    <Br>
        <Switch>
            <Route path="/" exact layout={MainPage} component={Card} />
            <Route path="/cardcreate" layout={MainPage} component={CardCreate} />
        </Switch>
    </Br>
  );
}

export default Routes;
