const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-height">
            <div>
                <div className="modal">
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;

// overlay prevents clickOutside from working