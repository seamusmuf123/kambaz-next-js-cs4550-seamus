"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "react-bootstrap/esm/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "../reducer";
import Breadcrumb from "../../Breadcrumb";
import * as client from "../../../client";
import { useRouter } from "next/navigation";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();

  const assignments: any[] = useSelector((state: any) => state.assignmentsReducer?.assignments ?? []);
  const source = assignments.find(a => String(a._id) === String(aid));

  const [title, setTitle] = useState(source?.title ?? "");
  const [description, setDescription] = useState(source?.description ?? "");
  const [points, setPoints] = useState(source?.points ?? 0);
  const [dueDate, setDueDate] = useState(source?.dueDate ?? "");
  const [availableDate, setAvailableDate] = useState(source?.availableDate ?? "");
  const [availableUntilDate, setAvailableUntilDate] = useState(source?.availableUntilDate ?? "");

  
  useEffect(() => {
    setTitle(source?.title ?? "");
    setDescription(source?.description ?? "");
    setPoints(source?.points ?? 0);
    setDueDate(source?.dueDate ?? "");
    setAvailableDate(source?.availableDate ?? "");
    setAvailableUntilDate(source?.availableUntilDate ?? "");
  }, [source]);

  const router = useRouter();

  const handleSave = async () => {
    if (!source) return;
    const updated = {
      ...source,
      title,
      description,
      points: Number(points),
      dueDate,
      availableDate,
      availableUntilDate,
    };
    try {
      console.log("Updating assignment with data:", updated);
      console.log("Assignment ID:", updated._id);
      await client.updateAssignment(updated);
      dispatch(updateAssignment(updated));
      router.push(`/Courses/${cid}/Assignments`);
    } catch (err) {
      console.error("Failed to update assignment", err);
    }
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
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={String(points)} onChange={(e) => setPoints(Number(e.target.value) ?? 0)} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-Due"> Due </label>
            </td>
            <td>
              <input type="date" value={dueDate ?? ""} onChange={(e) => setDueDate(e.target.value)} id="wd-Due" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-Available-from"> Available from </label>
            </td>
            <td>
              <input type="date" value={availableDate ?? ""} onChange={(e) => setAvailableDate(e.target.value)} id="wd-Available-from" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-Until"> Until: </label>
            </td>
            <td>
              <input type="date" value={availableUntilDate ?? ""} onChange={(e) => setAvailableUntilDate(e.target.value)} id="wd-Until" />
            </td>
          </tr>
        </tbody>
      </table>
      <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="secondary" type="button">Cancel</Button>
      </Link>
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
