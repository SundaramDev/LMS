import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const MyEnrollments = () => {
  const {
    enrolledCourses,
    calculateCourseDuration,
    navigate,
    userData,
    fetchUserEnrolledCourses,
    backendUrl,
    getToken,
    calculateNoOfLectures,
  } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([]);

  // ✅ Fetch course progress
  const getCourseProgress = async () => {
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/get-course-progress`,
            { courseId: course._id },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          const totalLectures = calculateNoOfLectures(course);
          const lectureCompleted = data.progressData
            ? data.progressData.lectureCompleted.length
            : 0;

          return { totalLectures, lectureCompleted };
        })
      );

      setProgressArray(tempProgressArray);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (userData) {
      fetchUserEnrolledCourses();
    }
  }, [userData]);

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      getCourseProgress();
    }
  }, [enrolledCourses]);

  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>

        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/200 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => {
              const progress =
                progressArray[index] &&
                (progressArray[index].lectureCompleted * 100) /
                  progressArray[index].totalLectures;

              const isCompleted =
                progressArray[index] &&
                progressArray[index].lectureCompleted ===
                  progressArray[index].totalLectures;

              return (
                <tr key={index} className="border-b border-gray-500/20">
                  {/* Course Info */}
                  <td className="md:px-4 pl-2 md:pl-14 py-3 flex items-center space-x-3">
                    <img
                      src={course.courseThumbnail}
                      alt="Course thumbnail"
                      className="w-14 sm:w-24 md:w-28 rounded-md"
                    />
                    <div className="flex-1">
                      <p className="mb-1 max-sm:text-sm font-medium">
                        {course.courseTitle}
                      </p>
                      <Line
                        percent={progress || 0}
                        strokeWidth={2}
                        strokeColor="#3b82f6"
                        trailColor="#d1d5db"
                        className="rounded-full"
                      />
                    </div>
                  </td>

                  {/* Duration */}
                  <td className="px-4 py-3 max-sm:hidden">
                    {calculateCourseDuration(course)}
                  </td>

                  {/* Progress */}
                  <td className="px-4 py-3 max-sm:hidden">
                    {progressArray[index] &&
                      `${progressArray[index].lectureCompleted}/${progressArray[index].totalLectures}`}{" "}
                    <span>Lectures</span>
                  </td>

                  {/* Status Button */}
                  <td className="px-4 py-3 max-sm:text-right">
                    <button
                      className={`px-3 sm:px-5 py-1.5 sm:py-2 text-white text-sm rounded-md ${
                        isCompleted ? "bg-green-600" : "bg-blue-600"
                      }`}
                      onClick={() => navigate(`/player/${course._id}`)}
                    >
                      {isCompleted ? "Completed" : "On-Going"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
