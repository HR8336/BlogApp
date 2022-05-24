import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Myaccordian = (props) => {
  const { title, info } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(!show)} className="acc_title">
        <h5>{title}</h5>
        {show ? <FaMinus /> : <FaPlus />}
      </div>

      {show && <p>{info}</p>}
    </>
  );
};

export default Myaccordian;
