import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm.js";
import InstructorRoute from "../../../../components/routes/InstructorRoute.js";
import Resizer from 'react-image-file-resizer';
import { toast } from "react-toastify";

const CourseEdit = () => {
  const router = useRouter();

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
  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setValues(data);
    setImage(data.image);
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

  //  const handleImageRemove = async () => {
  //   // console.log("REMOVE IMAGE");
  //   try{
  //     setValues({ ...values, loading: true});
  //     const res = await axios.post("/api/course/remove-image", { image });
  //     setImage({});
  //     setPreview("");
  //     setUploadButtonText("Upload Image");
  //     setValues({ ...values, loading: false });
  //   } catch (err) {
  //     console.log(err);
  //     setValues({ ...values, loading: false });
  //     toast("Image upload failed. Try later.");
  //   }
  //  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });
      toast("Course updated");
      // router.push("/instructor");
    } catch (err) {
      console.log("Error:", err);
      // Handle error and show appropriate message
    }
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center bg-primary square">Update Course</h1>
      {/* {JSON.stringify(values)} */}
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
      {/* <pre>{JSON.stringify(values, null, 4)}</pre>
      <hr />
      <pre>{JSON.stringify(image, null, 4)}</pre> */}
      <div className="row pb-5">
              <div className="col lesson-list">
                <br/>
                <br/>
                <h4>Lessons</h4>
                <br/>
                <ol>
                  {values && values.lessons && values.lessons.map((lesson, index) => (
                    <li key={index} style={{ listStyle: 'none', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
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
                          {lesson.title}
                        </div>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
    </InstructorRoute>
  );
};

export default CourseEdit;
