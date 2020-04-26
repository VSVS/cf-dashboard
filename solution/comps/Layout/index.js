import React from "react";
import AppBar from "../AppBar";
import { ThemeWrapper } from "../../utils/theme";

const layoutStyle = {
  margin: "63px 0 0 0",
  height: "100vh",
  padding: "0px 40px 40px 40px",
  border: "1px solid #DDD",
};

const Layout = (props) => (
  <ThemeWrapper>
    <AppBar />
    <div style={layoutStyle}>{props.children}</div>
  </ThemeWrapper>
);

export default Layout;
