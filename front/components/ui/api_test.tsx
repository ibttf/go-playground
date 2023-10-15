"use client";
import React, { useEffect, useState } from "react";

const ApiTest: React.FC = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // Define an async function
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/user");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default ApiTest;

//https://go-playground-ae009.firebaseapp.com/__/auth/handler
