import * as React from "react";
import "./../sass/component/_weoffer.scss";
import idea from "./../assets/foco.svg";
import juntos from "./../assets/manos.svg";
import crecimiento from "./../assets/estadistica.svg";
import CardComponent from "./shared/cards";
import bgImage from "./../assets/franja.svg";

export default function WeOffer() {
    return (
        <React.Fragment>
            <div className={"weofferComponent"}>
                <div className="container">
                    <hr className="outline" />
                    <div className={"title"}>
                        <h2>Nuestra Oferta</h2>
                        <h3>Lorem ipsum tus mejores ideas</h3>
                    </div>
                    <div className={"cards"}>
                        <CardComponent
                            image={juntos}
                            titleCard="Trabajemos Juntos"
                            detail="Lorem ipsum tus mejores ideas"
                        />
                        <CardComponent
                            image={idea}
                            titleCard="Tus ideas en produ"
                            detail="Lorem ipsum tus mejores ideas"
                        />
                        <CardComponent
                            image={crecimiento}
                            titleCard="Acompañamos tu"
                            detail="Lorem ipsum tus mejores ideas"
                        />
                    </div>
                </div>
                <img src={bgImage} className="franjaBg" alt="" />

            </div>
        </React.Fragment>
    );
}
