import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl defaultValue="alice" placeholder="username" className="wd-username"/>
      <FormControl defaultValue="123"   placeholder="password" type="password"
             className="mb-2" />
      <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2" />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2" />
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" className="mb-2" />
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2" />
      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </FormSelect>
      <Link href="Signin" className="btn btn-danger w-100 mb-2"> Sign out </Link>
    </div>
);
}

