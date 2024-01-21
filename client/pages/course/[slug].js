import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  
  return (
    <>
      <SingleCourseJumbotron course={course }/>
      {course.lessons && (
        <SingleCourseLessons lessons={course.lessons} />
      )}
    </>
  );
};

export async function getServerSideProps({ query }) {
  try {
    console.log("query");
    const { data } = await axios.get(
      `http://localhost:3000/api/course/${query.slug}`
    );
    return {
      props: {
        course: data,
      },
    };
  } catch (err) {
    console.log("wow error");
  }
}

export default SingleCourse;
