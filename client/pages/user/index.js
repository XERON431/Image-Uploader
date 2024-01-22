import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import Link from "next/link";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";

const UserIndex = () => {
    const { state: { user } } = useContext(Context);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/user-courses');
            setCourses(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <UserRoute>
            {loading && (
                <FiRefreshCw className="d-flex justify-content-center display-1 text-danger p-5" />
            )}
            <h1 className="jumbotron text-center bg-primary square">User dashboard</h1>
            {courses && courses.map(course => (
                <div key={course._id} className="media pt-2 pb-1">
                    <img
                        className="mr-3 rounded"
                        src={course.image ? course.image.Location : '/background.jpg'}
                        alt={course.name}
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="media-body pl-2">
                        <div className="row">
                            <div className="col">
                                <Link href={`/user/course/${course.slug}`} className="pointer">
                                    <h5 className="mt-2 text-primary">{course.name}</h5>
                                </Link>
                                <p style={{ marginTop: '-10px' }}>{course.lessons.length} lessons</p>
                                <p className="text-muted" style={{ marginTop: '-15px', fontSize: '12px' }}>
                                    By {course.instructor.name}
                                </p>
                            </div>
                            <div className="col-md-3 mt-3 text-center">
                                <Link href={`/user/course/${course.slug}`}>
                                    <AiFillPlayCircle className="h2 pointer text-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </UserRoute>
    );
};

export default UserIndex;