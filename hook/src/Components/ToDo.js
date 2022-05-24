import React, { useReducer, useRef, useState } from "react";
const abc = [];
const reducer = (state, action) => {
  if (action.type === "add") {
    return [...state, { name: action.name }];
  }

  if (action.type === "remove") {
    return state.filter((item, id) => id !== action.index);
  }
  if (action.type === "edit") {
    const newEditData = state.find((item, id) => id === action.index);
    return newEditData;
  }
  if (action.type === "removeAll") {
    return (state = []);
  }
};

const ToDo = () => {
  const inputData = useRef("");
  const [state, dispatch] = useReducer(reducer, abc);
  const [editData, setEditData] = useState("");

  // setEditData(inputData.current.value);

  const inputdata = (e) => {
    e.preventDefault();
    if (inputData.current.value === "") {
      return alert("Plz Fill Data");
    }
    dispatch({
      type: "add",
      name: inputData.current.value,
    });
    // setEditData(inputData.current.value);
    // console.log(inputData.current.value);
    inputData.current.value = "";
  };

  return (
    <>
      <div>Grocery Bud</div>
      <div>
        <form onSubmit={inputdata}>
          <input
            ref={inputData}
            // value={editData}
            // onChange={(e) => setEditData(e.target.value)}
          />

          <button>Submit</button>
        </form>
        <p>
          {state.map((add, index) => {
            return (
              <>
                <li key={index}>{add.name}</li>
                <button
                  onClick={() => {
                    dispatch({ type: "remove", index });
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "edit", index });
                  }}
                >
                  Edit
                </button>
              </>
            );
          })}
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "removeAll" });
          }}
        >
          Clear All
        </button>
      </div>

      {/* <div>{ac}</div> */}
    </>
  );
};

export { ToDo };
