import { useState } from 'react'
import { WindowTracker } from './WindowTracker'

function App() {
  const [show, setShow] = useState(true)

  function toggle(){
    setShow(prevShow => !prevShow)
  }

  return (
    <>
    <div className='container'>
      <button onClick={toggle}>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
    </>
  )
}

export default App
