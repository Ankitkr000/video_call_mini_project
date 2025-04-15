import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import "./home.css"
const Home = () => {

    const [roomId,setRoomId]=useState("")
    const navigate=useNavigate()

    const buttonHandler=()=>{
    

            navigate(`/room/${roomId}`)
    }
  return (
        <>

        <h2>write in the input box and click on join now</h2>
        <div className='input-div'>

        <input type="text" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
        <button onClick={buttonHandler}>Join Now</button>
        

        </div>
        </>
  )
}

export default Home
