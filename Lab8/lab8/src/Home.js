import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import React from "react";
import ENGLISH from "./languages/english.json"
import FRENCH from "./languages/french.json"

function Home({data,setLanguage}) {
  return (
    <div className="App">
      {data &&
      <header className="App-header">
        <div>
          <h1>{(data.language==="english")?ENGLISH.TITLE:FRENCH.TITLE}</h1>
          <hr></hr>
          <ul className="mainMenuList">
            <li className="mainMenuListItem"><Link to="/info"><button class="menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.COURSEINFO:FRENCH.MENU.COURSEINFO}</h3></button></Link></li>
            <li className="mainMenuListItem"><Link to="/sessions/view"><button class="menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.VIEWSESSIONS:FRENCH.MENU.VIEWSESSIONS}</h3></button></Link></li>
            <li className="mainMenuListItem"><Link to="/sessions/mine"><button class="menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.MYSESSIONS:FRENCH.MENU.MYSESSIONS}</h3></button></Link></li>
            <li className="mainMenuListItem"><button class="menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.NEWSESSION:FRENCH.MENU.NEWSESSION}</h3></button></li>
          </ul>
          <Link to="/help"><div className="helpSection">
            <p className="help">
              ?
            </p>
          </div>
          </Link>
        </div>
      </header>}
    </div>
    
  );
}

export default Home;
