import BlogData from "./BlogData";
import NavHomes from "./NavHomes";
import { BsSave2 } from "react-icons/bs";
import { BsFillSaveFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MultiSelect } from "react-multi-select-component";

const AllBlog = () => {
  const options = [
    { label: "Sport", value: "Sport" },
    { label: "Food", value: "Food" },
    { label: "Travel", value: "Travel" },
    { label: "Fashion", value: "Fashion" },
    { label: "Health", value: "Health" },
  ];

  const [AllData, setAllData] = useState([]);
  const [getDataAdd, setGetDataAdd] = useState([]);
  const [isRefresh, setIsRefresh] = useState(true);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const getInterest = JSON.parse(localStorage.getItem("loggedUser"));

  // Change Data as per Interest and Add

  useEffect(() => {
    const getInterest = JSON.parse(localStorage.getItem("loggedUser"));
    const dataFromAdd = JSON.parse(localStorage.getItem("BlogData"));
    const getmail = JSON.parse(localStorage.getItem("email"));

    if (getInterest) {
      if (dataFromAdd) {
        let filteredData = [];
        const selfBlog = dataFromAdd.filter((el) => el.id === getmail);

        const withOutId = dataFromAdd.filter((el) => el.id !== getmail);

        withOutId.forEach((el) => {
          el.interstedValue.forEach((element) => {
            if (getInterest.interstedValue.includes(element)) {
              filteredData.push(el);
            }
          });
        });

        setGetDataAdd([...selfBlog, ...filteredData]);
        setAllData([...selfBlog, ...filteredData]);
      }
    }
  }, []);

  // Saved Data into saveBlog

  const handleClickofSave = (idforcred) => {
    const arr = [];
    const getDataofAllUser = JSON.parse(localStorage.getItem("detail"));
    const getmail = JSON.parse(localStorage.getItem("email"));

    getDataofAllUser.forEach((data) => {
      if (data.email === getmail) {
        let currentUser = data;
        if (currentUser.blogId && Array.isArray(currentUser.blogId)) {
          if (!data.blogId.includes(idforcred)) {
            toast.success("Bloged Saved");
            currentUser.blogId.push(idforcred);
          } else {
            toast.warn("Bloged Unsaved");
            const updateData = currentUser.blogId.filter((index) => {
              return idforcred !== index;
            });
            currentUser.blogId = updateData;
          }
          localStorage.setItem("loggedUser", JSON.stringify(currentUser));
        } else {
          currentUser.blogId = [idforcred];
        }
        arr.push(currentUser);
      } else {
        arr.push(data);
      }
    });

    localStorage.setItem("detail", JSON.stringify(arr));
    setIsRefresh(!isRefresh);
  };

  // Search Filter handle onCHnage

  const handleOnSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setGetDataAdd(AllData);
    } else {
      filteredData();
    }
  };
  const onSelect = (data) => {
    setSelected(data);
    console.log(data.length);
    if (data.length === 0) {
      setGetDataAdd(AllData);
    } else {
      filteredData(data);
    }
  };

  // Search filter Function

  const filteredData = (obj) => {
    let blogs = [...AllData];
    const arr = [];
    const id = [];

    if (search) {
      blogs = blogs.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase());
      });
      setGetDataAdd(blogs);
    }
    if (selected.length > -1) {
      blogs.forEach((data) => {
        obj.forEach((item) => {
          console.log("data of select >>", item.value);
          if (data.interstedValue.includes(item.value)) {
            console.log("dataof blog >>", data.interstedValue);

            if (!id.includes(data.idforcred)) {
              console.log("blogid >>", id);
              arr.push(data);
              id.push(data.idforcred);
            }
          }
        });
      });

      blogs = arr;

      setGetDataAdd(blogs);
      console.log(blogs);
    }
  };
  // Render Data
  return (
    <>
      <div>
        <NavHomes />
        <div className="input-group  mt-4 mb-5">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              value={search}
              onChange={handleOnSearch}
              placeholder="Search topic"
              className="form-control"
            />
          </div>
          <div className="form-outline mx-5">
            <MultiSelect
              options={options}
              value={selected}
              onChange={onSelect}
              labelledBy="Select"
            />
          </div>
        </div>

        {getDataAdd.length !== 0 ? (
          <>
            <div>
              <div>
                {getDataAdd.map((elem, id) => {
                  return (
                    <>
                      <div>
                        <div>
                          <BlogData
                            title={elem.title}
                            interstedValue={elem.interstedValue}
                            description={elem.description}
                          />
                        </div>
                        <div className="mb-5">
                          {getInterest.blogId &&
                          getInterest.blogId.indexOf(elem.idforcred) > -1 ? (
                            <BsFillSaveFill
                              onClick={() => {
                                handleClickofSave(elem.idforcred);
                              }}
                              cursor="pointer"
                              style={{
                                height: "25px",
                                width: "25px",
                                marginLeft: "450px",
                              }}
                            />
                          ) : (
                            <BsSave2
                              onClick={() => {
                                handleClickofSave(elem.idforcred);
                              }}
                              cursor="pointer"
                              style={{
                                height: "25px",
                                width: "25px",
                                marginLeft: "450px",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-5">
              <p
                className="fs-2"
                style={{
                  textAlign: "center",
                }}
              >
                No Blogs
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllBlog;
