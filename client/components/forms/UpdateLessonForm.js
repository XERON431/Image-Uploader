import React from "react";

const UpdateLessonForm = ({
  lesson,
  setSelectedLesson,
  handleUpdateLesson,
  uploading,
  uploadVideoButtonText,
  handleVideo,
  progress,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateLesson();
  };

  return (
    <div className="container pt-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setSelectedLesson({ ...lesson, title: e.target.value })}
          value={lesson?.title || ""} 
          placeholder="Title"
          autoFocus
          required
        />
        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setSelectedLesson({ ...lesson, content: e.target.value })}
          value={lesson?.content || ""} 
        ></textarea>
        <label className="btn btn-dark btn-block text-left mt-3">
          {uploadVideoButtonText}
          <input onChange={handleVideo} type="file" accept="video/*" hidden />
        </label>
        {!uploading && lesson?.video && lesson.video.Location && (
          <div className="pt-2 d-flex justify-content-center">
            
          </div>
        )}
        {uploading && (
          <div className="progress mt-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
        )}
        <div className="d-flex justify-content-between">
          <span className="pt-3 badge">Preview</span>
        </div>
        <button
          type="submit"
          className="col mt-3 btn btn-primary"
          size="small"
          loading={uploading}
          style={{ padding: "10px 215px", borderRadius: "10px" }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateLessonForm;
