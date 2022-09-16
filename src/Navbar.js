import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <div className="background">
    <div className="header">
        <img src={logo} className="logo" alt="logo"/>
        <h1>ReactFacts</h1>
        <h2>React Course - Project1</h2>

    </div>
    </div>
  );
}

export default Navbar;
