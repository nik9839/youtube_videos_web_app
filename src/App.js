import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components'
import Videos from './modules/videos'
import Video from './modules/video'

export default function App() {

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/videos" component={Videos} />
          <Route path="/video/:id" component={Video} />
          <Redirect to="/videos" />
        </Switch>
      </Layout>
    </Router>

  );
}