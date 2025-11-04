import { useState } from "react";
import { FormControl } from "react-bootstrap";
export default function StringStateVariables({xyz}: {xyz?: string}) {
  const [firstName, setFirstName] = useState(xyz);
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <FormControl
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
<hr/></div>);}