import React from "react";

const UpdateLessonForm = ({
  selectedLesson,
  setSelectedLesson,
  handleUpdateLesson,
  uploading,
  uploadVideoButtonText,
  handleVideo,
  progress,
}) => {
  const handleTitleChange = (e) => {
    // Update only the 'title' property in selectedLesson
    const updatedTitle = e.target.value;

    // Update only the 'title' property in selectedLesson
    setSelectedLesson((prevLesson) => ({
      ...prevLesson,
      title: updatedTitle,
    }));
  };
  return (
    <div className="container pt-3">
      {JSON.stringify(selectedLesson)}
      <form onSubmit={handleUpdateLesson}>
        <input
          type="text"
          className="form-control square"
          onChange= {{handleTitleChange}}
          value={selectedLesson?.title || ""} 
          placeholder="Title"
          autoFocus
          required
        />
        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setSelectedLesson({ ...selectedLesson, content: e.target.value })}
          value={selectedLesson?.content || ""} 
        ></textarea>
        <button
          type="submit"
          className="col mt-3 btn btn-primary"
          size="small"
          loading={uploading}
          style={{ padding: "10px 215px", borderRadius: "10px" }}
          onClick={handleUpdateLesson}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateLessonForm;
