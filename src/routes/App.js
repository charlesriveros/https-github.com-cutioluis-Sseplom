import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../container/Home/Home";
import NotFound from "../container/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
