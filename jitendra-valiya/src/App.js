import logo from './logo.svg';
import './App.css';
import List from './components/post-list';

function App() {
  const post=[
    {
      "id":1,
      "postname": "Jitendra valiya",
      "postdescription" : "dummy description",
      "author":"dummy",
      "date":"27-12-2021"
    }
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Jitendra valiya</h1>
      <List postListing={post}/>
    </div>
  );
}

export default App;
