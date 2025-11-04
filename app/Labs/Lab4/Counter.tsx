import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
              id="wd-counter-up-click">Up</button>
      <button onClick={() => setCount(count - 1)}
              id="wd-counter-down-click">Down</button>
<hr/></div>);}


// declare and initialize
// a variable. print changes
// of the variable to the console

// render variable

// variable updates on console
// but fails to update the DOM as desired



