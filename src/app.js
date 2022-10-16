import React  , {useState , useRef} from 'react'
import "./timer.css";


const App = ()=>  {


  const [timeLeft,setTimeLeft] = useState(0);


  let intervalRef = useRef(null);

  const startTimer = ()=>{

 
    if(intervalRef.current != null) return; 

    intervalRef.current = setInterval(()=>{
          setTimeLeft(timeleft=>

          {  
            
            return timeleft+1;
    
            
           } );
    },1000)
  }

  const stopTimer = ()=>{ 
    if(intervalRef.current == null) return;  
        clearInterval(intervalRef.current);
        intervalRef.current = null;
   }

  const resetTimer = ()=>{
    clearInterval(intervalRef.current);
    setTimeLeft(0);
    intervalRef.current = null;
  }
   

  return (
    <div className='app' >

      <h2>Counter !</h2>

      <div className='timer' >
        <span>{timeLeft}</span>
      </div>

      <div className="buttons" >
        <button onClick={startTimer} >Start</button>
        <button onClick={stopTimer} >Stop</button>
        <button onClick={resetTimer} >Reset</button>
      </div>
       
    </div>
  )
}





export default App;