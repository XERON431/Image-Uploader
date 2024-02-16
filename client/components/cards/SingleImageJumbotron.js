import { Chip, Button, CircularProgress } from "@mui/material";

const SingleImageJumbotron = ({ image ,  user,loading , handleFreeEnrollment,enrolled}) => {
  
  return (
    <div className="jumbotron bg-primary square">
      <div className="row">
        <div className="col-md-8 p-4">
          <h1 className="text-dark font-weight-bold">{image.name}</h1>
          <p className="lead">
            {image.description && image.description.substring(1, 160)}...
          </p>
          {image.category && (
            <Chip
              label={image.category}
              style={{
                backgroundColor: "#03a9f4",
                color: "#fff",
                marginRight: "4px",
              }}
              className="mr-10"
            />
          )}
        </div>
        <div className="col-md-4 p-4">
          {/* Placeholder for image's image */}
          <img
            src={image.image.Location}
            alt={image.name}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <hr />
          {loading ? (
            <div className="d-flex justify-content-center">
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <Button
              className="mb-3 mt-3"
              variant="contained"
              color="secondary"
              fullWidth
              disabled={loading}
              onClick={handleFreeEnrollment}
            >
              {user ? enrolled.status ? "Saved" : "Save" : "Login to save"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleImageJumbotron;
