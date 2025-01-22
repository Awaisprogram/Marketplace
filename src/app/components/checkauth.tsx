"use client";

import { useState, useEffect } from "react";

export default function CheckAuth() {
  const [authStatus, setAuthStatus] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/check-auth");
      const data = await response.json();
      setAuthStatus(
        data.authenticated ? `Authenticated as ${data.user.email}` : data.message
      );
    };

    checkAuth();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center"> 
    <div className="p-6 bg-gray-100 rounded shadow-lg max-w-md mx-auto mt-6">
      <h1 className="text-2xl font-bold text-center mb-4">Auth Status</h1>
      <p className="text-center text-gray-700">{authStatus}</p>
    </div>
    </div>
  );
}
