import courseAi from "../assets/course-ai.webp"
import courseWeb from "../assets/course-web.webp"
import coursePython from "../assets/course-python.webp"
import courseCyber from "../assets/course-cyber.webp"
import courseGen from "../assets/course-gen.webp"
import courseAws from "../assets/course-aws.webp"
import courseMl from "../assets/course-ml.webp"

export const courses = [
  {
    id: 1,
    title: "Artificial Intelligence for Everybody",
    category: "AI",
    rating: 5,
    price: "$50.00",
    linkImg: courseAi,
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    category: "Web Dev",
    rating: 4,
    price: "$35.00",
    linkImg: courseWeb,
  },
  {
    id: 3,
    title:
      "Learn Python: From the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
    category: "Data Analysis",
    rating: 4,
    price: "$20.00",
    linkImg: coursePython,
  },
  {
    id: 4,
    title: "JavaScript: From Zero to Expert!",
    category: "Web Dev",
    rating: 4,
    price: "$20.00",
    linkImg:
      "https://imgs.search.brave.com/ERyn_YUVTbB0slaulPioLMmU7Zto9A8aCA6OPptRZkI/rs:fit:768:432:1/g:ce/aHR0cHM6Ly9jb3Vy/c2Vjb3Vwb25jbHVi/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy84NTE3/MTJfZmM2MV82LTc2/OHg0MzIuanBn",
  },
  {
    id: 5,
    title: "Google Cybersecurity Professional Certificate",
    category: "Cyber Security",
    rating: 4,
    price: "$30.00",
    linkImg: courseCyber,
  },
  {
    id: 6,
    title: "Generative AI Foundations: Getting Started",
    category: "Generative AI",
    rating: 4,
    price: "$30.00",
    linkImg: courseGen,
  },
  {
    id: 7,
    title: "AWS Fundamentals Specialization",
    category: "AWS",
    rating: 4,
    price: "$30.00",
    linkImg: courseAws,
  },
  {
    id: 8,
    title: "IBM Machine Learning",
    category: "Machine Learning",
    rating: 4,
    price: "$40.00",
    sale: 63,
    linkImg: courseMl,
  },
]
