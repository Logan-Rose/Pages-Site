import './App.css';
import Banner from './Banner';
import ENGLISH from './languages/english.json'
import FRENCH from './languages/french.json'

function MySessions({data,setLanguage}) {
  return (

    <div className="body">
      <Banner data={data} setLanguage={setLanguage}/>
      {data &&
      <div className="main">
        <form className="info">
          
          <h2>{(data.language==="english")?ENGLISH.MENU.MYSESSIONS:FRENCH.MENU.MYSESSIONS}</h2>
          <ul class="sessions">
            <li class="session">
              <p class="sessionInfo">SEG 2103</p>
              <p class="sessionInfo">5/5</p>
              <p class="sessionInfo">CRX 524</p>
              <p class="sessionInfo">07/04/21 3:00PM</p>
              <p class="sessionInfo"><button>{(data.language==="english")?ENGLISH.SESSIONS.CANCEL:FRENCH.SESSIONS.CANCEL}</button></p>
            </li>
          </ul>    
        </form>
      </div>}
    </div>
  );
}

export default MySessions;
