import Nav from './pages/Nav';
import Adithya from './pages/Adithya';
import Jlokesh from './pages/Jlokesh';
import Lokesh from './pages/Lokesh';
import Anuhya from './pages/Anuhya';
import Geethika from './pages/Geethika';
import Dashboard from './pages/Dashboard';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/our-grades/18-277" component={Adithya} />
          <Route exact path="/our-grades/18-086" component={Jlokesh} />
          <Route exact path="/our-grades/18-117" component={Lokesh} />
          <Route exact path="/our-grades/18-236" component={Anuhya} />
          <Route exact path="/our-grades/18-396" component={Geethika} />
          <Route exact path="/our-grades" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
