import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const CourseView = () => {
    const [course, setCourse] = useState({});
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        loadCourse()
    }, [slug]);

    const loadCourse = async () => {
        const { data } = await axios.get(`/api/course/${slug}`);
        setCourse(data);
    }

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
                            <div className="ml-auto">
                                <div className="tooltip">
                                    <span className="tooltiptext">Edit</span>
                                    <span className="h5 pointer text-warning">&#9998;</span>
                                </div>
                                <div className="tooltip">
                                    <span className="tooltiptext">Publish</span>
                                    <span className="h5 pointer text-danger">&#10004;</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <ReactMarkdown>{course.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </InstructorRoute>
    );
};

export default CourseView;
