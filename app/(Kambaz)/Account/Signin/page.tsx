"use client";

import Link from "next/link";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import { FormControl, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;

      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>

      <FormControl
        value={credentials.username || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />

      <FormControl
        value={credentials.password || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />

      <Button
        onClick={handleSignin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Button>

      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}