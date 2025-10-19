"use client";
import React from "react";
import Link from "next/link";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { FaBook } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControlSection from "./AssignmentControlSection";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

type Assignment = {
  _id: string;
  title: string;
  startDate: Date;
  dueDate: Date;
  points: number;
  course: string;
};

type RawAssignment = {
  _id: string;
  title: string;
  description?: string;
  availableDate?: string;
  dueDate?: string;
  availableUntilDate?: string;
  points: number;
  course: string;
};

export default function Assignments() {
  const { cid } = useParams();

  const items: Assignment[] = (db.assignments as RawAssignment[])
    .filter((a) => a.course === cid)
    .map((a) => ({
      _id: a._id,
      title: a.title,
      startDate: new Date(a.availableDate ?? ""),
      dueDate: new Date(a.dueDate ?? ""),
      points: a.points,
      course: a.course,
    }));

  return (
    <div>
      <AssignmentControls /><br/><br/><br/><br/>
      <div>
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray" />
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <AssignmentControlSection />
          </div>

          {items.map((assignment) => (
            <ListGroup className="wd-lessons rounded-0" key={assignment._id}>
              <ListGroupItem className="wd-lesson p-3 ps-1" />
              <ListGroup className="wd-assignments-list rounded-0">
                <ListGroupItem className="wd-assignment-list-item p-3 p-2">
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link p-3"
                  >
                    <FaBook className="me-2 fs-3" /> {assignment.title}
                    <AssignmentControlButtons />
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item">
                  Multiple Modules | Not Available Until {assignment.startDate.toDateString()}
                  {" "} | Due: {assignment.dueDate.toDateString()} | {assignment.points} pts
                </ListGroupItem>
              </ListGroup>
            </ListGroup>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}