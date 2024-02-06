// components/Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__builder">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="148"
          className="elementor elementor-148"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-2292e97 elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
            data-id="2292e97"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1b638f0"
                data-id="1b638f0"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-2cc9b55 elementor-widget elementor-widget-ti-social-links"
                    data-id="2cc9b55"
                    data-element_type="widget"
                    data-widget_type="ti-social-links.default"
                  >
                    <div className="elementor-widget-container"></div>
                  </div>
                </div>
              </div>

              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1c9b303"
                data-id="1c9b303"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-c385779 elementor-widget elementor-widget-ti-copyright"
                    data-id="c385779"
                    data-element_type="widget"
                    data-widget_type="ti-copyright.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className="copyright-text scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <div>
                          <p>
                            {currentYear} <strong>&copy;</strong> Todos os
                            direitos reservados
                          </p>
                        </div>
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
  );
};

export default Footer;
