
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/student/Footer'
import Youtube from 'react-youtube'
import axios from 'axios'
import { toast } from 'react-toastify'

const CourseDetails = () => {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)

  const {
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
    backendUrl,
    userData,
    getToken,
  } = useContext(AppContext)

  // ✅ Fetch Course Data
  const fetchCourseData = async () => {
    try {
      if (!id || id === 'undefined') {
        console.error('❌ Course ID is undefined in URL.')
        return toast.error('Invalid course ID in URL.')
      }

      const { data } = await axios.get(`${backendUrl}/api/course/${id}`)
      if (data.success && data.courseData) {
        setCourseData(data.courseData)
      } else {
        toast.error(data.message || 'Failed to load course data')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // ✅ Enroll Course (FIXED)
  const enrollCourse = async () => {
    try {
      if (!userData) {
        return toast.warn('Login to Enroll')
      }

      if (isAlreadyEnrolled) {
        return toast.warn('Already Enrolled')
      }

      if (!courseData?._id) {
        return toast.error('Invalid course data')
      }

      const token = await getToken()
      const { data } = await axios.post(
        `${backendUrl}/api/user/purchase`,
        { courseId: courseData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      // ✅ FIXED: Backend returns "url", not "session_url"
      if (data.success && data.url) {
        window.location.replace(data.url)
      } else {
        toast.error(data.message || 'Unable to process enrollment')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // ✅ Fetch course when ID changes
  useEffect(() => {
    fetchCourseData()
  }, [id])

  // ✅ Check if user already enrolled
  useEffect(() => {
    if (userData && courseData) {
      setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id))
    }
  }, [userData, courseData])

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  if (!courseData) return <Loading />

  return (
    <>
      <div className="relative flex md:flex-row flex-col-reverse gap-10 items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-10 bg-gradient-to-b from-cyan-100/70 to-transparent"></div>

        {/* ✅ Course Left Side */}
        <div className="max-w-xl z-10">
          <h1 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>

          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html:
                courseData.courseDescription.length > 200
                  ? courseData.courseDescription.slice(0, 200) + '...'
                  : courseData.courseDescription,
            }}
          ></p>

          <div className="flex items-center space-x-2 mt-4 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank}
                  alt="star"
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}{' '}
              {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})
            </p>
            <p>
              {courseData.enrolledStudents.length}{' '}
              {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}
            </p>
          </div>

          <p className="text-sm">
            Course by{' '}
            <span className="text-blue-600 underline">
              {courseData?.educator?.name || 'Unknown'}
            </span>
          </p>

          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>

            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className="border border-gray-300 bg-white mb-2 rounded">
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={assets.down_arrow_icon}
                        alt="arrow icon"
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          openSections[index] ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                      <p className="font-medium md:text-base text-sm">{chapter.chapterTitle}</p>
                    </div>
                    <p className="text-sm md:text-default">
                      {chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSections[index] ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img src={assets.play_icon} alt="Play icon" className="w-4 h-4 mt-1" />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p className="text-sm font-medium">{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && lecture.lectureUrl && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: lecture.lectureUrl.split('/').pop(),
                                    })
                                  }
                                  className="text-blue-500 cursor-pointer"
                                >
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                                  units: ['h', 'm'],
                                })}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-20 text-sm md:text-default">
            <h3 className="text-xl font-semibold text-gray-800">Course Description</h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
            ></p>
          </div>
        </div>

        {/* ✅ Course Right Side */}
        <div className="max-w-[320px] md:max-w-[360px] z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white">
          {playerData ? (
            <Youtube
              videoId={playerData.videoId}
              opts={{ playerVars: { autoplay: 1 } }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img
              src={courseData.courseThumbnail}
              alt="Course thumbnail"
              className="w-full rounded-lg shadow-md"
            />
          )}

          <div className="p-5 flex items-center gap-2">
            <p className="text-red-500 text-sm">
              <span className="font-medium">5 days</span> left at this price
            </p>
          </div>

          <div className="flex gap-2 items-center pt-3">
            <p className="text-gray-800 ml-4 text-2xl font-semibold">
              {currency}
              {(courseData.coursePrice -
                (courseData.discount * courseData.coursePrice) / 100
              ).toFixed(2)}
            </p>
            <p className="text-gray-500 line-through text-sm">
              {currency}
              {courseData.coursePrice}
            </p>
            <p className="text-gray-500 text-sm">{courseData.discount}% off</p>
          </div>

          <button
            onClick={enrollCourse}
            className="mt-3 ml-4 mr-2 w-[calc(100%-1.5rem)] py-2 rounded bg-blue-600 text-white font-medium text-sm"
          >
            {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
          </button>

          <div className="pt-5 px-4">
            <p className="text-lg font-medium text-gray-800">What's in the course</p>
            <ul className="ml-4 pt-2 text-sm list-disc text-gray-500 space-y-1">
              <li>Lifetime access with free updates.</li>
              <li>Step-by-step, hands-on project guidance.</li>
              <li>Downloadable resources and source code.</li>
              <li>Quizzes to test your knowledge.</li>
              <li>Certificate of completion.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CourseDetails
