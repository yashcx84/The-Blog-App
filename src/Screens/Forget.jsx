
import Button from "../Components/Button";

export default function Forget() {
  return (
    <div className="containerY">
      <div className="login-box">
        <p>We'll send code on your registered email or number</p>
        <form action="" method="post">
          <input type="number" placeholder="Number" id="number" />
          <p>or</p>
          <input type="email" placeholder="Email" id="email" />
          <Button className="myBtn tertaryBtn hoverBtn" text="Send Code" />
        </form>
      </div>
    </div>
  );
}
