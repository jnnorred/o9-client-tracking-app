import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import { Route, Link } from "react-router-dom";
import Navbar from './Componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/clients" component={Clients} />
    </div>
  );
}

export default App;
