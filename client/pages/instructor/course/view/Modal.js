import React from "react";

const modalStyle = {
  display: "none",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "530px",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
};

const Modal = ({ isOpen, onClose, children }) => {
  const modalDisplay = isOpen ? { ...modalStyle, display: "block" } : modalStyle;

  return (
    <div style={modalDisplay}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>
          &times;
        </span>
        <p>+ add lesson</p>
        <hr/>
        {children}
      </div>
    </div>
  );
};

export default Modal;
