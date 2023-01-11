import React, { useState } from "react";
import Modal from "react-modal";
import ModalVideo from "react-modal-video";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReactTooltip from "react-tooltip";
import SimpleReactLightbox from "simple-react-lightbox";
import Project from "./Project";

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false); // cogo
  const [isOpen4, setIsOpen4] = useState(false); // hot
  const [isOpen5, setIsOpen5] = useState(false); // task
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
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
                <br />
                <p>For an exhaustive list of my projects, check out my{' '}
                  <a href="https://github.com/kariscourey">GitHub</a> and{' '}
                  <a href="https://gitlab.com/kariscourey">GitLab</a>.
                </p>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Key projects</Tab>
                <Tab>Videos</Tab>
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
                            src="assets/img/portfolio/task-7.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalFive}
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
                            onClick={toggleModalSix}
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
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL PORTFOLIO GALLERY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100">
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
                            src="assets/img/portfolio/task-7.jpg"
                            alt="Key projects"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalFive}
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
                            onClick={toggleModalSix}
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
                  {/* END DETAILS GALLERY */}
                </TabPanel>

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
                <span>Microservices Web Application</span>
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


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
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
                    backgroundImage: "url(assets/img/portfolio/task-7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Tasker</h3>
                <span>Web Application</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Task-management solution designed for cross-company utilization. Supports task and project creation and management.
                  </p>
                  <p>
                    Features Django and a templated front end.
                  </p>
                  <p>
                    For individuals and companies who desire to better organize projects and tasks associated with projects.
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
                      <Project name={`kariscourey/tasker`} />
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
                            backgroundImage: "url(assets/img/portfolio/task-1.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/task-2.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/task-3.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/task-4.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/task-5.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/task-6.jpg)",
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
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
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
                    backgroundImage: "url(assets/img/portfolio/auto-2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>AutoAuto</h3>
                <span>Microservices Web Application</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Developed with <a href="https://www.linkedin.com/in/angel-sierra-/">Angel Sierra</a>.
                  </p>
                  <p>
                    Automobile-dealership-management solution designed for managing automobile inventory, sales, services, employees, and customers. Supports automobile, sale, service, employee, and customer creation and management.
                  </p>
                  <p>
                    Features Django, React, domain-driven design, microservices, and data interactions with RESTful APIs.
                  </p>
                  <p>
                    For automobile dealerships who intend to utilize a sophisticated solution for managing inventory, sales, services, empoloyees, and customers.
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
                      <Project name={`kariscourey/autoauto`} />
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
                            backgroundImage: "url(assets/img/portfolio/auto-3.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-4.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-5.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-6.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-7.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-8.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-9.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-10.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-11.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-12.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-13.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-14.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-15.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-16.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-17.jpg)",
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
                            backgroundImage: "url(assets/img/portfolio/auto-18.jpg)",
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
