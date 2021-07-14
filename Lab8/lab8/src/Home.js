import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <h1>Study Buddy</h1>
          <hr></hr>
          <ul>
            <li><button><h3>Enter Course Info</h3></button></li>
            <li><button><h3>View Sessions</h3></button></li>
            <li><button><h3>My Sessions</h3></button></li>
            <li><button><h3>New Session</h3></button></li>
          </ul>
          <div className="helpSection">
            <p className="help">
              ?
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
