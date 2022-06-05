import React, { useState } from "react";

const Button = () => {
  const [btn, setBtn] = useState(0);

  const chane = () => setBtn(btn + 1);

  return (
    <button type="button" className="likeBtn" onClick={chane}>
      <img src="like.png" style={{ width: "24px", height: "24px" }} />
      {btn}
    </button>
  );
};

export default Button;
