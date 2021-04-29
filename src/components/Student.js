import { useEffect, useState } from "react";
import { read, insert, update, remove } from "../services/apiService";

const Student = ({ match, history }) => {
  const [id] = useState(match.params.id);
  const [student, setStudent] = useState({
    _id: "0",
    firstName: "",
    lastName: "",
    yearOfBirth: 0,
    address: ""
  });

  useEffect(() => {
    if (id !== "0") {
      read("students", id, (data) => {
        if (data) setStudent(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  const back = () => {
    history.push("/students");
  };

  const save = () => {
    if (id === "0") {
      if (student.firstName === "") {
        alert("Please enter Student's first name!");
        return;
      }

      if (student.lastName === "") {
        alert("Please enter Student's last name!");
        return;
      }

      if (student.yearOfBirth === "0") {
        alert("Please enter Student's year of birth!");
        return;
      }

      if (student.address === "") {
        alert("Please enter Student's address!");
        return;
      }

      insert("students", student, (data) => {
        if (data) return history.push("/students");
        console.log("Error occured while trying to save your data!");
      });
    }
    update("students", id, student, (data) => {
      if (data) return history.push("/students");
      console.log("Error occured while trying to save your data!");
    });
  };

  const del = () => {
    remove("students", id, (data) => {
      history.push("/students");
    });
  };

  return (
    <div className="containerStudent">
      <h2 className="studenth2">Student</h2>
      <form className="input-form-St">
        <div style={{ margin: "12px 0 0 24px" }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={changeHandler}
          />
        </div>
        <div style={{ margin: "12px 0 0 24px" }}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={changeHandler}
          />
        </div>
        <div style={{ margin: "12px 0 0 24px" }}>
          <label htmlFor="yearOfBirth">Year of Birth:</label>
          <input
            className="yob"
            type="text"
            name="yearOfBirth"
            value={student.yearOfBirth}
            onChange={changeHandler}
          />
        </div>
        <div style={{ margin: "12px 0 0 24px" }}>
          <label htmlFor="address">Address:</label>
          <input
            className="adr"
            type="text"
            name="address"
            value={student.address}
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

export default Student;
