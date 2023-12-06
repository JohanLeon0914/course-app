import { getUserCourses } from "@/helpers/Helpers";
import { Course } from "@/models/Courses.model";
import Link from "next/link";

interface Props {
  user_email: string | null | undefined;
}

const YourCoursesServer = async ({ user_email }: Props) => {
  const userCourses: Course[] = await getUserCourses(user_email!);
  return (
    <div>
      {userCourses.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userCourses.map((course) => (
            <Link href={`/course?id=${course.id}`} key={course.id}>
            <div className="bg-bgLight rounded-lg p-4 shadow-md transition-transform transform hover:scale-105">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            </div>
          </Link>
          ))}
        </div>
      ) : (
        <div className="text-center">No tienes cursos registrados.</div>
      )}
    </div>
  );
};

export default YourCoursesServer;
