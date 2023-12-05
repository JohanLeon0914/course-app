"use client";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { Course } from "@/models/Courses.model";

interface courseProps {
  course: Course
}

const CourseData = ({ course }: courseProps) => {

  const startArray = Array.from({ length: course?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <Link href={{ pathname: "/course", query: { id: course.id } }}>
          <div className="w-full h-96 group overflow-hidden relative">
            <img
              src={course?.image}
              alt="Product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p>{course?.name}</p>
          <div className="flex courses-center justify-between">
            <div className="flex courses-center gap-x-2">
              <p className="font-semibold">
                <FormattedPrice amount={course?.price} />
              </p>
            </div>
          </div>
          <div className="flex courses-center justify-between">
            {/* Add to cart */}
            <button
              className="bg-bgLight px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-bgDark hover:text-white duration-200"
            >
              Go to course
            </button>
            {/* star icons */}
            <div className="flex courses-center gap-x-1">{startArray}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseData;
