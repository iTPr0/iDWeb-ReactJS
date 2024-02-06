// App.js
import React from "react";
import Menu from "./components/Header/Menu";
import Preloader from "./components/Preloader";
import Profissional from "./components/Profissional";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";
import Depoimentos from "./components/Depoimentos";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container-page">
      <Preloader />
      <Menu />
      <div className="wrapper">
        <div
          id="post-115"
          className="post-115 page type-page status-publish hentry"
        >
          <div
            data-elementor-type="wp-page"
            data-elementor-id="115"
            className="elementor elementor-115"
          >
            <Profissional />
            <Servicos />
            <Portfolio />
            <Depoimentos />
            <Projetos />
            <Contato />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
