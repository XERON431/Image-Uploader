import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { Button, List, ListItem, Avatar } from '@mui/material'; // Import Material-UI components

const SingleCourse = () => {
    const [clicked, setClicked] = useState(-1);
    const [course, setCourse] = useState({ lessons: [] });
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) loadCourse();
    }, [slug]);

    const loadCourse = async () => {
        const { data } = await axios.get(`/api/user/course/${slug}`);
        setCourse(data);
    };

    return (
        <StudentRoute>
            <div style={{ display: "flex" }}>
                <div style={{ maxWidth: 320, marginRight: 20 }}>
                    <List>
                        {course.lessons.map((lesson, index) => (
                            <ListItem
                                button
                                onClick={() => setClicked(index)}
                                key={index}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Avatar sx={{ marginRight: 1 }}>{index + 1}</Avatar>
                                {lesson.title.substring(0, 30)}
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="col">
                    {clicked !== -1 ? (
                        JSON.stringify(course.lessons[clicked])
                    ) : (
                        <>Click on the lesson to start learning</>
                    )}
                </div>
            </div>
        </StudentRoute>
    );
};

export default SingleCourse;
