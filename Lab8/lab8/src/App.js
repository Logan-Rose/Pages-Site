import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import YourInfo from './YourInfo';
import ViewSessions from './ViewSessions';
import MySessions from './MySessions';
import NewSession from './NewSession';
import Help from './Help'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/data').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data)
      setData(data);
      if(data.language === "english"){
        console.log("language is english");
      } else{
        console.log("fff")
      }
    })
  }, [])
  function setLanguage(e){
    data.language = e.target.id;
    fetch('http://localhost:8000/data' ,{
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then((data) =>{
      console.log("===");
      window.parent.location.reload();
    });  
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home data={data} setLanguage={setLanguage}/>
        </Route>
        <Route exact path="/info">
            <YourInfo data={data} setLanguage={setLanguage}/>
        </Route>
        <Route exact path="/sessions/view">
            <ViewSessions data={data} setLanguage={setLanguage}/>
        </Route>
        <Route exact path="/sessions/mine">
            <MySessions data={data} setLanguage={setLanguage}/>
        </Route>
        <Route exact path="/sessions/new">
            <NewSession data={data} setLanguage={setLanguage}/>
        </Route>
        <Route exact path="/help">
            <Help data={data} setLanguage={setLanguage}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
