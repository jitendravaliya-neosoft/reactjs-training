import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import List from './components/List'
import Counter from './components/Counter';
function App() {
  const title="Home Page";
  const courses=["ANgular","React","Vue"];
  const employeeList=[
    {"id":1,"name":"anuj","age":23,"salary":56789},
    {"id":2,"name":"anil","age":33,"salary":66789},
    {"id":3,"name":"sunil","age":43,"salary":66789},
    {"id":4,"name":"xyz","age":33,"salary":76789},
    {"id":5,"name":"abc","age":32,"salary":86789}
]
  return (
    <div className="App">
       <h1> Welcome to NeoSoft</h1>
       <p>This is react training</p>
       <hr/>
       <Counter />
       <hr/>
       <Home mytitle={title} mycourses={courses}/>
       <hr/>
       <List empList={employeeList}/>
    </div>
  );
}

export default App;
