import {createPortal} from 'react-dom';

const Modal = ({isOpen, children}) => {
    if(!isOpen) return null;


    return createPortal(
        <div className="overlay">
            <div className="modal">
                <div className="modal-content">{children}</div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;

// portal might not be necessary

// [YouTube](https://www.youtube.com/watch?v=f76ZAvCDWZI)