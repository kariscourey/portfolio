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
          <p className="credit">
            Photos courtesy of <a href="https://lightroom.adobe.com/u/nathanmangost" target="_blank" rel="noreferrer">Nathan Mangosteen</a>.
          </p>
        </div>
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
                    <span>LinkedIn:</span><a href="https://linkedin.com/in/kariscourey" target="_blank" rel="noreferrer">Karis Courey</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:kariscourey@gmail.com">kariscourey@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Grad:</span><a href="https://www.cc.gatech.edu/degree-programs/master-science-computer-science" target="_blank" rel="noreferrer">M.S., Comp. Sci., candidate</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Bootcamp:</span><a href="https://www.galvanize.com/hack-reactor/beginner/full-time-bootcamp/" target="_blank" rel="noreferrer">Hack Reactor's Immersive</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Undergrad:</span><a href="https://drive.google.com/file/d/1mw_wpcI1iS7NAmOrqpj8U4oh3HBZZfNA/view?usp=sharing" target="_blank" rel="noreferrer">B.S., Chem. Engineering</a>
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

                    <div className="progress_inner" data-value="90">
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


                    <div className="progress_inner" data-value="80">
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


                    <div className="progress_inner" data-value="65">
                      <span>
                        <span className="label">C</span>
                        <span className="number">65%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 65 + "%" }}
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
                    <div className="progress_inner" data-value="60">
                      <span>
                        <span className="label">C++</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 60 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="tokyo_progress">
                      <div className="progress_inner" data-value="80">
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

                      <div className="progress_inner" data-value="70">
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


                      <div className="progress_inner" data-value="95">
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


                      <div className="progress_inner" data-value="40">
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



                      <div className="progress_inner" data-value="40">
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
                    {/* END TOKYO PROGRESS */}
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
                        <h3>90+</h3>
                        <span>Projects completed</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>2K+</h3>
                        <span>Hours coding</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>12K+</h3>
                        <span>Hours engineering</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>6</h3>
                        <span>Certifications</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>13</h3>
                        <span>Honors and awards</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>2</h3>
                        <span>Publications</span>
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
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
