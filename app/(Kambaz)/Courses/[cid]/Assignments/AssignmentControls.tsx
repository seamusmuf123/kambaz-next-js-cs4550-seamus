import { Button, FormControl } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
export default function AssignmentControls() {
 const { cid } = useParams();
 const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);
 return (
   <div id="wd-modules-controls" className="text-nowrap">
    {currentUser?.role === "FACULTY" && (
      <Link href={`/Courses/${cid}/Assignments/Create`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </Link>
    )}
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
      <InputGroup className="mb-3">
                 <InputGroupText><FaMagnifyingGlass /></InputGroupText>
                 <FormControl placeholder="Search for Assignments" />
             </InputGroup>
   </div>
);
  }
