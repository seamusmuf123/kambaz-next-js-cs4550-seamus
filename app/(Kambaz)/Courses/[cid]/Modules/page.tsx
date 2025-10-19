"use client";
import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

type Lesson = { _id: string; name: string };
type Module = { _id: string; name: string; lessons: Lesson[]; course: string };

export default function Modules() {
  const { cid } = useParams();

  const modules: Module[] = (db.modules as Module[]).filter(
    (m) => m.course === cid
  );

  return (
    <div>
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module) => (
          <ListGroup key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <ListGroupItem className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name}
              <ModuleControlButtons />
            </ListGroupItem>

            {module.lessons?.length > 0 && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroup>
        ))}
      </ListGroup>
    </div>
  );
}
