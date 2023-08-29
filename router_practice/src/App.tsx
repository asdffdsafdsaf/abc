import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom"; //npm i react-router-dom
import User from "./User";

//React Router Dom -> location.href
function App() {
  const jjs: number = 12;
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">about</Link>
          </ul>
          <ul>
            <Link to="/user">user</Link>
          </ul>
          <ul>
            <Link to="/topics">topics</Link>
          </ul>
        </nav>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props">Props</Link>
        </li>
      </ul>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  console.log(topicId);

  return <h1>Topic : {topicId}</h1>;
}

export default App;
