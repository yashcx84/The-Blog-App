import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="containerY">
      <div className="login-box">
        <form action="" method="post">
          <input type="email" placeholder="Email" id="number" />
          <input type="text" placeholder="Username" id="username" />
          <input type="password" placeholder="Password" id="password" />
          <Button className="myBtn tertaryBtn hoverBtn" text="SignUp" />
          <Link to="/login" className="hoverBtn">Already Have an Account?<span> LogIn</span></Link>
        </form>
        <div className="login-options">
          <div className="logIcons">
            <FaInstagram className="logIcon hoverBtn" />
            <FcGoogle className="logIcon hoverBtn" />
            <FaTwitter className="logIcon hoverBtn" />
          </div>
        </div>
      </div>
    </div>
  );
}
