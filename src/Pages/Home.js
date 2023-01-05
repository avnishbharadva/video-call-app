import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [room, setRoom] = useState();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/room/${room}`)
  }, [room, navigate])

  return (
    <div>
      <h3>Home Page</h3>

      <input type="text" value={room} onChange={e => setRoom(e.target.value)} placeholder="Enter Room ID" />
      <button onClick={handleClick}>JOIN</button>
    </div>
  )
}

export default Home
