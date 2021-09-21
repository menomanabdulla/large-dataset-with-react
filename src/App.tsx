import React from 'react';
import {  Navigation, RouteMessage } from './Utilities/'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  PaginationFaker,
  PaginationAPI,
  
  InfiniteScrollFaker,
  InfiniteScrollAPI,
  
  VirtualizeFaker,
  VirtualizeAPI,

  WindowFaker,
  WindowAPI
} from './Components'



const App:React.FC = () => {
  return (
    <Router>
      <Navigation />
      <RouteMessage />
      <Switch>
          <Route path="/" component={ PaginationFaker } exact={true} />
          <Route path="/pagination/api" component={ PaginationAPI } exact={true} />
          <Route path="/infinite-scroll/faker" component={ InfiniteScrollFaker } exact={true} />
          <Route path="/infinite-scroll/api" component={ InfiniteScrollAPI } exact={true} />
          <Route path="/virtualized/faker" component={ VirtualizeFaker } exact={true} />
          <Route path="/virtualized/api" component={ VirtualizeAPI } exact={true} />
          <Route path="/window/faker" component={WindowFaker } exact={true} />
          <Route path="/window/api" component={ WindowAPI } exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
