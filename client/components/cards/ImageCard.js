import Link from "next/link";

const ImageCard = ({ image }) => {
  // destructure
  // const { name, creator, image, slug, category } = picture;

  return (
    <div className="card mb-4">
      <Link href="/image/[slug]" as={`/image/${image.slug}`} legacyBehavior>
        <a className="text-decoration-none">
          <img
            src={image.image.Location}
            alt={image.name}
            className="card-img-top"
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <h2 className="h6 font-weight-bold">{image.name}</h2>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ImageCard;