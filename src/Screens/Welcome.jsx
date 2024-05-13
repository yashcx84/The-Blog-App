import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="row">
        <div className="welcomeContainer">
          <h1>
            Welcome to BL<span>Q</span>G!
          </h1>
          <p>Start your blogging journey with ease ✨</p>
          <div className="ButtonContainer">
            <Button text="Create Your Blog Now ✒️" className="tertaryBtn myBtn shadowBtn hoverBtn" />
            <Link to="/docs" className="myBtn secondaryBtn hoverBtn">Quick Docs</Link>
          </div>

        </div>
      </div>
    </>
  );
}
