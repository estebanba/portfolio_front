import React from "react";
import cvDownload from "../assets/files/CV_2022_EstebanBasili_EN.pdf";

const HireMePage = () => {
  return (
    <div id="hireme" className="page">
      <h2>LET'S WORK TOGETHER</h2>
      <div className="sectionContent">
        <div className="contentBox">
          <p>
            I am passionate about projects that involve designing and building
            meaningful things and enjoy working with enthusiastic people who
            want to make everyday a better day through creative solutions.
          </p>
          <p>I can help your team with:</p>
          <h3>Web Development.</h3>
          <h4>Fullstack Development.</h4>
          <p>
            Pragmatic approach to an MVP. Building pps using modern
            technologies.
          </p>
          <h4>Frontend Development.</h4>
          <p>
            Taking care of the details that make a design possible,
            User-friendly and Accessible. Interaction and User Interfaces.
            Understanding of browser rendering. Single-page applications. Mobile
            first approach. Technologies: HTML, CSS, Javascript, React.
          </p>
          <h4>Backend Development.</h4>
          <p>
            Server-side applications. Plan, build and deliver a Server that's
            fast, secure and reliable. Putting together an application or API
            with Node.js, MongoDB, Mongoose and Express.
          </p>

          <h3>Architectural Design and Building Information Modeling.</h3>

          <h4>BIM Management and Strategy.</h4>
          <p>
            Understand the client's needs and build a knowledge base on this
            understanding. Design methods to address the clients's needs and
            requirements. Bussiness and execution plans. Establish project
            environment. Digital Transformation.
          </p>
          <h4>BIM Execution and Coordination.</h4>
          <p>
            Definition of Standards. Roles. Workflows. Support (management,
            communication and team coordination).
          </p>
          <h4>BIM Development.</h4>
          <p>
            Product development, hacks, systems. Integration between existing
            software solutions and processes. Overcoming bottlenecks and
            software limitations by developing specific solutions.
          </p>
          <h3>Let's build something together.</h3>
          <p>
            If you are looking for help building something where sustainability
            and social impact are important, I would love to hear from you.
          </p>
          <p>
            Send me an{" "}
            <a style={{ color: "inherit" }} href="mailto:me@estebanbasili.com">
              email
            </a>
          </p>
          {/* <h2>There is no here</h2> */}
          <p>
            <a href={cvDownload} download="EstebanBasili_CV_2022">
              Download CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;
