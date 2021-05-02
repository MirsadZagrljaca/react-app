import { useEffect, useState } from "react";
import { read, insert, update, remove } from "../services/apiService";

const Course = ({ match, history }) => {
  const [id] = useState(match.params.id);
  const [course, setCourse] = useState({
    _id: "0",
    name: "",
    ects: 0
  });

  useEffect(() => {
    if (id !== "0") {
      read("courses", id, (data) => {
        if (data) setCourse(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  }

  const back = () => {
    history.push("/courses");
  };

  const save = () => {
    if (id === "0") {
      if (course.name === "") {
        return alert("Please enter Course's name!");
      }

      if (course.ects === 0) {
        return alert("Please enter Course's points(ECTS)!");
      }

      insert("courses", course, (data) => {
        if (data) return history.push("/courses");
        console.log("Error occured while trying to save your data!");
      });
    } else {
      update("courses", id, course, (data) => {
        if (data) return history.push("/courses");
        console.log("Error occured while trying to save your data!");
      });
    }
  };

  const del = () => {
    remove("courses", id, (data) => {
      history.push("/courses");
    });
  };

  return (
    <div className="containerCourse">
      <h2 className="courseh2">Course</h2>
      <form className="input-form">
        <div style={{ margin: "12px 0 0 24px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={course.name}
            onChange={changeHandler}
          />
        </div>
        <div style={{ margin: "12px 0 0 24px" }}>
          <label htmlFor="ects">Points:</label>
          <input
            type="text"
            name="ects"
            value={course.ects}
            onChange={changeHandler}
          />
        </div>
        <hr />
        {id !== "0" && (
          <div className="left">
            <button type="button" onClick={del}>
              DELETE
            </button>
          </div>
        )}
        <div className="right">
          <button type="button" onClick={back}>
            BACK
          </button>
          <button type="button" onClick={save}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Course;
