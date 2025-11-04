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
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../Breadcrumb";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const assignments: any[] = useSelector((state: any) => state.assignmentsReducer?.assignments ?? []);
  const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);

  const items = assignments
    .filter((a) => a.course === cid)
    .map((a) => ({
      ...a,
      availableDateStr: a.availableDate ?? null,
      dueDateStr: a.dueDate ?? null,
    }));

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formatYMD = (s: string) => {
    if (!s) return "";
    const parts = s.split("-");
    if (parts.length < 3) return s;
    const [y, m, d] = parts;
    const mi = Number(m) - 1;
    return `${monthNames[mi] ?? m} ${Number(d)}, ${y}`;
  };

  const onDelete = (assignmentId: string) => {
    if (!confirm("Delete this assignment?")) return;
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div>
      <div className="mb-3">
        <h3 className="mb-2"><Breadcrumb course={useSelector((s: any) => (s.coursesReducer?.courses ?? []).find((c: any) => c._id === cid))} /></h3>
      </div>
      <AssignmentControls />
      <div>
        <ListGroup className="rounded-0 mt-3" id="wd-assignments">
          <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray" />
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <AssignmentControlSection />
          </div>

          {items.map((assignment) => (
            <ListGroup className="wd-lessons rounded-0" key={assignment._id}>
              <ListGroupItem className="wd-lesson p-3 ps-1" />
              <ListGroup className="wd-assignments-list rounded-0">
                <ListGroupItem className="wd-assignment-list-item p-3 p-2 d-flex align-items-start">
                  {currentUser?.role === "FACULTY" ? (
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link flex-grow-1 text-decoration-none"
                    >
                      <FaBook className="me-2 fs-3" /> {assignment.title}
                    </Link>
                  ) : (
                    <div className="wd-assignment-link flex-grow-1 text-decoration-none text-muted">
                      <FaBook className="me-2 fs-3" /> {assignment.title}
                    </div>
                  )}
                  {currentUser?.role === "FACULTY" && (
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={onDelete}
                      editHref={`/Courses/${cid}/Assignments/${assignment._id}`}
                    />
                  )}
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item">
                  Multiple Modules | Not Available Until {assignment.availableDateStr ? formatYMD(assignment.availableDateStr) : "—"}
                  {" "} | Due: {assignment.dueDateStr ? formatYMD(assignment.dueDateStr) : "—"} | {assignment.points} pts
                </ListGroupItem>
              </ListGroup>
            </ListGroup>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
