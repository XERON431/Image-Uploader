import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { useState, useContext, useEffect } from "react";
import {Context} from "../../context"
import {toast} from "react-toastify"
const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading , setLoading] = useState(false);
  const [enrolled,setEnrolled]=useState({});
  const {
    state: { user }, 
  } = useContext(Context);
 
  useEffect(()=>
  {
      if(user && course) checkEnrollment()
  },[user,course])

  const checkEnrollment=async ()=>
  {
      const {data}=await axios.get(`/api/check-enrollment/${course._id}`);
      // console.log(data);
      setEnrolled(data);
  }

const handlePaidEnrollment=async()=>{
  console.log("Reached handle paid enrollment")
    // try{
    //     if(!user) router.push("/login");

    //     if(enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
    //     setLoading(true);

    //     const {data} = await axios.post(`/api/paid-enrollment/${course._id}`);
    //     // console.log(data);
    //     // initPayment(data);
    //     router.push(`/user/course/${enrolled.course.slug}`);
    // }catch(err){
    //     console.log(err);
    // }
}

const handleFreeEnrollment=async (e)=>
{
    e.preventDefault();
    try{
        if(!user) router.push("/login");

        if(enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
        setLoading(true);
        const {data}=await axios.post(`/api/free-enrollment/${course._id}`);
        toast(data.message);
        setLoading(false);
        router.push(`/user/course/${data.course.slug}`);
    }catch(err)
    {
        toast("Enrollment failed");
        console.log(err);
        setLoading(false);
    }
}

  
  return (
    <>
      <SingleCourseJumbotron course={course }
      user={user}
      loading={loading}
      handleFreeEnrollment={handleFreeEnrollment}
      handlePaidEnrollment={handlePaidEnrollment}
      enrolled={enrolled}
      setEnrolled={setEnrolled}
      />
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
