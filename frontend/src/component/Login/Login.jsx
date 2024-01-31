import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });
      console.log(res);
      if (res && res.data) {
        toast.success(res.data && res.data.data.access_token);
        localStorage.setItem("token", res.data.data.access_token);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>
        <div className="mb-3">
          <label htmlFor="name">email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="email"
            
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
