import React, { useState } from "react";
import Modal from "react-modal";
import ModalVideo from "react-modal-video";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReactTooltip from "react-tooltip";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Project from "./Project";
import Social from "./Social";

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Check out my work</span>
                <h3>Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Videos</Tab>
                <Tab>Key projects</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/inverse.jpg"
                            alt="Youtube"
                            data-tip
                            data-for="youtube"
                            onClick={() => setOpen(true)}
                          />
                          <ReactTooltip
                            id="youtube"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Watch me teach!</h5>
                              <span>Become an inversing-2x2-matrices pro in 2 min.</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/cogo-1.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail"
                            onClick={toggleModalThree}
                          />
                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Conference GO</h5>
                              <span>Conference-management solution featuring Django, React, domain-driven design, microservices, and data interactions with RESTful APIs.</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/hot-4b.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalFour}
                          />
                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Hot Stocks</h5>
                              <span>Social-media-app-inspired stock portfolio and news management solution featuring FastAPI, React Redux, PostgreSQL, and RESTful APIs.</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/task-3.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail3"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Tasker</h5>
                              <span>Cross-company task-management solution featuring Django and a templated front end.</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/auto-2.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail4"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail4"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>AutoAuto</h5>
                              <span>Automobile-dealership-management solution featuring Django, React, domain-driven design, microservices, and RESTful APIs.</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL PORTFOLIO GALLERY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/inverse.jpg"
                            alt="Youtube"
                            data-tip
                            data-for="youtube"
                            onClick={() => setOpen(true)}
                          />
                          <ReactTooltip
                            id="youtube"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Watch me teach!</h5>
                              <span>Become an inversing-2x2-matrices pro in 2 min.</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                  </ul>
                  {/* END YOUTUBE LIST */}
                </TabPanel>
                {/* END YOUTUBE VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/cogo-6.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail"
                            onClick={toggleModalThree}
                          />

                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Selena Gomez</h5>
                              <span>Key projects</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/hot-2.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Hot Stocks</h5>
                              <span>Cloud-Based Web Application</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END CREATIVE PORTFOLIO GALLERY */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="OND-pHKP_Og"
        onClose={() => setOpen(false)}
      />

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/cogo-2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Conference GO</h3>
                <span>Web Application</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Conference-management solution designed for planning and running conferences. Supports presentation, location, and attendee creation and management.
                  </p>
                  <p>
                    Features Django, React, domain-driven design, microservices, and data interactions with RESTful APIs.
                  </p>
                  <p>
                    For companies who intend to have a hub for all things conferences and utilize a sophisticated solution for managing presentations, locations, and attendees.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Role</span>
                      <span>Lead Developer</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2022</span>
                    </li>
                    <li>
                      <span className="first">Source code</span>
                      <Project name={`kariscourey/conference-go`} />
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/cogo-6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/cogo-4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/cogo-5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/cogo-3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/hot-4b.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Hot Stocks</h3>
                <span>Cloud-Based Web Application</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Developed with{' '}
                    <a href="https://www.linkedin.com/in/micheline-doughlin-ba101678/">Micheline Doughlin</a>,{' '}
                    <a href="https://www.linkedin.com/in/bensjostrom/">Ben Sjostrom</a>, and{' '}
                    <a href="https://www.linkedin.com/in/york-shaw/">York Shaw</a>.
                  </p>
                  <p>
                    Modern, social-media-app-inspired stock portfolio solution designed for evaluating live stock and related news data, managing a portfolio, and saving data of interest.
                  </p>
                  <p>
                    Features FastAPI, React Redux, PostgreSQL, and data interactions with RESTful APIs.
                  </p>
                  <p>
                    <a href="https://igneous-rocks.gitlab.io/hot-stocks/">Front end</a> deployed with GitLab Pages.{' '}
                    <a href="https://hot-stocks.onrender.com">Back end</a> deployed with Render.
                  </p>
                  <p>
                    For young individuals who are interested in investing in stocks and growing their portfolio.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Role</span>
                      <span>Project Manager<br />Lead Developer</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2022</span>
                    </li>
                    <li>
                      <span className="first">Source code</span>
                      <Project name={`igneous-rocks/hot-stocks`} />
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-7.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-8.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-9.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hot-10.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
