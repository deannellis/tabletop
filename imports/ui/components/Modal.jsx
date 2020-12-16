import { max } from "moment";
import React, { useState } from "react";
import Modal from "react-modal";

const ModalComponent = ({
  children,
  isOpen,
  handleClose,
  contentLabel,
  maxSize,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#19171Adb",
      display: maxSize ? "block" : "flex",
      justifyContent: maxSize ? "" : "center",
      alignItems: maxSize ? "" : "center",
    },
    content: {
      inset: maxSize ? "6rem 8rem" : "",
      padding: "1.6rem 1.6rem 3.2rem",
      position: maxSize ? "absolute" : "relative",
      textAlign: maxSize ? "left" : "center",
    },
  };
  Modal.setAppElement("#react-target");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={contentLabel}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
