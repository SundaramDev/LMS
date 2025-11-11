// src/assets/assets.js

// ====== Images ======
import logo from './logo.svg'
import lesson_icon from './lesson_icon.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sketch.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import profile_img_4 from './profile_img_4.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'

export const assets = {
  logo,
  lesson_icon,
  logo_dark,
  search_icon,
  cross_icon,
  upload_area,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  profile_img_4,
  arrow_icon,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  dropdown_icon,
  patients_icon,
  play_icon,
  blue_tick_icon,
  profile_img,
  profile_img2,
  profile_img3
}

// ====== Dummy Educator Data ======
export const dummyEducatorData = {
  _id: "675ac1512100b91a6d9b8b24",
  name: "GreatStack",
  email: "user.greatstack@gmail.com",
  imageUrl: "https://via.placeholder.com/150",
  createdAt: "2024-12-12T10:56:17.930Z",
  updatedAt: "2024-12-12T10:56:17.930Z",
  __v: 0
}

// ====== Dummy Testimonial Data ======
export const dummyTestimonial = [
  {
    name: 'Donald Jackman',
    role: 'SWE 1 @ Amazon',
    image: assets.profile_img_1,
    rating: 5,
    feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.'
  },
  {
    name: 'Richard Nelson',
    role: 'SWE 2 @ Samsung',
    image: assets.profile_img_2,
    rating: 4,
    feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly useful for my projects.'
  },
  {
    name: 'James Washington',
    role: 'SWE 2 @ Google',
    image: assets.profile_img_3,
    rating: 4.5,
    feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly helpful for streamlining my workflow.'
  },
  {
    name: 'Sophia Martinez',
    role: 'Frontend Dev @ Facebook',
    image: assets.profile_img_4,
    rating: 5,
    feedback: 'Imagify has transformed the way I handle social media graphics. It\'s fast, intuitive, and very reliable.'
  },
  {
    name: 'Liam Turner',
    role: 'UI/UX Designer @ Microsoft',
    image: assets.profile_img_5,
    rating: 4.7,
    feedback: 'I love how Imagify simplifies design tasks. It saves me hours of work and helps me deliver better quality projects.'
  }
];


// ====== Dummy Dashboard Data ======
export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      courseTitle: "Introduction to JavaScript",
      student: {
        _id: "user_1",
        name: "GyanPath",
        imageUrl: "https://via.placeholder.com/100"
      }
    },
    {
      courseTitle: "Data Science with Python",
      student: {
        _id: "user_2",
        name: "GyanPath",
        imageUrl: "https://via.placeholder.com/100"
      }
    },
    {
      courseTitle: "Web Development Bootcamp",
      student: {
        _id: "user_3",
        name: "GyanPath",
        imageUrl: "https://via.placeholder.com/100"
      }
    },
    {
      courseTitle: "Machine Learning Basics",
      student: {
        _id: "user_4",
        name: "GyanPath",
        imageUrl: "https://via.placeholder.com/100"
      }
    },
    {
      courseTitle: "React JS Advanced",
      student: {
        _id: "user_5",
        name: "GyanPath",
        imageUrl: "https://via.placeholder.com/100"
      }
    }
  ],
  name: "GyanPath",
  imageUrl: "https://via.placeholder.com/150"
}


