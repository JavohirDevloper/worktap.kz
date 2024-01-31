import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/user/register", {
        username,
        last_name,
        email,
        password,
        phone,
      });
      console.log(res);
      navigate("/login");
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
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
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Имя"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Ваше фамилия</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Фамилия"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="E-mail "
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name">Телефон номер</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Телефон"
            required
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
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;
