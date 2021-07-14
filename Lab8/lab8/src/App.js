import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
