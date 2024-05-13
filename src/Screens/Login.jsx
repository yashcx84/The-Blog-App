import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";




export default function Login() {
  return (
    <div className="containerY">
      <div className="login-box shadowBtn">
        <h2>Login</h2>
        <form action="" method="post">
          <label htmlFor="username">Username :</label>
          <input type="text" id="username" placeholder="  Username" />
          <label htmlFor="password">Password :</label>
          <input type="password" placeholder="  Password" id="password" />
          <a href="#" target="_blank" >Forgate password</a>
          <button>Sign in</button>

          <a href="#" target="_blank" >Forgate password</a>
        </form>
        <div className="login-options">
          Log in or Sign up using
          <div><FaInstagram />
            <FcGoogle />
            <FaTwitter /></div>




        </div>
      </div>
    </div>
  );
}
