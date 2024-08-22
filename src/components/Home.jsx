import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/gg.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(1, 3, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(1, 15, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animation = {
    h1: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  // const handleDownload = () => {
  //   // Assuming your resume file is in the public folder
  //   const resumePath = "../assets/Lalit_Resume.pdf"; // Replace this with your actual resume path

  //   // Create an anchor element
  //   const link = document.createElement("a");
  //   link.href = resumePath;

  //   // Set the download attribute and file name
  //   link.download = "Lalit_Resume.pdf"; // Replace with your desired file name

  //   // Programmatically trigger a click event to download the file
  //   document.body.appendChild(link);
  //   link.click();

  //   // Clean up
  //   document.body.removeChild(link);
  // };

  const resumePath =
    "https://drive.google.com/file/d/151EZ0QpSm3WLBFLCX3GtHWYBnSjGmGUv/view?usp=sharing"; // Replace this with your actual resume path

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br /> Lalit Soren
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "A FullStack Developer",
                "A Data Engineer",
                "A Freelancer",
                "A MERN-Stack Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              download="lalit_resume.pdf"
            >
              Hire Me
            </a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 5 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                {ratio < 5 && (
                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={projectCount}
                  ></motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>lalitsoren58@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Lalit" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
