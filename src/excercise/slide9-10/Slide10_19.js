import React, { useState } from "react";
import User from "./User";

const ShowHideUser = ({ show }) => (show ? <User /> : null);

function Slide10_19() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide User" : "Show User"}
      </button>
      <ShowHideUser show={show} />
    </>
  );
}

export default Slide10_19;
