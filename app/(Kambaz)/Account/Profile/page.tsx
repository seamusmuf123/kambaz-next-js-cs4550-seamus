"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl, FormSelect } from "react-bootstrap";
import * as client from "../client";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

 const router = useRouter();

const fetchProfile = () => {
  if (!currentUser) return router.push("/Account/Signin");
  setProfile(currentUser);
};

const signout = async () => {
  await client.signout();
  dispatch(setCurrentUser(null));
  router.push("/Account/Signin");
};
 useEffect(() => {
   fetchProfile();
 }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
       <div>
      <FormControl defaultValue={profile.username} placeholder="username" className="wd-username"/>
      <FormControl defaultValue={profile.password} placeholder="password" type="password"
             className="mb-2" />
      <FormControl defaultValue={profile.firstName} placeholder="First Name" id="wd-firstname" className="mb-2" />
      <FormControl defaultValue={profile.lastName} placeholder="Last Name" id="wd-lastname" className="mb-2" />
      <FormControl defaultValue={profile.dob} type="date" id="wd-dob" className="mb-2" />
      <FormControl defaultValue={profile.email} type="email" id="wd-email" className="mb-2" />
      <FormSelect  defaultValue={profile.role} className="mb-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </FormSelect>
      <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
      <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
           Sign out
         </Button>
    </div>
      )}
    </div>
);
}

