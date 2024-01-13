import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import Modal from "./Modal";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";
import { FaEdit, FaToggleOn } from 'react-icons/fa';

const CourseView = () => {
  const [course, setCourse] = useState({});
  // for lessons
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: "",
  });
  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload video");
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      setValues({ ...values, title: "", content: "", video: {} });
      setVisible(false);
      setUploadButtonText("Upload video");
      setCourse(data);
      toast("Lesson added");
      router.push(`/instructor/course/view/${slug}`);
    } catch (err) {
      console.log(err);
      toast("lesson add failed");
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);
      const videoData = new FormData();
      videoData.append('video', file);
      const { data } = await axios.post(`/api/course/video-upload/${course.instructor._id}`, videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((99 * e.loaded) / e.total));
        }
      });
      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast("Video upload failed");
    }
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <InstructorRoute>
      <div className="container-fluid pt-3">
        {course && (
          <div className="container-fluid pt-1">
            <div className="d-flex align-items-center pt-2">
              <img
                src={course.image ? course.image.Location : "/1-8.jpg"}
                alt="Course Thumbnail"
                style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: "15px" }}
              />
              <div className="flex">
                <div className="ml-3">
                  <h5 className="text-primary">{course.name}</h5>
                  <p>{course.lessons && course.lessons.length} Lessons</p>
                  <p style={{ fontSize: "10px" }}>{course.category}</p>
                </div>
              </div>
              <div className="align-items-right">
                  {/* Edit Course Icon */}
                  <FaEdit
                    style={{
                      cursor: 'pointer',
                      marginRight: '10px',
                      color: '#007bff',
                      fontSize: '20px',
                    }}
                    onClick={() => {
                      // Handle edit course action here
                      router.push(`/instructor/course/edit/${slug}`)
                    }}
                  />

                  {/* Publish Course Icon */}
                  <FaToggleOn
                    style={{
                      cursor: 'pointer',
                      color: course.published ? '#4caf50' : '#d9534f', // Green if published, Red if not
                      fontSize: '20px',
                    }}
                    onClick={() => {
                      // Handle publish course action here
                      console.log('Publish course clicked');
                    }}
                  />
                </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <ReactMarkdown>{course.description}</ReactMarkdown>
              </div>
            </div>
            <div className="row">
              <button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center btn btn-primary btn-lg"
              >
                Add lesson
              </button>
              <Modal visible={visible} onClose={closeModal}>
                <AddLessonForm
                  values={values}
                  setValues={setValues}
                  handleAddLesson={handleAddLesson}
                  uploading={uploading}
                  uploadButtonText={uploadButtonText}
                  handleVideo={handleVideo}
                  progress={progress}
                />
              </Modal>
            </div>
            <div className="row pb-5">
              <div className="col lesson-list">
                <br/>
                <br/>
                <h4>Lessons</h4>
                <br/>
                <ol>
                  {course && course.lessons && course.lessons.map((lesson, index) => (
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
            <br />
          </div>
        )}
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
