"use client";
import React, { useEffect } from "react";
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
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "../../client";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const assignments: any[] = useSelector((state: any) => state.assignmentsReducer?.assignments ?? []);
  const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);


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

  const onRemoveAssignment = async (assignmentId: string) => {
    if (!confirm("Delete this assignment?")) return;
      await client.deleteAssignment(assignmentId);
      const updatedAssignments = assignments.filter((a: any) => a._id !== assignmentId);
      dispatch(deleteAssignment(updatedAssignments));
      dispatch(setAssignments(updatedAssignments));
    };

const fetchAssignments = async () => {
    const assignments = await client.findMyAssignments(cid as string);
    console.log(assignments);
    dispatch(setAssignments(assignments));
  };
    useEffect(() => {
    fetchAssignments();
  }, []);

  const onCreateAssignmentForCourse = async () => {
  if (!cid) return;
  const newAssignment = { items: [], course: cid };
  await client.createAssignment(cid as string, newAssignment); 
  fetchAssignments();
};


  return (
    <div>
      <div className="mb-3">
        <h3 className="mb-2"><Breadcrumb course={useSelector((s: any) => 
          (s.coursesReducer?.courses ?? []).find((c: any) => c._id === cid))} /></h3>
      </div>
      <AssignmentControls />
      <div>
        <ListGroup className="rounded-0 mt-3" id="wd-assignments">
          <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray" />
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <AssignmentControlSection />
          </div>


          {assignments.map((assignment) => (
            <ListGroup className="wd-lessons rounded-0" key={assignment._id}>
              <ListGroupItem className="wd-lesson p-3 ps-1" />
              <ListGroup className="wd-assignments-list rounded-0">
                <ListGroupItem className="wd-assignment-list-item p-3 p-2 d-flex align-assignments-start">
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
                      deleteAssignment={onRemoveAssignment}
                      editHref={`/Courses/${cid}/Assignments/${assignment._id}`}
                    />
                  )}
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item">
                  Multiple Modules | Not Available Until {assignment.availableDate ? formatYMD(assignment.availableDate) : "—"}
                  {" "} | Due: {assignment.dueDate ? formatYMD(assignment.dueDate) : "—"} | {assignment.points} pts
                </ListGroupItem>
              </ListGroup>
            </ListGroup>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
