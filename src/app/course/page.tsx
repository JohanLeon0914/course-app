"use client"

import { getCourses } from "@/helpers/Helpers";
import { Course } from "@/models/Courses.model";
import CourseDetails from "../components/CourseDetail";

interface SearchParams {
    id: string
}

interface Props {
    searchParams: SearchParams;
}
  
const page = ({ searchParams }: Props) => {
    const courses: Course[] = getCourses()
    const selectedCourse = courses.find((course) => course.id === searchParams.id);
    return (
        <div>
        {selectedCourse ? (
          <CourseDetails course={selectedCourse} />
        ) : (
          <p>Curso no encontrado</p>
        )}
      </div>
  )
}

export default page