import { Course } from "@/models/Courses.model"
import { CourseClient } from "../components/CourseClient";
import { getCourses } from "@/helpers/Helpers";

const Courses = async() => {
    const courses:  Course[] = getCourses();
  return (
    <div>
        <CourseClient courses={courses}/>
    </div>
  )
}

export default Courses