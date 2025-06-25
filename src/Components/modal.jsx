

function Modal(props){

    return (
        <>
        <div>
            {props.isOpen && (
            <p>Modal Here!</p>
            )}
        </div>

        </>
    )

}

export default Modal 