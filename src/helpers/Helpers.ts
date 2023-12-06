import { Course } from "@/models/Courses.model";
import { auth, db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
interface CourseData  {
  course: Course,
  users_emails: string[]
}


export function getCourses() {
  const courses: Course[] = [
    {
      id: '1',
      name: 'Introducción a la Programación',
      description: 'Aprende los conceptos básicos de la programación.',
      image: 'https://i.ytimg.com/vi/RqQ1d1qEWlE/maxresdefault.jpg',
      rating: 4,
      price: 1000,
      categories: ['Informática', 'Programación'],
      sections: [
        {
          id: '1',
          name: 'Fundamentos',
          contents: [{
            id: '1',
            name: 'Primer paso',
            video_url: 'url'
          }],
        },
        {
          id: '2',
          name: 'Estructuras de Control',
          contents: [{
            id: '1',
            name: 'Primer paso',
            video_url: 'url'
          }],
        },
      ],
    },
    {
      id: '2',
      name: 'Diseño Web',
      description: 'Explora el mundo del diseño web moderno.',
      categories: ['Diseño', 'Desarrollo Web'],
      image: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2021/08/freeCodeCamp-Course-Thumbnails-1.png',
      rating: 4,
      price: 1000,
      sections: [
        {
          id: '1',
          name: 'HTML y CSS',
          contents: [{
            id: '1',
            name: 'Primer paso',
            video_url: 'url'
          }],
        },
        {
          id: '2',
          name: 'Frameworks Frontend',
          contents: [{
            id: '1',
            name: 'Primer paso',
            video_url: 'url'
          }],
        },
      ],
    },
    {
      id: '3',
      name: 'Introducción a la Programación',
      description: 'Aprende los conceptos básicos de la programación.',
      categories: ['Informática', 'Programación'],
      image: 'https://i.ytimg.com/vi/koiPxFFiqJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAMTfOWKz33nrBjKczdNq8ix_5QFQ',
      rating: 4,
      price: 1000,
      sections: [
        {
          id: '1',
          name: 'Fundamentos',
          contents: [{
            id: '1',
            name: 'Primer paso',
            video_url: 'url'
          }],
        },
        {
          id: '2',
          name: 'Estructuras de Control',
          contents: [{
            id: '1',
            name: 'Primer paso',
            video_url: 'url'
          }],
        },
      ],
    },
  ];
  return courses
}

export async function isUserEnrolledInCourse(email: string, course: Course) {
  const coursesCollectionRef = collection(db, "courses");
  const querySnapshotCourse = await getDocs(query(coursesCollectionRef, where("course", "==", course)));
  if (querySnapshotCourse.size > 0) {
    // Si el curso existe, verifica si el email está en el array de usuarios inscritos
    const courseData = querySnapshotCourse.docs[0].data() as CourseData;
    const isEnrolled = courseData.users_emails.includes(email);
    return isEnrolled;
  } else {
    return false;
  }
}

export async function getUserCourses(user_email: string | null): Promise<Course[]> {
  const coursesCollectionRef = collection(db, "courses");

  try {
    const querySnapshot = await getDocs(query(coursesCollectionRef, where("users_emails", "array-contains", user_email)));

    const userCourses: Course[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as CourseData;
      userCourses.push(data.course);
    });

    return userCourses;
  } catch (error) {
    console.error("Error fetching user courses:", error);
    throw new Error("Error fetching user courses");
  }
}

export async function getUserLogin() {
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    return user
  } else {
    return null
  }
});
}