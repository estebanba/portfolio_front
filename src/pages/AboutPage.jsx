import React from "react";

const AboutPage = () => {
  return (
    <div id="about">
      <h2>About me</h2>
      <div className="hScroll">
        <div className="scrollCard"></div>
        <div className="scrollCard">
          <p>
            In my first 3 years of professional practice I have worked side by
            side with a group of highly creative architects and designers,
            jointly conceiving and developing during this period more than 10
            projects of great interest due to their design value.
          </p>
          <p>
            The focus was on social impact and sustainability through the
            exploration, for example, of daring proposals of space articulation,
            experimentation with modular systems and the use of new technologies
            together with alternative materials.
          </p>
        </div>
        <div className="scrollCard">
          <p>
            From this friendship and partnership I value having formed a
            well-rounded profile as a designer and entrepreneur, but above all
            having developed an independent and critical mindset.
          </p>
          <p>
            More recently, the last 3 years have been a practice of a completely
            different kind, in which I have had the opportunity to work on
            various projects for the colossus of e-commerce, the construction of
            logistics centers of up to 100,000 m2, in which the focus was on
            fulfilling high client standards and strict German regulations.
          </p>
        </div>
        <div className="scrollCard">
          <p>
            As BIM lead and responsible for the digital processes and data
            integrity of the project, I deepened my techie side while promoting
            the digital transformation of the company and my colleagues in
            general.
          </p>
          <p>
            Currently open to new challenges, with the same values as always.
            Feel free to take a look around and don`t hesitate to contact any
            time at me@estebanbasili.com Cheers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
