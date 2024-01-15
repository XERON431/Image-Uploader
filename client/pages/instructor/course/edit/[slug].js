import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm.js";
import InstructorRoute from "../../../../components/routes/InstructorRoute.js";
import Resizer from 'react-image-file-resizer';
import { toast } from "react-toastify";
import LessonModal from "./modal.js";

const CourseEdit = () => {
  const router = useRouter();
  const [buttonValue, setButtonValue] = useState('Save & Continue');
  const [showModal, setShowModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const [values, setValues] = useState({
    name: "",
    description: "",
    uploading: false,
    paid: true,
    category: "",
    price: "0",
    loading: false,
    lessons: [],
  });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const { slug } = router.query;

  const [uploadVideoButtonText, setUploadVideoButtonText] = useState('upload video');
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    if (data) setValues(data);
    if (data && data.image) setImage(data.image);
  }

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    // Resize
    Resizer.default.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED", data);
        // Set image in state
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setButtonValue("Update");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });
      toast("Course updated");
      router.push(`/instructor/course/view/${slug}`);
    } catch (err) {
      console.log("Error:", err);
      // Handle error and show appropriate message
    }
  };

  const handleDrag = (e, index) => {
    e.dataTransfer.setData('itemIndex', index);
  };

  const handleDrop = async (e, index) => {
    const movingItemIndex = e.dataTransfer.getData("itemIndex");
    const targetItemIndex = index;
    let allLessons = values.lessons;
    let movingItem = allLessons[movingItemIndex];
    allLessons.splice(movingItemIndex, 1);
    allLessons.splice(targetItemIndex, 0, movingItem);
    setValues({ ...values, lessons: [...allLessons] });
    const { data } = await axios.put(`/api/course/${slug}`, {
      ...values,
      image,
    });
    console.log("Lessons rearranged response => ", data);
    toast("lessons updated")
    setButtonValue("Update");
  };

  const handleDelete = async (index) => {
    const answer = window.confirm("Are you sure you want to delete this lesson?");
    if (!answer) return;
    let allLessons = values.lessons;
    const removed = allLessons.splice(index, 1);
    setValues({ ...values, lessons: allLessons });
    const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
    console.log("LESSON DELETED => ", data)
  }

  const handleOpenModal = (lesson) => {
    setSelectedLesson(lesson);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleVideo = () => {
    console.log("handle video");
  }

  const handleUpdateLesson = () => {
    console.log("handle update lesson");
  }

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center bg-primary square">Update Course</h1>
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleChange={handleChange}
          handleImage={handleImage}
          handleSubmit={handleSubmit}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          editPage={true}
        />
      </div>
      <div className="row pb-2">
        <div className="col lesson-list">
          <h4>Lessons</h4>
          <br />
          <ol>
            {values && values.lessons && values.lessons.map((lesson, index) => (
              <li
                key={index}
                onDragOver={(e) => e.preventDefault()}
                style={{ listStyle: 'none', marginBottom: '10px' }}
                draggable
                onDragStart={(e) => handleDrag(e, index)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#007bff',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px',
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <span style={{ cursor: 'pointer' }} onClick={() => handleOpenModal(lesson)}>
                      {lesson.title}
                    </span>
                  </div>
                  <div style={{ justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger"
                      style={{ justifyContent: 'flex-end', padding: '0.3rem', fontSize: '0.5rem' }}
                    >
                      delete lesson
                    </button>
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            className="btn btn-primary "
            type="submit"
          >
            {values.loading ? 'Saving...' : buttonValue}
          </button>
        </div>
      </div>
      <LessonModal
        show={showModal}
        handleClose={handleCloseModal}
        lesson={selectedLesson}
        handleVideo={handleVideo}
        handleUpdateLesson={handleUpdateLesson}
        uploadVideoButtonText={uploadVideoButtonText}
        progress={progress}
        uploading={uploading}
      />
    </InstructorRoute>
  );
};

export default CourseEdit;
