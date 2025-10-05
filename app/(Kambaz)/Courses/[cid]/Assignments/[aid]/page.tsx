import Button from "react-bootstrap/esm/Button";
import { FaPlus } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of the github.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <td align="right" valign="top">
            <label htmlFor="wd-Assignment-Group">Assignment Group</label>
          </td>
        <select>
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECTS</option>
        </select>
        <tr>
            </tr>
        <td align="right" valign="top">
            <label htmlFor="wd-Display-Grade-as">Display Grade as</label>
          </td>
        <select>
          <option>Percentage</option>
          <option>Letter</option>
        </select>
        <tr>
            </tr>
        <td align="right" valign="top">
            <label htmlFor="wd-Submission-Type">Submission Type</label>
          </td>
        <select>
          <option>Online</option>
          <option>In-Person</option>
        </select>
        <h5 id="wd-Online-Entry-Options">Online Entry Options</h5>

<input type="checkbox" name="check-Online-Entry-Options" id="wd-Text-Entry"/>
<label htmlFor="wd-Text-Entry">Text Entry</label><br/>

<input type="checkbox" name="check-Online-Entry-Options" id="wd-Website-URL"/>
<label htmlFor="wd-Website-URL">Website URL</label><br/>

<input type="checkbox" name="check-Online-Entry-Options" id="wd-Media-Recordings"/>
<label htmlFor="wd-Media-Recordings">Media Recordings</label><br/>

<input type="checkbox" name="check-Online-Entry-Options" id="wd-Student-Annotation"/>
<label htmlFor="wd-Student-Annotation">Student Annotation</label><br/>

<input type="checkbox" name="check-Online-Entry-Options" id="wd-File-Uploads"/>
<label htmlFor="wd-File-Uploads">File Uploads</label><br/>
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-Assign">Assign</label>
          </td>
        <select>
          <option>Assign to Everyone</option>
          <option>Assign to No one</option>
        </select>
        </tr>
        <label htmlFor="wd-Due"> Due </label>
<input type="date"
       defaultValue="2025-09-21"
       id="wd-Due"/><br/>
       <label htmlFor="wd-Available-from"> Available from </label>
<input type="date"
       defaultValue="2025-09-12"
       id="wd-Available-from"/><br/>
       <label htmlFor="wd-Until"> Until: </label>
<input type="date"
       defaultValue="2025-09-12"
       id="wd-Until"/><br/>
      </table>
        <button type="button">Cancel</button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       Save
     </Button>
    </div>
);}
