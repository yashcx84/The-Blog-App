import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "../App.css";
export default function Header() {
  const [showToggle, setShowToggle] = useState(false);

  const toggleShow = () => {
    setShowToggle(!showToggle);
  };
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
            <Link to="/Login" className="myBtn tertaryBtn hoverBtn" >LogIn</Link>
            <Link to="/SignUp" className="myBtn  hoverBtn forthBtn">SignUp</Link>
            <div className="navToggle hoverBtn">
              <RxHamburgerMenu className="navToggleIcon" onClick={toggleShow} />
            </div>
          </div>
        </nav>
      </header>
      <div className={`toggleContainer ${showToggle ? 'showToggle' : ''}`}>
        <NavLink to="/Home" activeClassName="active">HOME</NavLink>
        <NavLink to="/About" activeClassName="active">ABOUT</NavLink>
        <NavLink to="/Contact" activeClassName="active">CONTACT</NavLink>
        <NavLink to="/Blogs" activeClassName="active">BLOGS</NavLink>
      </div>
    </>
  );
}
