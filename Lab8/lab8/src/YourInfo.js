import './App.css';
import Banner from './Banner';
import ENGLISH from './languages/english.json'
import FRENCH from './languages/french.json'
import { useState, useEffect } from 'react';

function YourInfo({data,setLanguage}) {
  return (
    <div className="body">
      <Banner data={data} setLanguage={setLanguage}/>
      {data &&
      <div className="main">
        <form className="info">
          
          <h2>{(data.language==="english")?ENGLISH.INFO.TITLE:FRENCH.INFO.TITLE}</h2>

          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.INFO.NAME:FRENCH.INFO.NAME}:</h3>
            <input className="questionInput"></input>
          </div>

          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.INFO.EMAIL:FRENCH.INFO.EMAIL}:</h3>
            <input className="questionInput"></input>
          </div>

          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.INFO.SCHOOL:FRENCH.INFO.SCHOOL}:</h3>
            <input className="questionInput"></input>
          </div>
          <div className="question">
            <h3>{(data.language==="english")?ENGLISH.INFO.COURSES:FRENCH.INFO.COURSES}:</h3>
            <div className="courses">
              <input className="questionInput"></input>
            </div><br/>
            <button class="menuButton" onClick={test}> <br/>{(data.language==="english")?ENGLISH.INFO.ADDCOURSES:FRENCH.INFO.ADDCOURSES}<br/>&nbsp;</button>
          </div>
          <hr></hr>
        </form>

      </div>}
    </div>
  );
}
function test(e){
  e.preventDefault();
  console.log("Hello");


}

export default YourInfo;
