"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Login from "./login";
import LoggedIn from "./logout";

export default function Auth() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading") {
      setIsLoading(false);
    }
  }, [status]);

  if (isLoading) {
    return renderLoadingSpinner();
  }

  return <>{session?.user?.name ? <LoggedIn /> : <Login />}</>;
}

function renderLoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-4 h-4 border-t-2 border-gray-800 border-solid rounded-full animate-spin"></div>
    </div>
  );
}
