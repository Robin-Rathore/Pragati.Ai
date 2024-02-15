import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./login.scss";
import axios from "axios";
import { setLogin } from "../../state/state";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast"

const Login = () => {
  // toast.configure();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/login`, {email, password})
    .then(result => {
      if (!result.data) {
        toast.error("Invalid email or password");
      }
      {
        dispatch(
          setLogin({
            user: result.data,
          })
        );
        navigate("/home");
      }
    })
    .catch(err =>{ 
      toast.error("An error occurred while logging in");
      console.log(err);
    });
    toast.success("Ordered Sucessfully, we are directing to the itmes");
    
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
          Welcome to ChatOnme – your gateway to genuine connections! Dive into a world of instant conversations, vibrant communities, and shared moments. ChatOnme is your go-to social hub, designed for seamless interaction and creative expression.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
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
            {/* {err && err} */}
            <button >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
