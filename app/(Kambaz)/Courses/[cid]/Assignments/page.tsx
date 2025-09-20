import Link from "next/link";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">
            A1 - INTRO + HTML
          </Link> </li>
        <li className="wd-assignment-list-item">
          Multiple Modules | Not Available Until 09/12/2025 | Due: 09/21/2025 at 11:59pm | 100 pts
        </li>
      </ul>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/1234" className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </Link> </li>
        <li className="wd-assignment-list-item">
            Multiple Modules | Not Available Until 09/27/2025 | Due: 10/05/2025 at 11:59pm | 100 pts
        </li>
      </ul>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/12345" className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </Link> </li>
        <li className="wd-assignment-list-item">
            Multiple Modules | Not Available Until 09/11/2025 | Due: 09/17/2025 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
);}
