import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CourseCreateForm from "../../../components/forms/CourseCreateForm";
const CourseCreate = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    uploading: false,
    paid: true,
    price: "0",
    loading: false,
    imagePreview: "",
  });

   const handleImage =()=>
   {

   };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // Add your logic to send the data to the server using axios
  };

  
  return (
    <div className="container mt-4">
      <h1 className="jumbotron text-center">Create Course</h1>
      <CourseCreateForm
      handleChange={handleChange}
      handleImage={handleImage}
      handleSubmit={handleSubmit}
      values={values}
      setValues={setValues}
      
      />
      <pre>
      {JSON.stringify(values,null,4)}
      </pre>
    </div>
  );
};

export default CourseCreate;
