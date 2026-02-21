import React, { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";

import { Link } from "react-router-dom";

function Userdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
        setUsers(response.data);
      } catch (error) {
        console.log("error data", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="userTable">
      <Link  to="/add" type="button" className="btn btn-primary mb-3">
        Add User <i className="fa-solid fa-user"></i>
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id || index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className="actionButton">
                <button type="button" className="btn btn-warning me-2">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userdata;