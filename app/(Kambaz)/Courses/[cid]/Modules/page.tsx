import ListGroup from "react-bootstrap/esm/ListGroup";
import ModulesControls from "./ModulesControls";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
       <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0"id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1<ModuleControlButtons />
            </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title p-3">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                </span>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                  </ListGroupItem>
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learn HTML <LessonControlButtons />
                  </ListGroupItem>
              </ListGroup>
              <span className="wd-title">SLIDES <LessonControlButtons />
              </span>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Intro to course <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learning HTML <LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
            </div>
          <ListGroup className="wd-lessons">
            <ListGroupItem className="wd-lesson">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
              </span>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learn BOOTSTRAP <LessonControlButtons />
                  </ListGroupItem>
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learn CSS <LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
              <div className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                </div>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Using BOOTSTRAP <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learning CSS <LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
            </div>
          <ListGroup className="wd-lessons">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                </span>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learn JavaScript <LessonControlButtons />
                  </ListGroupItem>
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learn React <LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
              <span className="wd-title">
                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                </span>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Learning JavaScript <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" /> Using React <LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
);}