// ====== Dummy Student Enrolled Data ======
export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_1",
      name: "GyanPath",
      imageUrl: "https://via.placeholder.com/100"
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509Z"
  },
  {
    student: {
      _id: "user_2",
      name: "GyanPath",
      imageUrl: "https://via.placeholder.com/100"
    },
    courseTitle: "Web Development Bootcamp",
    purchaseDate: "2024-12-20T11:04:48.798Z"
  },
  {
    student: {
      _id: "user_3",
      name: "GyanPath",
      imageUrl: "https://via.placeholder.com/100"
    },
    courseTitle: "Data Science with Python",
    purchaseDate: "2024-12-21T09:15:30.000Z"
  },
  {
    student: {
      _id: "user_4",
      name: "GyanPath",
      imageUrl: "https://via.placeholder.com/100"
    },
    courseTitle: "React JS for Beginners",
    purchaseDate: "2024-12-21T13:42:10.000Z"
  },
  {
    student: {
      _id: "user_5",
      name: "GyanPath",
      imageUrl: "https://via.placeholder.com/100"
    },
    courseTitle: "Node.js and Express",
    purchaseDate: "2024-12-22T10:20:45.000Z"
  },
  {
    student: {
      _id: "user_6",
      name: "GyanPath",
      imageUrl: "https://via.placeholder.com/100"
    },
    courseTitle: "Advanced CSS and Tailwind",
    purchaseDate: "2024-12-22T15:55:00.000Z"
  }
]


