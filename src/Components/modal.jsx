import ReactDOM from "react-dom"
import "../Styles/global.css"

function Modal({ isOpen, toggleModal}) {

    return ReactDOM.createPortal(
        <div className="modal-content">
            <p>Modal Here!</p>
            <p>Some content here.</p>
            <button onClick={toggleModal}>Close Modal</button>
        </div>, 
        document.getElementById("modal-root")
    )
}

export default Modal 
