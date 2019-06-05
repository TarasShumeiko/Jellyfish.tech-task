import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Name from './components/Name';
import Currencies from './components/Currencies';
import Bitcoin from './components/Bitcoin';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Name} />
      <Route path="/currencies" component={Currencies} />
      <Route path="/currencies/bitcoin" component={Bitcoin} />
    </Switch>
  );
}

export default App;