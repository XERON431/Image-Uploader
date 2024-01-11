// Importing necessary modules
import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Main component definition
const InstructorIndex = () => {
  // State to hold courses data
  const [courses, setCourses] = useState([]);

  // Function to fetch and load courses data
  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor-courses");
    setCourses(data);
  };

  // Style for some elements
  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  // Rendering component
  return (
    <InstructorRoute>
      <div style={{ textAlign: "center", background: "#007bff", color: "#fff", padding: "20px" }}>
        <h1>Instructor Dashboard</h1>
      </div>
      {courses &&
        courses.map((course) => (
          <div key={course._id} style={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <img
              src={course.image ? course.image.Location : "/1-8.jpg"}
              alt="Course Thumbnail"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <Link href={`/instructor/course/view/${course.slug}`} className="pointer">
                <p style={{ color: "black", fontSize: "16px", marginBottom: "5px" }}><h5 className="pt-2">{course.name}</h5></p>
              </Link>
              <p style={{ marginTop: "-10px" }}><h6 className="pt-2">{course.lessons.length} Lessons</h6> </p>
              {course.lessons.length < 5 ? (
                <p style={myStyle} className="text-warning">
                  At least 5 lessons are required to publish a course
                </p>
              ) : course.published ? (
                <p style={myStyle} className="text-success">
                  Your course is live in the marketplace
                </p>
              ) : (
                <p style={myStyle} className="text-success">
                  Your course is ready to be published
                </p>
              )}
            </div>
            <div style={{ marginLeft: "auto", textAlign: "center" }}>
              {course.published ? (
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
    </InstructorRoute>
  );
};

export default InstructorIndex;
