import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/2.jpg" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Karis Courey</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hey, there! I am a software engineer with a passion for developing and optimizing solutions
                with positive, lasting impact by leveraging algorithmic optimization and designing beautiful code.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:kariscourey@gmail.com">kariscourey@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Georgia Tech
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Preferred languages</h3>
                  </div>
                  {/* END ABOUT TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Python</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">JavaScript</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>


                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">SQL</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>


                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">C</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 40 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                  <p>
                    Percentage represents proficiency.
                  </p>

                  </div>
                  {/* END PROGRESS */}



                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Other languages</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">HTML</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">CSS</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 70 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>


                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">VBA</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>


                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">C#</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 40 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>



                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">CAML</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 40 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>



                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">VB</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>86+</h3>
                      <span>Projects completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>1.5K+</h3>
                      <span>Hours coding</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>12K+</h3>
                      <span>Hours engineering</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Tools</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
