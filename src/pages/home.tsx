import * as React from 'react';
import Header from '../component/shared/header';
import Hero from '../component/hero';
import WeOffer from '../component/weoffer';
import Service from '../component/service';
import Awards from '../component/awards';
import Alliance from '../component/alliance';
import Cta from '../component/cta';
import Footer from '../component/shared/footer';


export default function Home() {
  return <React.Fragment>
    <Header />
    <Hero />
    <WeOffer />
    <Service />
    <Awards />
    <Alliance />
    <Cta />
    {/* <Footer /> */}
  </React.Fragment>;
}
