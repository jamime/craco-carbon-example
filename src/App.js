import logo from "./logo.svg";
import "./App.css";
import Button from "carbon-react/lib/components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Carbon</Button>
      </header>
    </div>
  );
}

export default App;
