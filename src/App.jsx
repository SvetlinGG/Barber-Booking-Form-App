import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Booking from './components/Booking'


function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user-data" element={<div>User Data</div>} />
      </Routes>
    </>
  )
}

export default App
