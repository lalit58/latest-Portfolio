import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import imgh from "../assets/logo-removebg.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={imgh} alt="Creater" />
        <h2>Lalit Soren</h2>
        <p>
          Looking forward to exploring the experience of art (Development), A
          Way to perseverance as an artist 😀
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/lalit58" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lalitkumarsoren/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/lalit.jpeg/" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
