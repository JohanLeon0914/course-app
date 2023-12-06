import { getCourses } from "@/helpers/Helpers";
import { Course } from "@/models/Courses.model";

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
    <div>page</div>
  )
}

export default page