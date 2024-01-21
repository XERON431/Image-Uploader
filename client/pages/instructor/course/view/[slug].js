import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InstructorRoute from '../../../../components/routes/InstructorRoute';
import Modal from './Modal';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import AddLessonForm from '../../../../components/forms/AddLessonForm';
import { toast } from 'react-toastify';
import { FaEdit, FaToggleOn } from 'react-icons/fa';
import { Button, CircularProgress, Badge } from '@mui/material';

const CourseView = () => {
  const [course, setCourse] = useState({});
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: '',
    content: '',
    video: '',
  });
  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload video');
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    try {
      const { data } = await axios.get(`/api/course/${slug}`);
      setCourse(data);
    } catch (error) {
      console.error('Error loading course:', error);
    }
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/course/lesson/${slug}/${course.instructor._id}`, values);
      setValues({ ...values, title: '', content: '', video: '' });
      setVisible(false);
      setUploadButtonText('Upload video');
      setCourse(data);
      toast('Lesson added');
      router.push(`/instructor/course/view/${slug}`);
    } catch (err) {
      console.error('Error adding lesson:', err);
      toast('Lesson add failed');
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
        },
      });
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      console.error('Error uploading video:', err);
      setUploading(false);
      toast('Video upload failed');
    }
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handlePublish = async (e, courseId) => {
    try {
      let answer = window.confirm('Are you sure you want to publish? It will be live.');
      if (!answer) return;

      const { data } = await axios.put(`/api/course/publish/${courseId}`);
      setCourse(data);
      toast('Congratulations! Your course is live.');
    } catch (err) {
      console.error('Error publishing course:', err);
      toast('Course publish failed. Try again.');
    }
  };

  const handleUnpublish = async (e, courseId) => {
    try {
      let answer = window.confirm('Are you sure you want to unpublish?');
      if (!answer) return;

      const { data } = await axios.put(`/api/course/unpublish/${courseId}`);
      setCourse(data);
      toast('Your course is unpublished.');
    } catch (err) {
      console.error('Error unpublishing course:', err);
      toast('Course unpublish failed. Try again.');
    }
  };

  return (
    <InstructorRoute>
      <div className="container-fluid pt-3">
        {course && (
          <div className="container-fluid pt-1">
            <div className="d-flex align-items-center pt-2">
              <img
                src={course.image ? course.image.Location : '/1-8.jpg'}
                alt="Course Thumbnail"
                style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '15px' }}
              />
              <div className="flex">
                <div className="ml-3">
                  <h5 className="text-primary">{course.name}</h5>
                  <p>{course.lessons && course.lessons.length} Lessons</p>
                  <p style={{ fontSize: '10px' }}>{course.category}</p>
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
                    router.push(`/instructor/course/edit/${slug}`);
                  }}
                />

                {/* Publish Course Icon */}
                <FaToggleOn
                  style={{
                    cursor: 'pointer',
                    color: course.published ? '#4caf50' : '#d9534f', // Green if published, Red if not
                    fontSize: '20px',
                  }}
                  onClick={(e) => (course.published ? handleUnpublish(e, course._id) : handlePublish(e, course._id))}
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
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center"
                variant="contained"
                color="primary"
              >
                Add lesson
              </Button>
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
                <br />
                <br />
                <h4>Lessons</h4>
                <br />
                <ol>
                  {course &&
                    course.lessons &&
                    course.lessons.map((lesson, index) => (
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
                            {lesson && <span>{lesson.title}</span>}
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
