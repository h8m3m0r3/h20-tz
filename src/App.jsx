import React, { useMemo, useState } from "react";
import "./App.scss";
import { AsideNavbar, Header,MainContent } from "./components/index.js";

function App() {

  return (
    <div className="layout">
      <AsideNavbar />
      <Header />
      <MainContent/>
    </div>
  );
}

export default App;
