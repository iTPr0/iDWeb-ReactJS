// index.js
import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import favicon from "./components/images/favicon.ico";
import pat1 from "./components/images/pat-1.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const scrollToPageSection = () => {
  document
    .getElementById("projetos-section")
    .scrollIntoView({ behavior: "smooth" });
};

const handleTelegramClick = (event) => {
  event.preventDefault();
  window.location = "https://t.me/tifodao";
};

const handleInstagramClick = (event) => {
  event.preventDefault();
  window.location = "https://instagram.com/tifodao";
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/projetos"
          element={
            <div className="container-page">
              <Preloader />
              <header className="header">
                <div className="header__builder">
                  <div
                    data-elementor-type="wp-post"
                    data-elementor-id="91"
                    className="elementor elementor-91"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-852e3c9 elementor-section-content-middle elementor-section-full_width elementor-section-height-default"
                      data-id="852e3c9"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ab1238c"
                          data-id="ab1238c"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-6b2395b elementor-widget elementor-widget-image"
                              data-id="6b2395b"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <a
                                  href="projetos-section"
                                  onClick={scrollToPageSection}
                                >
                                  <img
                                    decoding="async"
                                    width="100"
                                    height="38"
                                    src={favicon}
                                    className="attachment-full size-full wp-image-1170"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c253e3"
                          data-id="2c253e3"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-c48ea9c elementor-widget elementor-widget-ti-header-menu"
                              data-id="c48ea9c"
                              data-element_type="widget"
                              data-widget_type="ti-header-menu.default"
                            >
                              <div className="elementor-widget-container">
                                <a href="#" className="switcher-btn">
                                  <span className="sw-before">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="23"
                                      height="23"
                                      viewBox="0 0 23 23"
                                    >
                                      <path
                                        id="Dark_Theme"
                                        data-name="Dark Theme"
                                        fill="#000"
                                        d="M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z"
                                        transform="translate(-1737 -98)"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span className="sw-after">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="22.22"
                                      height="22.313"
                                      viewBox="0 0 22.22 22.313"
                                    >
                                      <path
                                        id="Light_Theme"
                                        data-name="Light Theme"
                                        fill="#fff"
                                        d="M1752.49,105.511a5.589,5.589,0,0,0-3.94-1.655,5.466,5.466,0,0,0-3.94,1.655,5.61,5.61,0,0,0,3.94,9.566,5.473,5.473,0,0,0,3.94-1.653,5.643,5.643,0,0,0,1.65-3.957A5.516,5.516,0,0,0,1752.49,105.511Zm-1.06,6.85a4.1,4.1,0,0,1-5.76,0,4.164,4.164,0,0,1,0-5.788A4.083,4.083,0,0,1,1751.43,112.361Zm7.47-3.662h-2.27a0.768,0.768,0,0,0,0,1.536h2.27A0.768,0.768,0,0,0,1758.9,108.7Zm-10.35,8.12a0.777,0.777,0,0,0-.76.769v2.274a0.777,0.777,0,0,0,.76.767,0.786,0.786,0,0,0,.77-0.767v-2.274A0.786,0.786,0,0,0,1748.55,116.819Zm7.85-.531-1.62-1.624a0.745,0.745,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.625a0.747,0.747,0,0,0,1.06,0A0.759,0.759,0,0,0,1756.4,116.288ZM1748.55,98.3a0.777,0.777,0,0,0-.76.768v2.273a0.778,0.778,0,0,0,.76.768,0.787,0.787,0,0,0,.77-0.768V99.073A0.786,0.786,0,0,0,1748.55,98.3Zm7.88,3.278a0.744,0.744,0,0,0-1.06,0l-1.62,1.624a0.758,0.758,0,0,0,0,1.063,0.745,0.745,0,0,0,1.06,0l1.62-1.624A0.758,0.758,0,0,0,1756.43,101.583Zm-15.96,7.116h-2.26a0.78,0.78,0,0,0-.77.768,0.76,0.76,0,0,0,.77.768h2.26A0.768,0.768,0,0,0,1740.47,108.7Zm2.88,5.965a0.745,0.745,0,0,0-1.06,0l-1.62,1.624a0.759,0.759,0,0,0,0,1.064,0.747,0.747,0,0,0,1.06,0l1.62-1.625A0.758,0.758,0,0,0,1743.35,114.664Zm0-11.457-1.62-1.624a0.744,0.744,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.624a0.745,0.745,0,0,0,1.06,0A0.758,0.758,0,0,0,1743.35,103.207Z"
                                        transform="translate(-1737.44 -98.313)"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                                <a href="#" className="menu-btn">
                                  <span></span>
                                  <span></span>
                                </a>
                                <div className="menu-full-overlay">
                                  <div className="menu-full-container">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                          <div className="menu-full">
                                            <ul
                                              id="menu-main-menu"
                                              className="menu-full"
                                            >
                                              <li
                                                id="menu-item-606"
                                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item "
                                              >
                                                <a
                                                  className="splitting-text-anim-2"
                                                  data-splitting="chars"
                                                  onClick={scrollToPageSection}
                                                >
                                                  Início
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="menu-social-links">
                                            <a
                                              href={"Telegram"}
                                              className="scrolla-element-anim-1 Telegram"
                                              title="Telegram"
                                              onClick={handleTelegramClick}
                                            >
                                              <i className="fab fa-telegram"></i>
                                            </a>
                                            <a
                                              href={"Instagram"}
                                              className="scrolla-element-anim-1 Instagram"
                                              title="Instagram"
                                              onClick={handleInstagramClick}
                                            >
                                              <i className="fab fa-instagram"></i>
                                            </a>
                                          </div>
                                          <div className="v-line-block">
                                            <span
                                              style={{
                                                backgroundImage: `url(${pat1})`,
                                              }}
                                            ></span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="menu-overlay"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </header>
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
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
