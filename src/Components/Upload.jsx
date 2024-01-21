import { useState } from "react";
import "../Styles/Upload.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ isOpen, onClose, setImage, data ,postMessage }) => {
  if (!isOpen) {
    return null;
  }
  const postHandler = () => {
    postMessage();
    onClose()
}

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FontAwesomeIcon icon={faClose} border onClick={onClose} size="xl" />
        <input type="file" onChange={data} />
        <button onClick={postHandler}>send</button>
      </div>
    </div>
  );
};

export default Modal;