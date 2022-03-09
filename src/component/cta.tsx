import * as React from "react";
import "../sass/component/_cta.scss";
import ButtonComponent from "./shared/button";

export default function Cta() {
  return (
    <React.Fragment>
      <div className="ctaComponent">
        <section className="container">
          <aside className="title">
            <h2>LOREM IPSUM</h2>
            <p>Lorem dolor sit amet, consectetus mejores ideas</p>
          </aside>
          <aside>
            <ButtonComponent label="Conversemos" />
          </aside>
        </section>
      </div>
    </React.Fragment>
  );
}
