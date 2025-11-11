import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'  // ✅ Added missing import
import Footer from '../../components/student/Footer'

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext)
  const { input } = useParams()
  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses]

      if (input) {
        setFilteredCourses(
          tempCourses.filter(course =>
            course.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
      } else {
        setFilteredCourses(tempCourses)
      }
    }
  }, [allCourses, input])

  return (
    <div className="px-4 md:px-36 py-6">
      <div className="relative pt-20 text-left">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between w-full">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
            <p className="text-gray-500 mt-1">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate('/')}
              >
                Home
              </span>
              {' / '}
              <span>Course List</span>
            </p>
          </div>

          <div className="w-full md:w-auto mt-4 md:mt-0">
            <SearchBar data={input} />
          </div>
        </div>

        {/* Search Filter Box */}
        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border rounded-lg mt-8 mb-8 text-gray-600">
            <p className="text-lg font-medium">{input}</p>
            <img
              src={assets.cross_icon}
              alt="close"
              className="cursor-pointer w-5 h-5"
              onClick={() => navigate('/course-list')}
            />
          </div>
        )}

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-4 px-2 md:px-0">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CoursesList
