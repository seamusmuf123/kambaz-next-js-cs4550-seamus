"use client";
import React from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Breadcrumb from "../../Breadcrumb";
import * as db from "../../../../Database";
export default function PeopleTable() {
  type Person = {
  _id: string;
  name: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};
const people = db.users.map((user) => ({
  _id: user._id,
  name: `${user.firstName} ${user.lastName}`,
  loginId: user.loginId,
  section: user.section,
  role: user.role,
  lastActivity: user.lastActivity,
  totalActivity: user.totalActivity,
}));
    const { cid } = useParams();
  const course = useSelector((state: any) => (state.coursesReducer?.courses ?? []).find((c: any) => c._id === cid));
  const { users, enrollments } = db;
 return (
  <div id="wd-people-table">
    <h3 className="mb-2"><Breadcrumb course={course} /></h3>
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
      {users
    .filter((user) =>
      enrollments.some((enrollment) => enrollment.user === user._id && enrollment.course === cid)
    )
    .map((user) => (
     <tr key={user._id}>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>{" "}
          <span className="wd-last-name">{user.lastName}</span></td>
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
