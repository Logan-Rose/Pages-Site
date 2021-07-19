import './App.css';
import Banner from './Banner';
import ENGLISH from './languages/english.json'
import FRENCH from './languages/french.json'

function NewSession({data,setLanguage}) {
  return (

    <div className="body">
      <Banner data={data} setLanguage={setLanguage}/>
      {data &&
      <div className="main">
        <form className="info">
          
          <h2>{(data.language==="english")?ENGLISH.NEW.TITLE:FRENCH.NEW.TITLE}</h2>

          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.NEW.COURSE:FRENCH.NEW.COURSE}:</h3>
            <input className="questionInput"></input>
          </div>

          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.NEW.SIZE:FRENCH.NEW.SIZE}:</h3>
            <input className="questionInput"></input>
          </div>

          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.NEW.LOCATION:FRENCH.NEW.LOCATION}:</h3>
            <input className="questionInput"></input>
          </div>
          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.NEW.DATE:FRENCH.NEW.DATE}:</h3>
            <input type="date" className="questionInput"></input>
          </div>
          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.NEW.TIME:FRENCH.NEW.TIME}:</h3>
            <input type="time" className="questionInput"></input>
          </div>
          <hr></hr>
        </form>

      </div>}
    </div>
  );
}

export default NewSession;
