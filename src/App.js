import logo from "./logo.svg";
import "./App.css";

function App() {
  const redirect = () => {
    window.location.href =
      "https://sso.epics.weii.io?RelayState=https://epics-sso-client-1.vercel.app";
  };

  return (
    <div className="App">
      <button onClick={() => redirect()}>Click here to login !!</button>
    </div>
  );
}

export default App;
