"use client";
import { Course, Section } from "@/models/Courses.model";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import FormattedPrice from "./FormattedPrice";

interface CourseDetailsProps {
  course: Course;
}

const SectionItem: React.FC<{ section: Section }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li key={section.id} className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h4 className="text-lg font-medium mb-2">{section.name}</h4>
        {isOpen ? <span>-</span> : <span>+</span>}
      </div>
      {isOpen && (
        <ul className="pl-4">
          {section.contents.map((content) => (
            <li key={content.id} className="text-gray-600">
              {content.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
    const startArray = Array.from({ length: course?.rating }, (_, index) => (
        <span key={index} className="text-yellow-400">
          <IoIosStar />
        </span>
      ));
  return (
    <div className="max-w-2xl mx-auto p-4 mb-8">
      <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
      <img className="w-full mb-4" src={course.image} alt={course.name} />
      <p className="text-lightText mb-4">{course.description}</p>
      <p className="text-green-600">Price: <FormattedPrice amount={course.price}/> </p>
      <p>Raitin:</p>
      <div className="flex courses-center gap-x-1">{startArray}</div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Sections:</h3>
        <ul>
          {course.sections.map((section) => (
            <SectionItem key={section.id} section={section} />
          ))}
        </ul>
      </div>

      <div className="mt-6">
      <button className="bg-bgLight text-white px-4 py-2 rounded hover:bg-bgDark">
        Inscribirse al curso
      </button>
    </div>

    </div>
  );
};

export default CourseDetails;
