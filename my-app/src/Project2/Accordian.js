import React, { useState } from "react";
import Data from "./Data";
import Myaccordian from "./Myaccordian";

function Accordian() {
  const [accdata, setAccdata] = useState(Data);

  return (
    <>
      <section>
        {accdata.map((elem) => {
          return <Myaccordian key={elem.id} {...elem} />;
        })}
      </section>
    </>
  );
}

export default Accordian;
