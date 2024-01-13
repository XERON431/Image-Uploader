import React from "react";

const AddLessonForm = ({
    values,
    setValues,
    handleAddLesson,
    uploading,
    uploadButtonText,
    handleVideo,
    progress,
    setVisible,
}) => {
    return (
        <div className="container pt-3">
            <form onSubmit={handleAddLesson}>
                <input
                    type="text"
                    className="form-control square"
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    value={values.title}
                    placeholder="Title"
                    autoFocus
                    required
                />
                <textarea
                    className="form-control mt-3"
                    cols="7"
                    rows="7"
                    onChange={(e) => setValues({ ...values, content: e.target.value })}
                    value={values.content}
                    placeholder="Content"
                ></textarea>
                <label className="btn btn-dark btn-block text-left mt-3">
                    {uploadButtonText}
                    <input onChange={handleVideo} type="file" accept="video/*" hidden />
                </label>
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
                <button
                    onClick={handleAddLesson}
                    className="col mt-3 btn btn-primary"
                    size="small"
                    type="primary"
                    loading={uploading}
                    style={{ padding: "10px 215px", borderRadius: "10px" }}
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddLessonForm;
