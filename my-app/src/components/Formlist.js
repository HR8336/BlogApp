import React, { useState } from "react";

const Formlist = () => {
  // *****************////////////************************
  const [state, setState] = useState({
    name: "port",
    lastName: "pro",
    age: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    bdate: "2022-05-01T09:15:38.846Z",
    happy: "true",
  });
  const submitForm = (e) => {
    e.preventDefault();
    setState(...state);
  };

  // *****************////////////************************

  const [btn, setBtn] = useState(0);
  // const [val, setVal] = useState(5);
  const changeClick = () => {
    for (let i = 0; i <= 5; i++) {
      setBtn(btn + i);
    }
  };

  return (
    <>
      <div>
        <button onClick={changeClick}>{btn}</button>
      </div>

      <form>
        Name:{" "}
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <br />
        <br />
        LastName:{" "}
        <input
          type="text"
          value={state.lastName}
          onChange={(e) => setState({ ...state, lastName: e.target.value })}
        />
        <br />
        <br />
        Age
        <input
          type="text"
          value={state.age}
          onChange={(e) => setState({ ...state, age: e.target.value })}
        />
        <br />
        <br />
        Description
        <input
          type="text"
          value={state.description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
        />
        <br />
        <br />
        BirthDate
        <input
          type="text"
          value={state.bdate}
          onChange={(e) => setState({ ...state, bdate: e.target.value })}
        />
        <br />
        <br />
        Happy
        <input
          type="text"
          value={state.happy}
          onChange={(e) => setState({ ...state, happy: e.target.value })}
        />
      </form>
      <br />
      <button type="submit" onClick={submitForm}>
        Submit
      </button>

      <p>{state.name}</p>
      <p>{state.lastName}</p>

      <p>{state.age}</p>

      <p>{state.description}</p>

      <p>{state.bdate}</p>
      <p>{state.happy}</p>
    </>
  );
};

export default Formlist;
