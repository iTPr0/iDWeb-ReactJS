// components/Portfolio.js
import React from "react";
import windows from "./images/portfolio/windows.jpg";
import linux from "./images/portfolio/linux.jpg";
import cursos from "./images/portfolio/codersfuckers.jpg";
import pat1 from "./images/pat-1.png";

const Portfolio = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-46a4d25 elementor-section-full_width lui-gradient-center elementor-section-height-default"
      data-id="9448ad8"
      data-element_type="section"
      id="portfolio-section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-50be8b3"
          data-id="50be8b3"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-66c2427 elementor-section-boxed elementor-section-height-default"
              data-id="66c2427"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bc97f39"
                  data-id="bc97f39"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-d096b81 elementor-widget elementor-widget-ti-section-heading"
                      data-id="d096b81"
                      data-element_type="widget"
                      data-widget_type="ti-section-heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="m-titles">
                          <h2
                            className="m-title splitting-text-anim-1 scroll-animate"
                            data-splitting="words"
                            data-animate="active"
                          >
                            <span>Portfolio</span>
                          </h2>
                          <div
                            className="m-subtitle splitting-text-anim-1 scroll-animate"
                            data-splitting="words"
                            data-animate="active"
                          >
                            <span>
                              <b>Links</b>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-8894d20 v-line v-line-right elementor-section-boxed elementor-section-height-default"
              data-id="8894d20"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3695cd3"
                  data-id="3695cd3"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-2aacff2 elementor-widget elementor-widget-ti-portfolio-module"
                      data-id="2aacff2"
                      data-element_type="widget"
                      data-widget_type="ti-portfolio-module.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="works-box">
                          <div className="works-items works-masonry-items row">
                            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding ">
                              <div
                                className="works-item scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                              >
                                <div className="image">
                                  <a href="https://shre.ink/rM9o">
                                    <div className="img">
                                      <noscript>
                                        <img
                                          decoding="async"
                                          src={windows}
                                          alt="Windows"
                                        />
                                      </noscript>
                                      <img
                                        className="lazyload"
                                        decoding="async"
                                        src={windows}
                                        data-src={windows}
                                        alt="Windows"
                                      />
                                      <span className="overlay"></span>
                                    </div>
                                  </a>
                                </div>
                                <div className="desc">
                                  <span className="category">Download</span>
                                  <h5 className="name">Windows</h5>
                                  <div className="text">
                                    <p>
                                      Todas as versões é um termo utilizado para
                                      descrever imagens ISO que incluem diversas
                                      versões do sistema operacional Windows.
                                    </p>
                                  </div>
                                  <a href="https://shre.ink/rM9o">
                                    <span className="lnk">Site</span>
                                  </a>
                                </div>
                                <div
                                  className="lazyload bg-img"
                                  data-bg={pat1}
                                  style={{
                                    backgroundImage:
                                      "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E)",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding ">
                              <div
                                className="works-item scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                              >
                                <a href="https://shre.ink/rM9S">
                                  <div className="image">
                                    <div className="img">
                                      <noscript>
                                        <img
                                          decoding="async"
                                          src={linux}
                                          alt="Linux"
                                        />
                                      </noscript>
                                      <img
                                        className="lazyload"
                                        decoding="async"
                                        src={linux}
                                        data-src={linux}
                                        alt="Linux"
                                      />
                                      <span className="overlay"></span>
                                    </div>
                                  </div>
                                </a>
                                <div className="desc">
                                  <span className="category">Download</span>
                                  <h5 className="name">Linux</h5>
                                  <div className="text">
                                    <p>
                                      Lista de download das principais
                                      distribuições GNU/Linux do mercado:
                                      Ubuntu, Debian, Slackware, Fedora, Gentoo,
                                      OpenSUSE e outras.
                                    </p>
                                  </div>
                                  <a href="https://shre.ink/rM9S" className="">
                                    <span className="lnk">Site</span>
                                  </a>
                                </div>
                                <div
                                  className="lazyload bg-img"
                                  data-bg={pat1}
                                  style={{
                                    backgroundImage:
                                      "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E)",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding ">
                              <div
                                className="works-item scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                              >
                                <a href="https://shre.ink/rM9f">
                                  <div className="image">
                                    <div className="img">
                                      <noscript>
                                        <img
                                          decoding="async"
                                          src={cursos}
                                          alt="Coders Fuckers"
                                        />
                                      </noscript>
                                      <img
                                        className="lazyload"
                                        decoding="async"
                                        src={cursos}
                                        data-src={cursos}
                                        alt="Coders Fuckers"
                                      />
                                      <span className="overlay"></span>
                                    </div>
                                  </div>
                                </a>
                                <div className="desc">
                                  <span className="category">
                                    Lista de cursos
                                  </span>
                                  <h5 className="name">Coders Brasil</h5>
                                  <div className="text">
                                    <p>
                                      Links para matérias e conteúdos
                                      interessantes.
                                    </p>
                                  </div>
                                  <a href="https://shre.ink/rM9f" className="">
                                    <span className="lnk">Ver cursos</span>
                                  </a>
                                </div>
                                <div
                                  className="lazyload bg-img"
                                  data-bg={pat1}
                                  style={{
                                    backgroundImage:
                                      "url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-9c95224 elementor-widget elementor-widget-ti-bgtitle"
                      data-id="9c95224"
                      data-element_type="widget"
                      data-widget_type="ti-bgtitle.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="lui-bgtitle">
                          <span>Portfolio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
