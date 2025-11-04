"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import Breadcrumb from "../../Breadcrumb";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { addAssignment } from "../reducer";

export default function AssignmentCreate() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [availableDate, setAvailableDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

  const onSave = () => {
    const toAdd = {
      title,
      description,
      points: Number(points),
      availableDate,
      dueDate,
      availableUntilDate,
      course: cid,
    };
    dispatch(addAssignment(toAdd));
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <h3 className="mb-2"><Breadcrumb course={useSelector((s: any) => (s.coursesReducer?.courses ?? []).find((c: any) => c._id === cid))} /></h3>
      </div>
      <label htmlFor="wd-name"> Assignment Name</label>
      <input id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <textarea id="wd-description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" value={String(points)} onChange={(e) => setPoints(Number(e.target.value) ?? 0)} />
      <br />
      <label htmlFor="wd-Due"> Due </label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} id="wd-Due"/><br/>
      <label htmlFor="wd-Available-from"> Available from </label>
      <input type="date" value={availableDate} onChange={(e) => setAvailableDate(e.target.value)} id="wd-Available-from"/><br/>
      <label htmlFor="wd-Until"> Until: </label>
      <input type="date" value={availableUntilDate} onChange={(e) => setAvailableUntilDate(e.target.value)} id="wd-Until"/><br/>

      <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="secondary" type="button">Cancel</Button>
      </Link>
      <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={onSave}>
          Save
        </Button>
      </Link>
    </div>
  );
}
