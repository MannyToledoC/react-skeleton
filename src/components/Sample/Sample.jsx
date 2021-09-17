import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Sample.scss";

function Sample() {
  // useState(0) sets the value count to 0 (called a hook)
  // To edit count you must use setCount
  // import react router and boostrap
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };
  const clear = () => {
    setCount(0);
  };

  return (
    <div className="sample">
      <h1>Sample Clicker</h1>
      <h3>{count}</h3>
      <Button variant="primary" onClick={click} className="m-2">
        +1
      </Button>
      <Button onClick={clear} className="m-2">
        Clear
      </Button>
    </div>
  );
}
export default Sample;
