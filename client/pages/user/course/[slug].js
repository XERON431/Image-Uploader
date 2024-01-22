import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { List, ListItem, Avatar, Collapse, Typography, Box } from '@mui/material'; // Import Material-UI components
import { blue } from "@mui/material/colors";

const SingleCourse = () => {
    const [clicked, setClicked] = useState(-1);
    const [course, setCourse] = useState({ lessons: [] });
    const [videoSrc, setVideoSrc] = useState("");
    const [completedLessons, setCompletedLessons] = useState([]);
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) loadCourse();
    }, [slug]);

    useEffect(() => {
        if(course) loadCompletedLessons();
    }, [course])

    const loadCourse = async () => {
        const { data } = await axios.get(`/api/user/course/${slug}`);
        setCourse(data);
    };

    const loadCompletedLessons = async () => {
        const {data } = await axios.post(`/api/list-completed`, {
            courseId: course._id,
        });
        console.log("COMPLETED LESSONS => ", data);
        setCompletedLessons(data);
    }

    const handleLessonToggle = (index) => {
        // Toggle the clicked lesson
        setClicked((prevClicked) => (prevClicked === index ? -1 : index));

        // Set the video source when the lesson is clicked
        setVideoSrc(course.lessons[index].video.Location);
    };

    const markCompleted = async() => {
        const { data } = await axios.post(`/api/mark-completed`, {
            courseId: course._id,
            lessonId: course.lessons[clicked]._id,
        });
    };

    return (
        <StudentRoute>
            <div style={{ display: "flex" }}>
                <div style={{ width: "200px", backgroundColor: blue }}>
                    <Typography variant="h6" gutterBottom style={{ padding: "10px", color: "#0000FF" }}>
                        Lessons
                    </Typography>
                    <List>
                        {course.lessons.map((lesson, index) => (
                            <div key={index}>
                                <ListItem
                                    button
                                    onClick={() => handleLessonToggle(index)}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: clicked === index ? "#ADD8E6" : "inherit",
                                        color: clicked === index ? "#0000FF" : "inherit",
                                    }}
                                >
                                    <Avatar sx={{ marginRight: 1 }}>{index + 1}</Avatar>
                                    {lesson.title} {completedLessons.includes(lesson._id) ? 
                                    (<CheckCircleFilled />) 
                                    : 
                                    (<MinusCircleFilled/>)}
                                </ListItem>
                                <Collapse in={clicked === index} timeout="auto" unmountOnExit>
                                    <div style={{ paddingLeft: 16 }}>
                                        {/* Place any additional information related to the lesson here */}
                                        {lesson.content}
                                    </div>
                                </Collapse>
                            </div>
                        ))}
                    </List>
                </div>
                <div className="col" style={{ flex: 1 }}>
                    {clicked !== -1 ? (
                        <>
                            <Box className="col alert alert-primary square" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <b>{course.lessons[clicked].title.substring(0, 30)}</b>
                                <Typography className="pointer" onClick={markCompleted} style={{ cursor: 'pointer' }}>
                                    Mark as completed
                                </Typography>
                            </Box>
                            <div style={{ width: "100%", height: "400px" }}>
                                <video width="100%" height="650px" src={videoSrc} type="video/mp4" preload="auto" controls>
                                </video>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div>
                                <p className="lead">Click on the lesson to start learning</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </StudentRoute>
    );
};

export default SingleCourse;
