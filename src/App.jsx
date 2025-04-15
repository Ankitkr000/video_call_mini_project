
import './App.css'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import VideoRoom from './pages/VideoRoom'
import Rootpage from './pages/Rootpage'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Rootpage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/room/:roomId' element={<VideoRoom/>} />

    </Routes>
    
    </>
  )
}

export default App
