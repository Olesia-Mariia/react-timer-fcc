import {useState, useEffect, useRef} from 'react'
import format from '../helpers/format'

const Timer = ({ breakTimeLength, sessionTimeLenth, reset }) => {
  const [time, setTime] = useState(1500)
  const [isBreak, setIsBreak] = useState(false)
  const [isTimerActive, setIsTimerActive] = useState(false)
  
  const timerRef = useRef()
  const audioRef = useRef(null)
  
  useEffect(() => {
    setTime(sessionTimeLenth * 60)
  }, [sessionTimeLenth]) 
  
  useEffect(() => { 
    if (isTimerActive) {      
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    } 
    return () => clearInterval(timerRef.current)
  }, [isTimerActive])
  
  useEffect(() => {
    if (time === 0) {
      audioRef.current.play();
      setIsBreak(!isBreak)
      setTime(() => !isBreak ? breakTimeLength * 60 : sessionTimeLenth * 60)
    }
  }, [time])
  
  const timerToggler = () => {
    if(isTimerActive) clearInterval(timerRef.current)
    setIsTimerActive(!isTimerActive)
  }
  
  const resetTimer = () => {
    audioRef.current.currentTime = 0
    audioRef.current.pause();
    setIsTimerActive(false)
    setTime(1500)
    setIsBreak(false)
    reset()
  }
  
  return (<>
      <div className="row justify-content-center">
        <div className="col-6 mt-4 p-3 rounded-pill" style={{ "border": `5px solid ${time < 60 ? '#a50d0d': '#d9ed92'}`, 'color': `${time < 60 ? '#a50d0d': 'black'}`,}}>
          <div className="h3" id="timer-label">{!isBreak ? 'Session' : 'Break'}</div>
          <div className="display-3" id="time-left">{format(time)}</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <button type="button" className="btn d-inline-block" id="start_stop" onClick={() => timerToggler()}>
            {!isTimerActive ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
            </svg>
            }
          </button>
          <button type="button" className="btn d-inline-block" id="reset" onClick={() => resetTimer()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <audio id="beep" ref={audioRef} preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
  </>)
}

export default Timer
