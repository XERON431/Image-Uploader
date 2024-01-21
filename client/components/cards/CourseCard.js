import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";
const CourseCard = ({ course }) => {
  // destructure
  const { name, instructor, price, image, slug, category } = course;
  const currencyFormatter = (data) => {
    return ((data.amount * 100) / 100).toLocaleString(data.currency, {
      style: "currency",
      currency: data.currency,
    });
  };

  return (
    <div className="card mb-4">
      <Link href="/course/[slug]" as={`/course/${slug}`} legacyBehavior>
        <a className="text-decoration-none">
          <img
            src={image.Location}
            alt={name}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h2 className="h4 font-weight-bold">{name}</h2>
            <p>by {instructor}</p>

            {category && (
              <span
                className="badge badge-primary mr-2"
                style={{ backgroundColor: "#03a9f4" }}
              >
                {category.name}
              </span>
            )}

            <h4 className="pt-2">
              {price !=0
                ? currencyFormatter({
                    amount: price,
                    currency: "inr",
                  })
                : "Free"}
            </h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CourseCard;