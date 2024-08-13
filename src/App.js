import Home from "./components/Home";
import Alerts from './Alert';




function App() {

  // LOAD DISAPPEAR USEEFFECT



  ///////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <div>
      <Alerts />
      <div className="loader-wrapper">
      </div>
      <Home />
    </div>
  );
}

export default App;
