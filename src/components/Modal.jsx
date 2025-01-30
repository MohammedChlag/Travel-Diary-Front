const Modal = ({ isVisible, handleClick, children }) => {
  return (
    <div className={`modal modalMenu ${isVisible ? '' : 'hidden'}`} onClick={handleClick}>
      {children}
    </div>
  )
}

export default Modal
