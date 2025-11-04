"use client";
import Link from "next/link";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
  editHref,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment?: (assignmentId: string) => void;
  editHref?: string;
}) {
  const handleDelete = () => {
    deleteAssignment(assignmentId);
  };

  const handleEditClick = () => {
    if (editAssignment) editAssignment(assignmentId);
  };

  return (
    <div className="float-end">
      {editHref ? (
        <Link href={editHref} className="me-3" title="Edit">
          <FaPencil className="text-primary" />
        </Link>
      ) : (
        <button className="btn btn-link p-0 me-3 text-decoration-none" onClick={handleEditClick} title="Edit">
          <FaPencil className="text-primary" />
        </button>
      )}

      <button className="btn btn-link p-0 me-2 text-decoration-none" onClick={handleDelete} title="Delete">
        <FaTrash className="text-danger" />
      </button>
      <GreenCheckmark />
      <span className="position-relative me-2" style={{ bottom: "1px" }}>
        <FaPlus />
      </span>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
