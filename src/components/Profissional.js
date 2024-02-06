// components/Profissional.js
import React from "react";
import part1 from "./images/pat-1.png";

const scrollToWorksSection = () => {
  document
    .getElementById("works-section")
    .scrollIntoView({ behavior: "smooth" });
};

const Profissional = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5928fe4 elementor-section-height-min-height elementor-section-content-middle lui-gradient-center elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
      data-id="5928fe4"
      data-element_type="section"
      id="started-section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f7cb440"
          data-id="f7cb440"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-e6ecb78 v-line v-line-left elementor-widget elementor-widget-ti-hero-image"
              data-id="e6ecb78"
              data-element_type="widget"
              data-widget_type="ti-hero-image.default"
            >
              <div className="elementor-widget-container">
                <div className="section hero-started">
                  <div
                    className="content scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    {/* Início títulos */}
                    <div className="titles">
                      <div className="lui-subtitle">
                        <span>
                          Olá, <b>meu nome é</b>
                        </span>
                      </div>
                      <h1
                        className="title splitting-text-anim-1 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        <span>
                          <b>Diego</b> Melo
                        </span>
                      </h1>
                      <div className="label lui-subtitle">
                        <strong>
                          <h3 className="cd-headline clip is-full-width">
                            <span className="cd-words-wrapper">
                              <b className="is-visible">Geek</b>
                              <b className="is-hidden">Analista de sistemas</b>
                              <b className="is-hidden">
                                Engenheiro de software
                              </b>
                              <b className="is-hidden">
                                Técnico em informática
                              </b>
                            </span>
                          </h3>
                        </strong>
                      </div>
                    </div>
                    <div className="description">
                      <div>
                        <p>
                          Sou surdo, sou um desenvolvedor full-stack e hacker
                          ético do Brasil com mais de uma década de experiência,
                          especializado em desenvolvimento Web e Windows/Linux
                          Desktop. Tenho experiência trabalhando como
                          desenvolvedor individual e, às vezes, como cooperador
                          de equipe em muitos projetos, proporcionando-me as
                          habilidades de comunicação com os clientes para
                          satisfazer suas necessidades.
                        </p>
                        <p>
                          <i>
                            <br />
                            Por curiosidade, trabalhei com diversas ferramentas
                            para diferentes plataformas e sempre buscando
                            aprender novas tecnologias.
                          </i>
                        </p>
                        <p>
                          <i>
                            <br />
                            “Eu não tenho talentos especiais. Estou apenas
                            apaixonadamente curioso.” ~ Albert Einstein
                          </i>
                        </p>
                      </div>
                      <div className="social-links">
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="Telegram"
                          className="Telegram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                          </svg>
                        </a>
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="Instagram"
                          className="Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="bts">
                      <a className="btn" onClick={scrollToWorksSection}>
                        <span>Projetos</span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="slide scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <noscript>
                      <img decoding="async" src="#" alt="<b>Diego</b> Melo" />
                    </noscript>
                    <img
                      className="lazyload"
                      decoding="async"
                      src="https://github.com/iTPr0/iTPr0/assets/66981750/024a8743-7d8e-4559-b92f-d77c8c4ee271"
                      alt="<b>Diego</b> Melo"
                    />
                    <span className="circle circle-1"></span>
                    <span
                      className="lazyload circle img-1"
                      data-bg={part1}
                      style={{
                        backgroundImage:
                          "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E)",
                      }}
                    ></span>
                    <span
                      className="lazyload circle img-2"
                      data-bg={part1}
                      style={{
                        backgroundImage:
                          "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E)",
                      }}
                    ></span>
                    <span
                      className="lazyload circle img-3"
                      data-bg={part1}
                      style={{
                        backgroundImage:
                          "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E)",
                      }}
                    ></span>
                    <div className="info-list">
                      <ul>
                        <li>
                          <span className="num">
                            14 <strong>+</strong>
                          </span>
                          <span className="value">
                            Anos de <strong>experiência</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-1d7818b elementor-absolute elementor-widget elementor-widget-ti-bgtitle"
              data-id="1d7818b"
              data-element_type="widget"
              data-settings="{_position:' absolute'}"
              data-widget_type="ti-bgtitle.default"
            >
              <div className="elementor-widget-container">
                <div className="lui-bgtitle">
                  <span>Técnico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profissional;
