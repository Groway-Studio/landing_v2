import * as React from "react";
import "../sass/component/_awards.scss";
import Franja2Img from "./../assets/franja2.svg";
import premio1 from "./../assets/logo1.svg";
import premio2 from "./../assets/logo2.svg";
import award from "./../assets/reconocimientos.svg";

export default function Awards() {
  return (
    <React.Fragment>
      <div className="awardsComponent">
        <img className="franja2Bg" src={Franja2Img} alt="" />
        <section className="container">
          <aside className="asideAward">
            <img src={award} alt="" />
            <h3>Premios y Reconocimientos</h3>
          </aside>
          <aside>
          <img src={premio1} alt="" />
          </aside>
          <aside>
          <img src={premio2} alt="" />
          </aside>
        </section>
        <img className="franja2BgTablet" src={Franja2Img} alt="" />

      </div>
    </React.Fragment>
  );
}
