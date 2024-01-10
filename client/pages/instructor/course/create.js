import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CourseCreateForm from "../../../components/forms/CourseCreateForm.js";
import InstructorRoute from "../../../components/routes/InstructorRoute.js";
import Resizer from 'react-image-file-resizer'
import { toast } from "react-toastify";
const CourseCreate = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    uploading: false,
    paid: true,
    price: "0",
    loading: false,
  });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
   const handleImage =(e)=>
   {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    //resize
    Resizer.default.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try{
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED", data);
        // set image in state
        setImage(data);
        setValues({ ...values, loading:false});
      } catch (err){
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    })
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // Add your logic to send the data to the server using axios
  };

  
  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center bg-primary square">Create Course</h1>
      <div className="pt-3 pb-3">
      <CourseCreateForm
      handleChange={handleChange}
      handleImage={handleImage}
      handleSubmit={handleSubmit}
      values={values}
      setValues={setValues}
      preview={preview}
      uploadButtonText={uploadButtonText}
      // handleImageRemove={handleImageRemove}
      />
      </div>
      <pre>
      {JSON.stringify(values,null,4)}
      </pre>
      <hr/>
      <pre>
      {JSON.stringify(image,null,4)}
      </pre>
    </InstructorRoute>
  );
};

export default CourseCreate;
