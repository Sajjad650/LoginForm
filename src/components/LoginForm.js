import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  function handleSubmit(event) {
    event.preventDefault();

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      return;
    }

    setEmailError("");
    setEmail("");
    setPassword("");
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <>
      <form
        className="container mt-5 bg-primary align-items-center"
        style={{ width: "300px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
