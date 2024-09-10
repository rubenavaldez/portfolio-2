import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ruben Valdez </span>
            from <span className="purple"> Tucson, AZ.</span>
            <br />
            I am full stack engineer looking for a new opportunity.
            <br />
            I have 4+ years experience building web appllications. 
            <br/>
            Coding certifications from University of Arizona and Harvard University
            <br/>
            And an Associate in Science (AS), Emphasis in Astronomy
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditiation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Not only do we live among the stars, the stars live within us.""
            {" "}
          </p>
          <footer className="blockquote-footer">Neil deGrasse Tyson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
