import axios from "axios";
import { useRouter } from "next/router";
import SingleImageJumbotron from "../../components/cards/SingleImageJumbotron";
import { useState, useContext, useEffect } from "react";
import {Context} from "../../context"
import {toast} from "react-toastify"
const SingleImage = ({ image }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading , setLoading] = useState(false);
  const [enrolled,setEnrolled]=useState({});
  const {
    state: { user }, 
  } = useContext(Context);
 
  useEffect(()=>
  {
      if(user && image) checkEnrollment()
  },[user,image])

  const checkEnrollment=async ()=>
  {
      const {data}=await axios.get(`/api/check-enrollment/${image._id}`);
      // console.log(data);
      setEnrolled(data);
  }
const handleFreeEnrollment=async (e)=>
{
    e.preventDefault();
    try{
        if(!user) router.push("/login");

        if(enrolled.status) return router.push(`/user/image/${enrolled.image.slug}`);
        setLoading(true);
        const {data}=await axios.post(`/api/free-enrollment/${image._id}`);
        toast(data.message);
        setLoading(false);
        setEnrolled(data);
        // router.push(`/user/image/${data.image.slug}`);
    }catch(err)
    {
        toast("Enrollment failed");
        console.log(err);
        setLoading(false);
    }
}

  
  return (
    <>
      <SingleImageJumbotron image={image}
      user={user}
      loading={loading}
      handleFreeEnrollment={handleFreeEnrollment}
      enrolled={enrolled}
      setEnrolled={setEnrolled}
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  try {
    console.log("query");
    const { data } = await axios.get(
      `http://localhost:3000/api/image/${query.slug}`
    );
    
    return {
      props: {
        image: data,
      },
    };
  } catch (err) {
    console.log("wow error");
  }
}

export default SingleImage;
