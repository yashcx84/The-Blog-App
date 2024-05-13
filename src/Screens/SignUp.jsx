import React from "react";
export default function SignUp() {
  return (
    <>
      <div className="containerY">

        <div className="login-box shadowBtn">
          <h1>Login</h1>
          <form action="" method="post">
            <label htmlFor="username">Username :</label>
            <input type="text" id="username" placeholder="  Username" />
            <label htmlFor="email">E mail :</label>
            <input type="text" id="email" placeholder="  email" />
            <label htmlFor="password">Password :</label>
            <input type="password" placeholder="  Password" id="password" />
            <label htmlFor="">Confirm Password :</label>
            <input type="text" id="cpassword" placeholder="  confirm password" />

            <input type="checkbox" name="conditions" id="t&c" /> <label htmlFor="t&c">
              Accept terms and conditions
            </label>
            <button>Sign up</button>

          </form>
          <div className="login-options">
            Log in or Sign up using
            <div><FaInstagram />
              <FcGoogle />
              <FaTwitter /></div>




          </div>
        </div>
      </div>
    </>
  );
}
