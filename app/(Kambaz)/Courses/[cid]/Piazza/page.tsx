"use client";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Breadcrumb from "../Breadcrumb";
import React from "react";

export default function Piazza() {
  const { cid } = useParams();
  const course = useSelector((state: any) => (state.coursesReducer?.courses ?? []).find((c: any) => c._id === cid));
  return (
    <div>
      <h3 className="mb-2"><Breadcrumb course={course} /></h3>
    </div>
  );
}