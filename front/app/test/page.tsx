"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Auth() {
  const { data } = useSession() as { data: { access_token?: string } };
  const [access_token, set_access_token] = useState<string>("");
  useEffect(() => {
    if (data?.access_token) {
      set_access_token(data.access_token);
    }
  }, [data]);
  async function testApi() {
    const userData = {
      name: "John Doe",
      email: "john.doe@example.com",
      location: "atlanta",
      title: "president",
      // ... other user data fields
    };
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Attach the JWT token to the Authorization header
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      {access_token ? (
        <button
          onClick={() => {
            testApi();
          }}
        >
          click to test api route
          <div>{access_token}</div>
        </button>
      ) : (
        <div>no access token</div>
      )}
    </>
  );
}
