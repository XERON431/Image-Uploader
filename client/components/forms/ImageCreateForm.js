import React, { useState } from 'react';

const ImageCreateForm = ({
  values,
  handleChange,
  setValues,
  handleSubmit,
  handleImage,
  preview, 
  uploadButtonText,
  // handleImageRemove,
  editPage = false,
}) => {
  const [buttonValue, setButtonValue] = useState('Save & Continue');

  return (
    <>
    {values && (
      <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <textarea
          name="description"
          cols="7"
          rows="7"
          placeholder="Description"
          value={values.description}
          className="form-control"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-row mb-3">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left">
              {uploadButtonText}
              <input
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>
        {preview && (
          <div className="col">
            <img
              src={preview}
              alt="Preview"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
        )}
        {editPage && values.image && (
          <div className="col">
            <img
              src={values.image.Location}
              alt="image not available"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
        )}
      </div>
      {!editPage && 
      <div className="row">
      <div className="col">
        <button
          onClick={handleSubmit}
          disabled={values.loading || values.uploading}
          className="btn btn-primary"
          type="submit"
        >
          {values.loading ? 'Saving...' : buttonValue}
        </button>
      </div>
    </div>}
    </form>
    )}
    </>
  );
};

export default ImageCreateForm;
