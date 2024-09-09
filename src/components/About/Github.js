import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" >
        Days I <strong className="purple">Code</strong>
      </h1>
      <h6 style={{ paddingBottom: "20px" }}>
        Currently moving from a private GitLab back to GitHub. 
      </h6>
      <GitHubCalendar
        username="rubenavaldez"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
