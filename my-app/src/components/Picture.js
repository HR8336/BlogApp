import React from "react";
import { useState } from "react";
import Sdata from "./Sdata";
import Button from "./Button";
function Picture() {
  const [data, setdata] = useState(Sdata);
  return (
    <>
      {data.map((ele) => {
        return (
          <>
            <div className="na">
              <div>
                <img
                  src={ele.image}
                  style={{ width: "24px", height: "24px" }}
                  alt="No image"
                />
              </div>
              <div>
                <p>
                  @ {ele.name} . {ele.time}h ago
                </p>
              </div>
            </div>
            <div>
              <p className="message">{ele.message}</p>
            </div>
            <div>
              <button type="button" className="reverseBtn">
                <img
                  src="rev_arr.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </button>
              <button type="button" className="loopbtn">
                <img src="loop.png" style={{ width: "24px", height: "24px" }} />
              </button>
              <Button />
              <button type="button" className="dotBtn">
                <img
                  className="image4"
                  src="dot.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Picture;
