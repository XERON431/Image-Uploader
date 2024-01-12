import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import Modal from "./Modal";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";

const CourseView = () => {
    const [course, setCourse] = useState({});
    //for lessons
    // const [visible, setVisible] = useState(false);
    const [values, setValues] = useState({
        title: "",
        content: "",
        video: "",
    })
    const [uploading, setUploading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Upload video");
    const [progress, setProgress] = useState(0);

    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        loadCourse()
    }, [slug]);

    const loadCourse = async () => {
        const { data } = await axios.get(`/api/course/${slug}`);
        setCourse(data);
    }
    const handleAddLesson = (e) => {
        e.preventDefault();
        // console.log(values);
        
    }

    const handleVideo = async (e) => {
        try{
            const file= e.target.files[0];
            setUploadButtonText(file.name);
            setUploading(true);
            const videoData = new FormData();
            videoData.append('video', file)

            const {data} = await axios.post(`/api/course/video-upload/${course.instructor._id}`, videoData, {
                onUploadProgress: (e)=>{
                    setProgress(Math.round((100*e.loaded) / e.total));
                }
            })
            console.log(data);
            setValues({...values, video: data})
            setUploading(false);
            // console.log("Handle Video Upload")
        } catch(err){
            console.log(err);
            setUploading(false);
            toast("Video upload failed");
        }
    }


    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
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
                            <div className="ml-3">
                                <h5 className="text-primary">{course.name}</h5>
                                <p>{course.lessons && course.lessons.length} Lessons</p>
                                <p style={{ fontSize: "10px" }}>{course.category}</p>
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
                                onClick={openModal}
                                className="col-md-6 offset-md-3 text-center btn btn-primary btn-lg"
                            >
                                Add lesson
                            </button>
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
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
                        
                        <br />
                    </div>
                )}
            </div>
        </InstructorRoute>
    );
};

export default CourseView;
