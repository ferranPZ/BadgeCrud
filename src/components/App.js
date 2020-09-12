import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout.js';
import NotFound from '../pages/NotFound';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import Home from '../pages/Home';
import Badges from '../pages/Badges';

function App() {
  return (
  
    <BrowserRouter>
      <Layout>  
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgesId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgesId" component={BadgeDetailsContainer} />
          <Route exact path="/" component={Home} />

          <Route  component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>

    
  );
}

export default App;