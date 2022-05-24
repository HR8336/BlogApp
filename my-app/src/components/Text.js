import React, { useState } from "react";

function Text() {
  const [data, setData] = useState("");
  const [val, setVal] = useState(true);

  const inputA = () => {
    setVal(false);
  };
  const submit = () => {
    setData(data);
    setVal(true);
  };
  return (
    <>
      <p>Text : {data}</p>
      {val ? (
        <button type="button" onClick={inputA}>
          Edit
        </button>
      ) : (
        <>
          <input
            type={"text"}
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></input>
          <button onClick={submit}>Save</button>
        </>
      )}
    </>
  );
}

export default Text;
