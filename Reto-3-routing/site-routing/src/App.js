import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hola. Soy un navbar :)</h1>
      <div className="pages">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
