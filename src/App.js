import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from './pages';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/zyx-bank-website/" component={Home} exact></Route>
        <Route path="/zyx-bank-website/signin" component={Signin} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