// ====== Dummy Courses ======
export const dummyCourses = [
  {
    "_id": "605c72efb3f1c2b1f8e4e1a1",
    "courseTitle": "Introduction to JavaScript",
    "courseDescription": `
      <h2>Learn the Basics of JavaScript</h2>
      <p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p>
    `,
    "coursePrice": 49.99,
    "discount": 20,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": ["user1","user2","user3"],
    "courseRatings": [{"userId":"user3","rating":5,"_id":"6773e37360cb0ab974342314"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Getting Started with JavaScript",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is JavaScript?",
            "lectureDuration": 16,
            "lectureUrl": "https://youtu.be/CBWnBi-awSA",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Variables and Data Types",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/W6NZfCO5SIk",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2024-12-17T08:16:53.622Z",
    "updatedAt": "2025-01-02T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/hqdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a2",
    "courseTitle": "Python for Data Science",
    "courseDescription": `
      <h2>Learn Python Programming</h2>
      <p>Explore Python for data analysis, visualization, and machine learning.</p>
    `,
    "coursePrice": 59.99,
    "discount": 15,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b25",
    "enrolledStudents": ["user4","user5"],
    "courseRatings": [{"userId":"user5","rating":4,"_id":"6773e37360cb0ab974342315"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Introduction to Python",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "Python Basics",
            "lectureDuration": 18,
            "lectureUrl": "https://youtu.be/rfscVS0vtbw",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Data Science Libraries",
            "lectureDuration": 22,
            "lectureUrl": "https://youtu.be/cKlnR-CB3tk",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2024-11-10T08:16:53.622Z",
    "updatedAt": "2025-01-01T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a3",
    "courseTitle": "React JS Basics",
    "courseDescription": `
      <h2>Learn React Fundamentals</h2>
      <p>Get started with React JS and build interactive web applications.</p>
    `,
    "coursePrice": 45.00,
    "discount": 10,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b26",
    "enrolledStudents": ["user6","user7"],
    "courseRatings": [{"userId":"user6","rating":5,"_id":"6773e37360cb0ab974342316"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Getting Started with React",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is React?",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/Ke90Tje7VS0",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "JSX and Components",
            "lectureDuration": 25,
            "lectureUrl": "https://youtu.be/bMknfKXIFA8",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2025-02-01T08:16:53.622Z",
    "updatedAt": "2025-02-05T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a4",
    "courseTitle": "HTML & CSS Fundamentals",
    "courseDescription": `
      <h2>Learn Web Design Basics</h2>
      <p>Understand HTML and CSS to create beautiful and responsive web pages.</p>
    `,
    "coursePrice": 39.99,
    "discount": 5,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b27",
    "enrolledStudents": ["user8","user9"],
    "courseRatings": [{"userId":"user8","rating":4,"_id":"6773e37360cb0ab974342317"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Building Your First Webpage",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "Introduction to HTML",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/pQN-pnXPaVg",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "CSS Basics and Styling",
            "lectureDuration": 30,
            "lectureUrl": "https://youtu.be/yfoY53QXEnI",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2025-02-15T08:16:53.622Z",
    "updatedAt": "2025-02-20T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/pQN-pnXPaVg/hqdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a5",
    "courseTitle": "DSA Mastery - Complete Guide",
    "courseDescription": `
      <h2>Master Data Structures and Algorithms</h2>
      <p>Learn the fundamentals of DSA, including arrays, linked lists, trees, graphs, and sorting algorithms. Perfect for beginners and intermediate learners preparing for coding interviews.</p>
    `,
    "coursePrice": 49.99,
    "discount": 10,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b28",
    "enrolledStudents": ["user11", "user12"],
    "courseRatings": [
      {"userId":"user11","rating":5,"_id":"6773e37360cb0ab974342318"},
      {"userId":"user12","rating":4,"_id":"6773e37360cb0ab974342319"}
    ],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Introduction to DSA",
        "chapterContent": [
          {
            "lectureId":"lecture1",
            "lectureTitle":"What is DSA?",
            "lectureDuration":20,
            "lectureUrl":"https://youtu.be/8hly31xKli0",
            "isPreviewFree":true,
            "lectureOrder":1
          },
          {
            "lectureId":"lecture2",
            "lectureTitle":"Arrays & Strings",
            "lectureDuration":35,
            "lectureUrl":"https://youtu.be/1t2rUo1_iI4",
            "isPreviewFree":false,
            "lectureOrder":2
          }
        ]
      }
    ],
    "createdAt": "2025-03-10T08:16:53.622Z",
    "updatedAt": "2025-03-12T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail":"https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a6",
    "courseTitle": "Node JS Essentials",
    "courseDescription": `
      <h2>Learn Backend Development</h2>
      <p>Understand server-side development using Node.js, Express, and REST APIs.</p>
    `,
    "coursePrice": 55.00,
    "discount": 15,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b29",
    "enrolledStudents": ["user13","user14"],
    "courseRatings": [{"userId":"user13","rating":5,"_id":"6773e37360cb0ab974342320"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Introduction to Node.js",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is Node.js?",
            "lectureDuration": 18,
            "lectureUrl": "https://youtu.be/TlB_eWDSMt4",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Building a REST API",
            "lectureDuration": 30,
            "lectureUrl": "https://youtu.be/l8WPWK9mS5M",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2025-03-15T08:16:53.622Z",
    "updatedAt": "2025-03-20T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a7",
    "courseTitle": "Advanced CSS & Tailwind",
    "courseDescription": `
      <h2>Master Modern CSS</h2>
      <p>Learn advanced CSS techniques, Flexbox, Grid, and Tailwind for responsive designs.</p>
    `,
    "coursePrice": 44.99,
    "discount": 10,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b30",
    "enrolledStudents": ["user15","user16"],
    "courseRatings": [{"userId":"user15","rating":5,"_id":"6773e37360cb0ab974342321"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Advanced Styling with Tailwind",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "Tailwind Basics",
            "lectureDuration": 22,
            "lectureUrl": "https://youtu.be/d1YBv2mWll0",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Responsive Layouts",
            "lectureDuration": 28,
            "lectureUrl": "https://youtu.be/UBOj6rqRUME",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2025-04-01T08:16:53.622Z",
    "updatedAt": "2025-04-05T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/d1YBv2mWll0/hqdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1a8",
    "courseTitle": "Fullstack Web Development",
    "courseDescription": `
      <h2>Become a Fullstack Developer</h2>
      <p>Learn frontend and backend development, databases, and deployment to build real-world projects.</p>
    `,
    "coursePrice": 79.99,
    "discount": 20,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b31",
    "enrolledStudents": ["user17","user18"],
    "courseRatings": [{"userId":"user17","rating":5,"_id":"6773e37360cb0ab974342322"}],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Fullstack Overview",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is Fullstack Development?",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/4UZrsTqkcW4",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Frontend + Backend Integration",
            "lectureDuration": 30,
            "lectureUrl": "https://youtu.be/nu_pCVPKzTk",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "createdAt": "2025-04-10T08:16:53.622Z",
    "updatedAt": "2025-04-15T04:47:44.701Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/4UZrsTqkcW4/hqdefault.jpg"
  }
];
