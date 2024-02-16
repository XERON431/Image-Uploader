import { Router } from "next/router";
import axios from "axios";
import ImageCard from "../components/cards/ImageCard";
const Index = ({images}) => {
  
  return (
    <>
      <div className="jumbotron text-center bg-primary square">
        <h1>Global Image Showcase</h1>
        <hr style={{ borderBottom: "2px solid silver", width: "100px" }} />
      </div>
      <div className="container-fluid">
        <div className="row pt-2">
          {images?.map((image) => (
            <div key={image._id} className="col-md-4">
              <ImageCard key={image._id} image={image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
};

export  async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:3000/api/images');
  return { 
    props: {
      images: data,
    },
  }
}


export default Index;