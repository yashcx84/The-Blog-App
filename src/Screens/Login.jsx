import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="containerY">
      <div className="login-box">
        <form action="" method="post">
          <input type="text" id="username" placeholder="  Username" />
          <input type="password" placeholder="  Password" id="password" />
          <Button className="myBtn tertaryBtn hoverBtn" text="LogIn" />
          <Link to="/forget" className="hoverBtn" >Forgot password? <span>Get Code</span></Link>
          <Link to="/signUp"  className="hoverBtn">New User?<span> SignUp</span></Link>
        </form>
        <div className="logIcons">
          <FaInstagram className="logIcon hoverBtn" />
          <FcGoogle className="logIcon hoverBtn" />
          <FaTwitter className="logIcon hoverBtn" />
        </div>
      </div>
    </div>
  );
}
