import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import LengthControler from './components/LengthControler';

const App = () => {
  const [breakTimeLength, setBreakTimeLength] = useState(5)
  const [sessionTimeLenth, setSessionTimeLenth] = useState(25)
  
  const increaseTimeLength = (name) => {
    if (name === 'break') {
      setBreakTimeLength(oldLength => oldLength < 60 ? oldLength + 1 : oldLength)
    } else {
      setSessionTimeLenth(oldLength => oldLength < 60 ? oldLength + 1 : oldLength)
    }
  }
  
  const decreaseTimeLength = (name) => {
    if (name === 'break') {
      setBreakTimeLength(oldLength => oldLength === 1 ? oldLength : oldLength - 1)
    } else {
      setSessionTimeLenth(oldLength => oldLength === 1 ? oldLength : oldLength - 1)
    }
  }
  
  const reset = () => {
    setBreakTimeLength(5)
    setSessionTimeLenth(25)
  }
  
  return (
    <div id="app" className="container-fluid text-center">
      <div className="row justify-content-center align-items-center" style={{ height: "100vh", }}>
        <div className="col col-md-8 col-lg-6 p-4">
          <h1 className="display-1 mb-5">25 + 5 Clock</h1>
          <div className="container">
            <div className="row">
              <LengthControler 
                name="break" 
                timeLength={breakTimeLength} 
                increaseTimeLength={increaseTimeLength}
                decreaseTimeLength={decreaseTimeLength} 
              />
              <LengthControler 
                name="session" 
                timeLength={sessionTimeLenth} 
                increaseTimeLength={increaseTimeLength}
                decreaseTimeLength={decreaseTimeLength} 
              />
            </div> 
            <Timer breakTimeLength={breakTimeLength} sessionTimeLenth={sessionTimeLenth} reset={reset}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
