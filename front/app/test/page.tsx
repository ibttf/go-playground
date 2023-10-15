"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Auth() {
  const { data } = useSession();
  const [access_token, set_access_token] = useState("");
  useEffect(() => {
    if (data) {
      set_access_token(data?.access_token);
    }
  }, [data]);

  return (
    <>{access_token ? <div>{access_token}</div> : <div>no access token</div>}</>
  );
}
