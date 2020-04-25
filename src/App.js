import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
