"use client";
import React from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import PeopleDetails from "./Details";
import Link from "next/link";
import { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { setCourses } from "../../../reducer";
import * as client from "../../../client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; } ) {
  type Person = {
  _id: string;
  name: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

console.log("PeopleTable users prop:", users);
  const { cid } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state: any) => (state.coursesReducer?.courses ?? []).find((c: any) => c._id === cid));
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  const [user, setUser] = useState<Person[]>([]);


  const findUsersForCourse = async (courseId: string) => {
    const { data } = await client.findUsersForCourse(courseId)
    setUser(data);
  }

    const fetchUser = async () => {
      if (!cid) return;
      console.log("Fetching users for course", cid);
      const user = await client.findUsersForCourse(cid as string);
      console.log("Fetched users:", user);
      setUser([...user, user]);
    };
    useEffect(() => {
      if (cid) fetchUser();
    }, [cid]);

  const userMap = users.length > 0 ? users : user;

  return (
  <div id="wd-people-table">
    {!cid && showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
    <h3 className="mb-2"><Breadcrumb course={course} /></h3>
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
      {userMap
      .filter(user => user != null) 
    .map((user: any) => (
     <tr key={user._id}>
      <td className="wd-full-name text-nowrap">
        <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>{" "}
          <span className="wd-last-name">{user.lastName}</span></span></td>
      <td className="wd-login-id">{user.loginId}</td>
      <td className="wd-section">{user.section}</td>
      <td className="wd-role">{user.role}</td>
      <td className="wd-last-activity">{user.lastActivity}</td>
      <td className="wd-total-activity">{user.totalActivity}
        </td>
        </tr>
      ))}
    </tbody>
   </Table>
  </div> );
}
