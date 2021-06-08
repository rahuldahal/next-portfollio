import Button from "@components/Common/Button/Button";
import Link from "@components/Common/Link/Link";
import React from "react";

export default function Header() {
  return (
    <main className="aboutHeader">
      <div className="contentsWrap">
        <div className="aboutHeader__hook">
          <h4>What does good User Experience Design mean ?</h4>
          <h5>Let me set a scenario here,</h5>
          <p>
            You hired a developer to create a website/app for your new business.
          </p>
          <p>
            The developer promises to provide a modern layout, "cool" animations
            and overall a decent User Interface.
          </p>
          <p>
            After development, the app looks neat, cool and ready for
            production.
          </p>
          <p>
            You would then think that's the end of the process. You asked for an
            app, and you got an app.
          </p>
          <h5>But, listen!</h5>
          <p>
            Building an application is not just about creating cool layouts and
            animations. Coming up with the solution to the problems that an user
            might face throughout the usage of an application is one of the
            crucial part in the development cycle.
          </p>

          <p>
            Research about the end users; their
            <mark>taste, </mark>
            <mark>age group, </mark>
            <mark>gender, </mark>
            <mark>familiarity with the technology, </mark>
            <mark> preferred language, </mark>
            <mark>culture, </mark> etc. must be conducted before starting the
            actual development of an app.
          </p>

          <p>
            Even while developing, the
            <mark>Usability</mark>
            <mark>Accessibility</mark>
            <mark>Functionality,</mark>
            <span> as well as</span>
            <mark>Credibility</mark>
            should be tested, from the perspective of an end user.
          </p>

          <h6>And that is exactly what I do.</h6>
        </div>

        <div className="aboutHeader__details">
          <picture width="60vw" height="60vw">
            <source srcSet="images/thatsme.webp" type="image/webp" />
            <source srcSet="images/thatsme.jpg" type="image/jpeg" />
            <img
              src="images/thatsme.jpg"
              alt="Rahul Dahal Smiling to the camera"
              width="60vw"
              height="60vw"
            />
          </picture>
          <Link
            textContent="Contact"
            to="#contact"
            fill="filled"
            className="aboutHeader__contact"
          />
          <Button
            textContent="Watch Video"
            fill="outline"
            modifier="aboutHeader__video"
          />
        </div>
      </div>
    </main>
  );
}
