import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Yash from '../assets/Images/Yash.png'
import Sarjeet from '../assets/Images/Sarjeet.jpg'

export default function Contact() {
  return (
    <div className="row">
      <div className="containerY contactContainer">
        <h1>Contact Us<span>.</span></h1>
        <p>We are here ready to handle your work</p>
        <div className="contactProfileContainer">
          <div className="contactProfile">
            <div className="contactImg">
              <img src={Yash} alt="Profile Image" />
            </div>
            <div className="contactInfoContainer">
              <p>Yash Jangid</p>
              <p>Web Developer</p>
            </div>
            <div className="contactIconContainer">
              <a href="mailto:yashcx84@gmail.com"><IoMdMail className="contactIcons" /></a>
              <a href="https://wa.me/6350229611"><IoLogoWhatsapp className="contactIcons" /></a>
              <a href="https://github.com/yashcx84"><FaGithub className="contactIcons" /></a>
            </div>
          </div>
          <div className="contactProfile">
            <div className="contactImg">
              <img src={Sarjeet} alt="Profile Image" />
            </div>
            <div className="contactInfoContainer">
              <p>Sarjeet</p>
              <p>Web Developer</p>
            </div>
            <div className="contactIconContainer">
              <a href="mailto:youremail@example.com"><IoMdMail className="contactIcons" /></a>
              <a href="https://wa.me/8559818396"><IoLogoWhatsapp className="contactIcons" /></a>
              <a href="https://github.com/sarjeet221"><FaGithub className="contactIcons" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
