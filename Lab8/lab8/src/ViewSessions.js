import './App.css';
import Banner from './Banner';
import ENGLISH from "./languages/english.json"
import FRENCH from "./languages/french.json"
import { useState, useEffect } from 'react';

function ViewSessions({data,setLanguage}) {
  return (
    <div className="body">
      <Banner data={data} setLanguage={setLanguage}/>
      {data &&
      <div className="main">
        <form className="info">
          
          <h2>{(data.language==="english")?ENGLISH.MENU.VIEWSESSIONS:FRENCH.MENU.VIEWSESSIONS}</h2>
          <ul class="sessions">
            <li class="session">
              <p class="sessionInfo">SEG 2103</p>
              <p class="sessionInfo">5/5</p>
              <p class="sessionInfo">CRX 524</p>
              <p class="sessionInfo">07/04/21 3:00PM</p>
              <p class="sessionInfo"><button>{(data.language==="english")?ENGLISH.SESSIONS.SIGNUP:FRENCH.SESSIONS.SIGNUP}</button></p>
            </li>
            <li class="session">
              <p class="sessionInfo">ECO 1104</p>
              <p class="sessionInfo">2/7</p>
              <p class="sessionInfo">CRX 523</p>
              <p class="sessionInfo">07/08/21 1:00PM</p>
              <p class="sessionInfo"><button>{(data.language==="english")?ENGLISH.SESSIONS.SIGNUP:FRENCH.SESSIONS.SIGNUP}</button></p>
            </li>
            <li class="session">
              <p class="sessionInfo">HIS 2351</p>
              <p class="sessionInfo">1/4</p>
              <p class="sessionInfo">161 Laurier Ave W</p>
              <p class="sessionInfo">07/02/21 4:00PM</p>
              <p class="sessionInfo"><button>{(data.language==="english")?ENGLISH.SESSIONS.SIGNUP:FRENCH.SESSIONS.SIGNUP}</button></p>
            </li>
            <li class="session">
              <p class="sessionInfo">CSI 3120</p>
              <p class="sessionInfo">3/5</p>
              <p class="sessionInfo">174A Rideau St</p>
              <p class="sessionInfo">07/04/21 7:00PM</p>
              <p class="sessionInfo"><button>{(data.language==="english")?ENGLISH.SESSIONS.SIGNUP:FRENCH.SESSIONS.SIGNUP}</button></p>
            </li>
            <li class="session">
              <p class="sessionInfo">PSY 1101</p>
              <p class="sessionInfo">7/10</p>
              <p class="sessionInfo">CRX 522</p>
              <p class="sessionInfo">07/08/21 9:00AM</p>
              <p class="sessionInfo"><button>{(data.language==="english")?ENGLISH.SESSIONS.SIGNUP:FRENCH.SESSIONS.SIGNUP}</button></p>
            </li>
          </ul>    
        </form>
      </div>}
    </div>
  );
}
export default ViewSessions;
