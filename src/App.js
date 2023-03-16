import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@mui/material';

function App() {
  const counter = useRef( 0 );
  const [ time, setTime ] = useState( 0 );
  const isStartedRef = useRef( false ); 
  const [ isStarted, setStarted ] = useState( false );
  const [ tours, setTours ] = useState( [] );

  useEffect(() => {
    const intervalId = setInterval( increaseTime, 100 );
    return () => clearInterval( intervalId );
  }, []);
  
  function increaseTime(){
    if ( isStartedRef.current ){
      counter.current = counter.current + 100;
      setTime( counter.current );
    }
  }

  function handleButtonClick() {
    isStartedRef.current = !isStartedRef.current;
    setStarted( isStartedRef.current );
  }

  function handleTour() {
    let newTours = tours;
    newTours.push( time );
    setTours( newTours );
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        { time }
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Button
          onClick={handleButtonClick}
        >
          { isStarted ? "Stop": "Start" }
        </Button>
        <Button
          onClick={handleTour}
        >
          Tour
        </Button>
      </div>
      { tours.map( tour => ( <div>{ tour }</div> ) ) }
    </div>
  );
}

export default App;
