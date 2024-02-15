import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/state";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3001/register`, {name, email, password})
    .then(result => {
      dispatch(
        setLogin({
          user : result.data,
        })
      );
      navigate("/home");
    })
    .catch(err => {
      toast.error("User Is Already Exist's. Please Login");
      console.log(err)})
  };

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>ChatOnMe</h1>
          <p>
          Unlock the full ChatOnme experience! Sign up now to connect, share, and engage with a dynamic community. Your social journey begins with a simple registration. Join ChatOnme today and let the connections begin!
          </p>
          <span>Do you have an account?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="name"
              required="required"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            /> */}
             {err && err} 
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
