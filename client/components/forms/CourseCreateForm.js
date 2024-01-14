import React, { useState } from 'react';

const CourseCreateForm = ({
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

  const handleCostChange = (e) => {
    setValues({ ...values, price: parseInt(e.target.value) });
  };

  const handlePaidChange = (e) => {
    setValues({ ...values, paid: e.target.value == 'paid', cost: 0 });
    setButtonValue(e.target.value == 'paid' ? 'Save & Continue' : 'Submit');
  };

  const renderCostInput = () => {
    if (values.paid) {
      return (
        <div className="form-group d-flex align-items-center mb-3">
          <label htmlFor="cost" className="mr-2">
            Price:
          </label>
          <select
            name="Price"
            className="form-control"
            value={values.price}
            onChange={handleCostChange}
          >
            {[...Array(100)].map((_, index) => (
              <option key={index + 1} value={index * 100 + 99}>
                {index * 100 + 99}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return null;
  };

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
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <select
              name="paid"
              className="form-control"
              value={values.paid ? 'paid' : 'free'}
              onChange={handlePaidChange}
            >
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">{renderCostInput()}</div>
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
            {/* <button onClick={handleImageRemove} className="btn-remove">
              X
            </button> */}
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

export default CourseCreateForm;
