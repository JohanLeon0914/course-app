"use client";
import { auth } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import YourCoursesServer from "../components/YourCoursesServer";

const page = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      {user && <YourCoursesServer user_email={user?.email} />}
    </div>
  );
};

export default page;
