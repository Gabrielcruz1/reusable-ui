import Modal from "./Components/modal"
import {useState} from "react"
import "./Styles/global.css"

function App() {

  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="headerContent">
        <h1>Reusable UI</h1> <br/>
      </div>
      <div>
        <button onClick={handleModal}>Open the Modal</button>
        { open && 
        <Modal toggleModal={handleModal} /> 
        }
      </div>
    </>
  )
}

export default App
