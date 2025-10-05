import Link from "next/link";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { FaBook } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControlSection from "./AssignmentControlSection";
export default function Assignments() {
  return (
    <><div>
      <AssignmentControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray"></ListGroupItem>
        <div className="wd-assignments-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlSection />
        </div>
      </ListGroup>
    </div><ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <ListGroup className="wd-assignments-list rounded-0">
            <ListGroupItem className="wd-assignment-list-item ps-3 p-2">
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link p-3">
              <FaBook className="me-2 fs-3" />
                <BsGripVertical className="me-2 fs-3" /> A1 - INTRO + HTML <AssignmentControlButtons />
              </Link>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-list-item">
              Multiple Modules | Not Available Until 09/12/2025 | Due: 09/21/2025 at 11:59pm | 100 pts
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
      <ListGroup id="wd-assignment-list">
        <ListGroupItem className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/1234" className="wd-assignment-link">
          <FaBook className="me-2 fs-3" />
            A2 - CSS + BOOTSTRAP <AssignmentControlButtons />
          </Link>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-item">
          Multiple Modules | Not Available Until 09/27/2025 | Due: 10/05/2025 at 11:59pm | 100 pts
        </ListGroupItem>
      </ListGroup><ListGroup id="wd-assignment-list">
        <ListGroupItem className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/12345" className="wd-assignment-link">
          <FaBook className="me-2 fs-3" />
            A3 - JAVASCRIPT + REACT <AssignmentControlButtons />
          </Link>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-item">
          Multiple Modules | Not Available Until 09/11/2025 | Due: 09/17/2025 at 11:59pm | 100 pts
        </ListGroupItem>
      </ListGroup></>
  );
}