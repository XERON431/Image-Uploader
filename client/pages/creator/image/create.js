import React, { useState } from "react";
import { useRouter } from 'next/router';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ImageCreateForm from "../../../components/forms/ImageCreateForm.js";
import CreatorRoute from "../../../components/routes/CreatorRoute.js";
import Resizer from 'react-image-file-resizer';
import { toast } from "react-toastify";

const ImageCreate = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    name: "",
    description: "",
    uploading: false,
    price: "0",
    loading: false,
  });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    // Resize
    Resizer.default.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/image/upload-image", {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/image", {
        ...values,
        image,
      });
      toast("Great image is created");
      router.push("/creator");
    } catch (err) {
      console.log("Error:", err);
      // Handle error and show appropriate message
    }
  };

  return (
    <CreatorRoute>
      <h1 className="jumbotron text-center bg-primary square">Create Image</h1>
      <div className="pt-3 pb-3">
        <ImageCreateForm
          handleChange={handleChange}
          handleImage={handleImage}
          handleSubmit={handleSubmit}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
        />
      </div>
    </CreatorRoute>
  );
};

export default ImageCreate;
