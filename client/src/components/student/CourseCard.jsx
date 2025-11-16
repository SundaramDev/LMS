import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  // Prevent rendering if course data is invalid
  if (!course || !course._id) return null;

  const {
    _id,
    courseThumbnail,
    courseTitle,
    coursePrice,
    discount,
    educator,
    courseRatings
  } = course;

  const finalPrice = (coursePrice - (discount * coursePrice) / 100).toFixed(2);
  const ratingValue = calculateRating(course);
  const totalRatings = courseRatings?.length || 0;

  return (
    <Link
      to={`/course/${_id}`}
      onClick={() => scrollTo(0, 0)}
      className="block border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden bg-white"
    >
      {/* Thumbnail */}
      <img
        src={courseThumbnail || assets.placeholder}
        alt={courseTitle || "Course Thumbnail"}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {courseTitle || "Untitled Course"}
        </h3>

        {/* Educator */}
        <p className="text-sm text-gray-500 mt-1">
          {educator?.name || "Unknown Educator"}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm font-medium text-gray-800">{ratingValue}</p>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(ratingValue) ? assets.star : assets.star_blank}
                alt="rating-star"
                className="w-4 h-4"
              />
            ))}
          </div>

          <p className="text-xs text-gray-500">({totalRatings})</p>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-gray-900 mt-3">
          {currency}{finalPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
