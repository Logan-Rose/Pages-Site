import './App.css';
import {Link} from 'react-router-dom';
import ENGLISH from "./languages/english.json"
import FRENCH from "./languages/french.json"
import { useState, useEffect } from 'react';
function Banner({data,setLanguage}) {
  console.log(data)
  return (
    <div className="bannerContainer">
      {data && <div className="banner">
        <div className="bannerTitle">
          <Link className="title" to="/">
            <h1>{(data.language==="english")?ENGLISH.TITLE:FRENCH.TITLE}</h1>
          </Link>
        </div>
        <div className="bannerMenu">
          <ul className="menuItems">
            <li className="bannerMenuListItem"><Link to="/info"><button className = "bannerMenuButton menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.COURSEINFO:FRENCH.MENU.COURSEINFO}</h3></button></Link></li>
            <li className="bannerMenuListItem"><Link to="/sessions/view"><button className = "bannerMenuButton menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.VIEWSESSIONS:FRENCH.MENU.VIEWSESSIONS}</h3></button></Link></li>
            <li className="bannerMenuListItem"><Link to="/sessions/mine"><button className="bannerMenuButton menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.MYSESSIONS:FRENCH.MENU.MYSESSIONS}</h3></button></Link></li>
            <li className="bannerMenuListItem"><Link to="/sessions/new"><button className="bannerMenuButton menuButton"><h3>{(data.language==="english")?ENGLISH.MENU.NEWSESSION:FRENCH.MENU.NEWSESSION}</h3></button></Link></li>
            <li>
              <form className="languageInput">
                <div>
                  {(data.language==="english")?
                  <input type="radio" id="english" name="language" value="english" onClick={setLanguage} checked/>:
                  <input type="radio" id="english" name="language" value="english" onClick={setLanguage}/>
                  }
                <label for="english">&nbsp;&nbsp;{(data.language==="english")?ENGLISH.MENU.ENGLISH:FRENCH.MENU.ENGLISH}</label>
                </div>
                <div>
                  {(data.language==="english")?
                  <input type="radio" id="french" name="language" value="french" onClick={setLanguage}/>:
                  <input type="radio" id="french" name="language" value="french" onClick={setLanguage} checked/>
                  }
                  <label for="french">{(data.language==="english")?ENGLISH.MENU.FRENCH:FRENCH.MENU.FRENCH}</label>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
}


export default Banner;

