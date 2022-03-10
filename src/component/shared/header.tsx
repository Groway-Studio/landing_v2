import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import LogoGroway from "./../../assets/logo-groway.png"
import "./../../sass/shared/_header.scss";
import headerBg from "./../../assets/blob-header.svg"

export default function Header() {
  return (
    <React.Fragment>
      <img src={headerBg} className="headerBg" alt="" />
      <Box className="navMenu" sx={{display: "flex", justifyContent:"space-between", alignItems: "center" }}>
        <img src={LogoGroway} alt="logo"/>
        <Box className={"navMenuItems"} sx={{display:"flex", flexDirection:"row"}}>
            <Typography>Nuestra Oferta</Typography>
            <Typography>Nuestros Servicios</Typography>
            <Typography>Sobre Nosotros</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

