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
import { assignments } from "@/app/(Kambaz)/Database";
import { useParams } from "next/navigation";
export default function Assignments() {
    const { cid } = useParams();
    const assignment = db.assignments;

  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
            <div>
              <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray"></ListGroupItem>
                <div className="wd-assignments-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlSection />
                </div>
              </ListGroup>
              {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
              <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <ListGroup className="wd-assignments-list rounded-0">
                    <ListGroupItem className="wd-assignment-list-item ps-3 p-2">
                      <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link p-3">
                        <FaBook className="me-2 fs-3" />
                        <BsGripVertical className="me-2 fs-3" /> {assignment.title} <AssignmentControlButtons />
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className="wd-assignment-list-item">
                      Multiple Modules | Not Available Until {assignment.startDate} | Due: {assignment.dueDate} | {assignment.points} pts
                    </ListGroupItem>
                  </ListGroup>
                </ListGroupItem>
              </ListGroup>
          ))}
            </div>
    </div> 
  );
}