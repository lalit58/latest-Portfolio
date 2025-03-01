import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lalit Kumar Soren </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            <p>
              I am currently employed as a software developer at{" "}
              <a
                style={{ color: "purple" }}
                href="https://www.itservicesindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                It Services India Inc
              </a>
              .
            </p>
            <br />
            <p>
              I have completed a Master of Computer Applications (MCA) at Odisha
              University of Research and Technology (OUTR), Bhubaneswar,
              formerly known as CET, Bhubaneswar.
            </p>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Stock marketing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Looking forward to exploring the experience of art (Development), A
            Way to perseverance as an artist!"{" "}
          </p>
          <footer className="blockquote-footer">Lalit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
