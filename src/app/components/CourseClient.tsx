"use client";
import { Course } from "@/models/Courses.model";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";
import CourseData from "./CourseData";

interface Props {
  courses: Course[];
}

export const CourseClient = ({ courses }: Props) => {
  return (
    <>
    <h1 className="text-center font-semibold text-2xl">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mt-2">
        {courses.map((course: Course) => (
          <div key={course.id} className="w-full h-full ">
            <CourseData course={course} />
          </div>
        ))}
      </div>
    </>
  );
};
