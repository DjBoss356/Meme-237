import React, { useState } from 'react';
import Modal from 'react-modal';
import style from "./Popup.module.css"
import close from "../../../src/image/fermer.png"

const Popup = ({ isOpen, onClose, children }) => {
    return (
      <Modal className={style.container} isOpen={isOpen} onRequestClose={onClose}>
        <img src={close} onClick={onClose}/>
        {children}
      </Modal>
    );
  };

export default Popup;