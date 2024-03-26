import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Subscriber" // Set default role
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    http.post("/users", formData)
      .then((response) => {
        console.log("User created successfully:", response.data);
        navigate("/"); // Redirect to home page after successful user creation
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // Handle error (e.g., display error message)
      });
  };

  return (
    <div>
      <h2>New User</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Role</label>
            <select
              name="role"
              className="form-control mb-2"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Subscriber">Subscriber</option>
              <option value="Author">Author</option>
              <option value="Editor">Editor</option>
              <option value="Administrator">Administrator</option>
            </select>

            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-info mt-2"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
