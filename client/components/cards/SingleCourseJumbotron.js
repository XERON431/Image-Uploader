import SingleCourse from "../../pages/course/[slug]"
import { currencyFormatter } from "../../utils/helpers";
import { Chip, Button } from "@mui/material";
const SingleCourseJumbotron = ({course}) => {
    const {
        name,
        description,
        instructor,
        updatedAt,
        lessons,
        image,
        price,
        category,
      } = course;
    return (
        <div className="jumbotron bg-primary square">
        <div className="row">
          <div className="col-md-8 p-4">
            <h1 className="text-dark font-weight-bold">{name}</h1>
            <p className="lead">
              {description && description.substring(1, 160)}...
            </p>
            {category && (
              <Chip
                label={category}
                style={{
                  backgroundColor: "#03a9f4",
                  color: "#fff",
                  marginRight: "4px",
                }}
                className="mr-10"
              />
            )}
            <p>Created by {instructor.name}</p>
            <p>Last updated {new Date(updatedAt).toLocaleDateString()}</p>
            <h4 className="pt-2">
              {price !== 0
                ? currencyFormatter({
                    amount: price,
                    currency: "inr",
                  })
                : "Free"}
            </h4>
          </div>
          <div className="col-md-4 p-4">
            {/* Placeholder for course image */}
            <img
            src={image.Location}
            alt={name}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <hr/>
            {/* Material-UI Button for enroll */}
            <Button variant="contained" color="primary">
              Enroll
            </Button>
          </div>
        </div>
      </div>
    )
}
export default SingleCourseJumbotron