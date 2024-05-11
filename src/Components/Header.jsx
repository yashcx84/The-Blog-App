import { NavLink } from "react-router-dom";
import "../App.css";
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="leftNav">
            <h1>BL<span>Q</span>G</h1>
          </div>
          <div className="middleNav">
            <NavLink to="/Home" activeClassName="active">HOME</NavLink>
            <NavLink to="/About" activeClassName="active">ABOUT</NavLink>
            <NavLink to="/Contact" activeClassName="active">CONTACT</NavLink>
            <NavLink to="/Blogs" activeClassName="active">BLOGS</NavLink>
          </div>
          <div className="rightNav">
            <NavLink to="/Login" >LogIn</NavLink>
            <NavLink to="/SignUp">SignUp</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
