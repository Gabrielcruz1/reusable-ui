import Modal from "./Components/modal"
import {useState} from "react"

function App() {

  const [open, setOpen] = useState(false)

  const handleModal = () => {
    if(open) {
      setOpen((prev) => false)
    } else {
      setOpen((prev) => true)

    }
  }

  return (
    <>
     <h1>Reusable UI</h1> <br/>
     <button onClick={handleModal}>Open the Modal</button>
     <Modal isOpen={open} />
    </>
  )
}

export default App
