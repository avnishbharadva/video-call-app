import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [room, setRoom] = useState();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/room/${room}`)
  }, [room, navigate])

  return (
    <div className="container" style={{width: "500px"}}>
    <div className='text-center border border-info my-5 p-2'>
      <h3 className='my-4'>Welcome to Avi's One on One Video Call App</h3>

      <center><input type="text" className='form-control my-3' style={{width: "300px"}} value={room} onChange={e => setRoom(e.target.value)} placeholder="Enter Room ID" /></center>

      <button className='btn btn-primary my-2' onClick={handleClick}>JOIN</button>
    </div>
    </div>
  )
}

export default Home
