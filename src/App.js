import Home from "./components/Home";
import loader from "./images/loader.gif"
import { useEffect } from 'react'
import Alerts from './Alert';




function App() {

  // LOAD DISAPPEAR USEEFFECT

  useEffect(() => {
    const loader = document.querySelector('.loader-wrapper')

    function vanish() {
      loader.classList.add('disappear')
    }


    window.addEventListener('load', vanish)
  }, [])


  ///////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <div>
      <Alerts />
      <div className="loader-wrapper">
        <img src={loader} alt="" />
      </div>
      <Home />
    </div>
  );
}

export default App;
