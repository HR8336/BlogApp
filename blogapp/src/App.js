import React, { useEffect, useState } from "react";
import ReactComponents from "./components/ReactComponents";

function App() {
  const [mainBtn, setMainBtn] = useState(true);
  const [subBtn, setSubBtn] = useState(true);

  useEffect(() => {
    if (mainBtn || subBtn) {
      if (!(mainBtn === true && subBtn === true)) {
        const bn = subBtn ? true : false;
        console.log(bn);
      }
    }
  }, [mainBtn, subBtn]);

  return (
    <>
      <ReactComponents />

      {/* <div>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          onClick={() => {
            setMainBtn(!mainBtn);
          }}
          defaultChecked
        />
        <label htmlFor="vehicle1"> main</label>
        <br />
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          value="Car"
          onClick={() => {
            setSubBtn(!subBtn);
          }}
          defaultChecked
        />
        <label htmlFor="vehicle2">sub</label>
        <br />
      </div> */}
    </>
  );
}

export default App;
