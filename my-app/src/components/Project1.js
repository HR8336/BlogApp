import React, { useState } from "react";
import Select from "react-select";

const Project1 = (props) => {
  const [search, setSearch] = useState("");
  const [newdata, setNewData] = useState(true);

  const [selectedOption, setSelectedOption] = useState(null);

  // const data = [
  //   { value: 29, label: "Between 20-30" },
  //   { value: 29, label: "Between 30-40" },
  //   { value: 29, label: "Between 40-50" },
  //   { value: 29, label: "Above 50" },
  // ];

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={() => setNewData(false)}>search</button>

      {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={data}
      ></Select> */}

      {newdata ? (
        <>
          {props.Name.map((elem) => {
            return (
              <>
                <div>
                  {elem.name} {elem.age}
                </div>
                <div>
                  <img src={elem.image} className="image" />
                </div>
              </>
            );
          })}
        </>
      ) : (
        <>
          {props.Name.map((elem) => {
            if (Number(search) === elem.age || search === elem.name) {
              return (
                <>
                  <div>
                    {elem.name} {elem.age}
                  </div>
                  <div>
                    <img src={elem.image} className="image" />
                  </div>
                </>
              );
            }
          })}
        </>
      )}
    </>
  );
};

export default Project1;
