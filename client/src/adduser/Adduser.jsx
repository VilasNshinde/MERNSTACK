import React from "react";
import './adduser.css';

function Adduser() {
  return (
    <div className="adduser">
      <h3>Add New User</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            //value="id"
            autoComplete="off"
            placeholder="Enter you name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            //value="id"
            autoComplete="off"
            placeholder="Enter you Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            //value="id"
            autoComplete="off"
            placeholder="Enter you Address"
          />
        </div>
        <div className="inputGroup">
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adduser;
