import React from 'react';
import './Box.scss'
import Timer from '../Timer/Timer';
import Rocket from '../Rocket/Rocket';
import { useEffect,useState } from 'react';
import star from './Star.png';
import { useNavigate } from 'react-router-dom';

function Box() {
  const[show ,setShow] = useState(true)
  const[stars,setStars] = useState(false)
  const [data,setData] = useState('')
  const [counter,setCounter] = useState(3)
  const navigate = useNavigate()
  useEffect(()=>{
      setTimeout(() => {
        setShow(false)
        setStars(true)
        
      
      }, 3000);

      setTimeout(() => {
       
        setStars(false)
      }, 4000);
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  
 function handleSubmit () {
  if(data == 'admin@gmail.com'){
     
    navigate('/live')
   
}
 }

  return (
   <div className="Box-main">
     <div className="Box-top">
     <div className="Box-header">
     <div className="rocket-container">
     <Rocket/>
     </div>
      Launching New Module Soon!
     </div>
     <div className="subtitle">
     Exciting things are in the works! We're currently <span>Crafting a new feature</span> for you. Keep an eye out for updates – We're working to make it available soon!
     
     </div>
     </div>
     <div className="middle-section">
      GET READY FOR THE REVEAL !
      {show ? <div className="animation">
        <div className="div"></div>
        <div className="div"></div>
      </div>:<div className="hello"></div>}
      {
        stars? <div className="star">
        <img src={star} alt="star" />
      </div>:<div className="hello"></div>
      }
     </div>
     {
      (counter >= 0)?<Timer data={counter}/>:<div></div>
     }
     <div className="Box-bottom">
      <div className="upper">
      Be the first to know! Share your email and We'll notify you when it's live
      </div>
      <div className="lower">
        <input type="email" placeholder='Please enter your email id' onChange={(event)=>{setData(event.target.value)}} />
        <div className="btn" onClick={handleSubmit}>Notify Me</div>
      </div>
     </div>
   </div>
  )
}

export default Box