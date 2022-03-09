import * as React from "react";
import "./../sass/component/_hero.scss";
import fbIlus from "./../assets/fb.svg";
import linkedinIlus from "./../assets/linkedin.svg";
import igIlus from "./../assets/instagram.svg";
import ilusHero from "./../assets/ilus-hero.svg";
import ButtonComponent from "./shared/button";

export default function Hero() {
  return (
    <React.Fragment>
      <div className={"heroComponent"}>
        <div className="contentHero">
          <h1>Creamos Productos Digitales</h1>
          <p>
            Hacemos <b>realidad</b> tus mejores ideas
          </p>

          <div className="cta-socials">
            <ButtonComponent label="Conversemos" />
            <div>
              <img src={fbIlus} alt="" />
              <img src={linkedinIlus} alt="" />
              <img src={igIlus} alt="" />
            </div>
          </div>
        </div>
        <img src={ilusHero} className="ilusHero" alt="" />
      </div>
    </React.Fragment>
  );
}
