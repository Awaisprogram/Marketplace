'use client'

import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";


const AdminPage = () => {
  const { isLoaded: authLoaded, isSignedIn } = useAuth();
  const { isLoaded: userLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authLoaded && !isSignedIn) {
      router.push("/sign-in");
      return;
    }

    if (authLoaded && userLoaded && user?.publicMetadata?.role !== "admin") {
      router.push("/admin");
    }
  }, [authLoaded, userLoaded, isSignedIn, user, router]);

  if (!authLoaded || !userLoaded || !isSignedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
     
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4 text-Color">Admin Panel</h1>
        <p className="text-xl text-center text-gray-600">Welcome, Admin!</p>
        <div className="mt-6 flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-700">Admin Dashboard</h2>
            <p className="mt-4 text-gray-500">You have full control over the admin panel features.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Manage Users
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
