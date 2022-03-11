import * as React from "react";
import "../sass/component/_alliance.scss";
import imgIlus3 from "./../assets/allianceIlus.svg";
import alliance1 from "./../assets/alliance1.svg";
import alliance2 from "./../assets/alliance2.svg";
import alliance3 from "./../assets/alliance3.svg";

export default function Alliance() {
  return (
    <React.Fragment>
      <div className="allianceComponent">
        <section className="container">
          <aside>
            <article className="title">
              <h2>Alianzas Estratégicas</h2>
              <p>Lorem ipsum tus mejores ideas</p>
            </article>
            <hr />
            <article className="alliances">
              <img src={alliance1} alt="" />
              <img src={alliance2} alt="" />
              <img src={alliance3} alt="" />
            </article>
            <hr />
          </aside>
          <aside>
            <img src={imgIlus3} alt="" className="imgIlus" />
          </aside>
        </section>
      </div>
    </React.Fragment>
  );
}
