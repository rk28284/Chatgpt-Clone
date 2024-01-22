import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <section className="side-bar">
<button> + New Chat</button>
<ul className="history">
  <li>BUGH</li>
</ul>

<nav>
  <p>Made By Rakesh</p>
</nav>
     </section>
     <section className="main">
      <h1>RakeshGpt</h1>
      <ul className="feed">
   
      </ul>
      <div className="bottom-section">
        <div className="input-container">
          <input text="Message RakeshGPT" />
          <div id="submit">
          &#10146;
          </div>


          <p className="info">

          ChatGPT can make mistakes. Consider checking important information.          </p>

        </div>

      </div>
      </section>
    </div>
  );
}

export default App;
