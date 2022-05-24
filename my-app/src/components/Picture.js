import React from "react";
import { useState } from "react";
import Sdata from "./Sdata";
function Picture() {
  const [data, setdata] = useState(Sdata);
  const [btn, setBtn] = useState(0);
  const chane = () => setBtn(btn + 1);
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
              <button type="button" className="likeBtn" onClick={chane}>
                <img src="like.png" style={{ width: "24px", height: "24px" }} />
                {btn}
              </button>
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