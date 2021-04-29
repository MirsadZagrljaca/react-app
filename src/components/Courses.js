import { useEffect, useState } from "react";
import { list } from "../services/apiService";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    list("courses", (data) => {
      setCourses(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Points(ECTS)</th>
            <td>
              <Link to="/courses/0">Add New</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.ects}</td>
              <td>
                <Link to={`/courses/${c._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
