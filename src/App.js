import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Home = ()=>{
  return (<h1>Home</h1>);
}

const About = ()=>{
  return (<h1>About</h1>);
}

export default App;
