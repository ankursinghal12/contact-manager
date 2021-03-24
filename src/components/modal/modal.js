import React, {useEffect} from 'react';
import './modal.scss';
const Modal = (props) => {
  const { message, onOutsideClick, onYesClick, onNoClick } = props;

  return (
    <div id="myModal" className="modal" onClick={onOutsideClick}>
      <div className="modal-content" onClick={(event)=>event.stopPropagation()}>
        <p>{'Are you sure you want to delete this contact?'}</p>
        <div className="two buttons">
          <button className="basic button green icon" onClick={onYesClick}>
            Yes
          </button>
          <button className="red basic button icon" onClick={onNoClick}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal;
