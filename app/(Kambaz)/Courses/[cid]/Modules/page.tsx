"use client";
import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ModulesControls from "./ModulesControls";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Modules() {
  type Lesson = { _id: string; name: string };
type Module = { _id: string; name: string; lessons: Lesson[]; course: string };
const { cid } = useParams();
const modules: Module[] = (db.modules as Module[]).filter(m => m.course === cid);
  return (
    <div>
       <ModulesControls /><br /><br /><br /><br />
  <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                ))}</ListGroup>)}</ListGroupItem>))}</ListGroup>
                  </div>  
                );  
}
