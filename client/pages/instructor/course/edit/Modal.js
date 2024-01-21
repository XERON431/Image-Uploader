import React from "react";
import UpdateLessonForm from "../../../../components/forms/UpdateLessonForm.js";

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

const LessonModal = ({
  show,
  handleClose,
  selectedLesson,
  setSelectedLesson,
  handleVideo,
  handleUpdateLesson,
  uploadVideoButtonText,
  progress,
  uploading,
}) => {
  const modalDisplay = show ? { ...modalStyle, display: "block" } : modalStyle;

  return (
    <div style={modalDisplay}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={handleClose}>
          &times;
        </span>
        <p>Update lesson</p>
        <hr />
        <UpdateLessonForm
          selectedLesson={selectedLesson}
          setSelectedLesson={setSelectedLesson}
          handleVideo={handleVideo}
          handleUpdateLesson={handleUpdateLesson}
          uploadVideoButtonText={uploadVideoButtonText}
          progress={progress}
          uploading={uploading}
        />
      </div>
    </div>
  );
};

export default LessonModal;
