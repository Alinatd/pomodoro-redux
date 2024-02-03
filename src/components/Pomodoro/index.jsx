import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { decreaseMinutes, decreaseSeconds, longBreak, reset, shortBreak, start, work } from '../../store/actions'
import useSound from 'use-sound'
import done from '../../sounds/done.mp3'

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number;
}

export const Pomodoro = () => {
  const dispatch = useDispatch()
  const { minutes, seconds,isPlaying } = useSelector((state => state))
  const formattedSeconds = formatNumber(seconds)
  const formatMinutes = formatNumber(minutes)

const [play] = useSound(done)

const PlaySound = () =>{
  if(formatMinutes <=0 && formattedSeconds<=0 )play()
}

  useEffect(()=>{
    let intervalId;
    intervalId = setInterval(()=>{
    if(isPlaying){
      dispatch(decreaseSeconds())
    }
    },1000)
    return ()=>clearInterval(intervalId)
  },[isPlaying,dispatch])
  
  useEffect(()=>{
    let interval1 ;
    interval1 = setInterval(() => {
      if(isPlaying){
        dispatch(decreaseMinutes())
      }
    }, 60000);
    return ()=> clearInterval(interval1)
  },[isPlaying,dispatch])

  

  return (
    
    <div className='main'>
    <div className='pomidor'>
  
      <div className='btns'>
        <button className='btn' onClick={()=>dispatch(work())}>Work</button>
        <button className='btn' onClick={()=>dispatch(shortBreak())}>Short Break</button>
        <button className='btn' onClick={()=>dispatch(longBreak())}>Long Break</button>
      </div>
      <span className='span'>{formatMinutes}:{formattedSeconds}{PlaySound()}</span>
      <div className='btn-change'>
      <button className='button'  style={
            isPlaying
              ? { background: "rgb(193, 228, 248);" }
              : { backgroundColor: "#5252d4" }
      }
           onClick={()=>dispatch(start())}>
        {isPlaying? 'Stop' : 'Start'}</button>
        <button style={
          {backgroundColor: '#5252d4'}
        } className='button' onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    </div>
    </div>
  )
}


