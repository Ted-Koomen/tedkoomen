import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { 
  Home, 
  About,
  Resume 
} from './pageExports'
const Main = () => (
  <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </Switch>
  </div>
)

export default Main