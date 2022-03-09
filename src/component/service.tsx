import * as React from "react";
import "../sass/component/_service.scss";
import ilusService from "./../assets/ilus-service.svg";
import oneImg from "./../assets/1.svg";
import twoImg from "./../assets/2.svg";
import threeImg from "./../assets/3.svg";
import fourImg from "./../assets/4.svg";


export default function Service() {
    return (
        <React.Fragment>
            <div className="serviceComponent">
                <div className="container">
                    <img src={ilusService} alt="" />

                    <section>
                        <div className="title">
                            <h2>Nuestros Servicios</h2>
                            <h3>Lorem ipsum tus mejores ideas</h3>
                        </div>
                        <aside>
                            <article>
                                <img src={oneImg} alt="" />
                                <p>Lorem ipsum tus
                                    mejores ideas</p>
                            </article>
                            <article>
                                <img src={twoImg} alt="" />
                                <p>Lorem ipsum tus
                                    mejores ideas</p>
                            </article>
                            <article>
                                <img src={threeImg} alt="" />
                                <p>Lorem ipsum tus
                                    mejores ideas</p>
                            </article>
                            <article>
                                <img src={fourImg} alt="" />
                                <p>Lorem ipsum tus
                                    mejores ideas</p>
                            </article>
                        </aside>
                    </section>


                </div>
            </div>

        </React.Fragment >
    );
}
