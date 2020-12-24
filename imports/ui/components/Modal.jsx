import { max } from "moment";
import React, { useState } from "react";
import Modal from "react-modal";

const ModalComponent = ({
  children,
  isOpen,
  handleClose,
  contentLabel,
  isMaxSize,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#19171Adb",
      display: isMaxSize ? "block" : "flex",
      justifyContent: isMaxSize ? "" : "center",
      alignItems: isMaxSize ? "" : "center",
    },
    content: {
      inset: isMaxSize ? "6rem 8rem" : "",
      padding: "0",
      position: isMaxSize ? "absolute" : "relative",
      textAlign: isMaxSize ? "left" : "center",
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
