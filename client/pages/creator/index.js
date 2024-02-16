// Importing necessary modules
import { useState, useEffect } from "react";
import axios from "axios";
import CreatorRoute from "../../components/routes/CreatorRoute";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Main component definition
const CreatorIndex = () => {
  // State to hold images data
  const [images, setImages] = useState([]);

  // Function to fetch and load images data
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const { data } = await axios.get("/api/creator-images");
    setImages(data);
  };

  // Style for some elements
  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  // Rendering component
  return (
    <CreatorRoute>
      <div style={{ textAlign: "center", background: "#007bff", color: "#fff", padding: "20px" }}>
        <h1>Creator Dashboard</h1>
      </div>
      {images &&
        images.map((image) => (
          <div key={image._id} style={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <img
              src={image.image ? image.image.Location : "/1-8.jpg"}
              alt="Image Thumbnail"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <Link href={`/creator/image/view/${image.slug}`} className="pointer">
                <p style={{ color: "black", fontSize: "16px", marginBottom: "5px" }}><h5 className="pt-2">{image.name}</h5></p>
              </Link>
              <hr/>
              {image.published ? (
                <p style={myStyle} className="text-success">
                  Your image is live in the marketplace
                </p>
              ) : (
                <p style={myStyle} className="text-success">
                  Your image is ready to be published
                </p>
              )}
            </div>
            <div style={{ marginLeft: "auto", textAlign: "center" }}>
              {image.published ? (
                <div>
                  <FontAwesomeIcon icon={faCheckCircle} className="h5 pointer text-success" />
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon icon={faTimesCircle} className="h5 pointer text-warning" />
                </div>
              )}
            </div>
          </div>
        ))}
    </CreatorRoute>
  );
};

export default CreatorIndex;
