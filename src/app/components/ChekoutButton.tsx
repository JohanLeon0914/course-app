import { db } from "@/firebase/config";
import { Course } from "@/models/Courses.model";
import { loadStripe } from "@stripe/stripe-js";
import {
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

interface Props {
  courses: Course[];
  email: string | null | undefined;
}

const ChekoutButton = ({ courses, email }: Props) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const enrollToTheCourse = async () => {
    
    const coursesCollectionRef = collection(db, "courses");
    const querySnapshot = await getDocs(query(coursesCollectionRef, where("course", "==", courses[0])));
  
    if (querySnapshot.size > 0) {
      // Si existe un documento con el mismo curso, actualiza el array "users_emails"
      const courseDoc = querySnapshot.docs[0];
      const courseRef = doc(db, "courses", courseDoc.id);
  
      await updateDoc(courseRef, {
        users_emails: arrayUnion(email),
      });
    } else {
      // Si el curso no existe, crea un nuevo documento en "courses"
      await addDoc(coursesCollectionRef, {
        course: courses[0],
        users_emails: [email],
      });
    }
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courses: courses,
        email: email,
      }),
    });
    const data = await response.json();
  
    if (response.ok) {
      await enrollToTheCourse();
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
  

  return (
    <div>
      <button
        onClick={handleCheckout}
        className="bg-bgLight text-white px-4 py-2 rounded hover:bg-bgDark"
      >
        Enroll in the course
      </button>
    </div>
  );
};

export default ChekoutButton;
