import React, { useState } from "react";
import Modal from "react-modal";
import Recommendations from "./Recommendations";

// TODO add recs from linkedin

Modal.setAppElement("#root");

const Plaudits = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Read some words</span>
              <h3>Latest plaudits</h3>
              <br />
              <p>A word I didn't know on an 8th-grade vocab test. Who knew I'd use it one day?{' '}
                Brush up on your skills{' '}
                <a href="https://www.vocabtest.com/middle_school/8th_grade.php">here</a>.</p>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/joe-monaghan-201b5713b/">Joe Monaghan</a>
                    <span>Dec 21, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Always willing to go the extra mile and help team members in need
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/joe-monaghan-201b5713b/">Joe Monaghan </a>
                            <span>Dec 21, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Always willing to go the extra mile and help team members in need
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis is bright, adaptive and communicates effectively.
                              I had the pleasure of working with Karis and was quick
                              to find out that she is a highly skilled developer
                              and collaborative teammate. She is always willing to go
                              the extra mile and help team members in need. I highly
                              recommend Karis for any software development role available.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/marvinlee323/">Marvin Lee</a>
                    <span>Dec 20, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Great addition to any team looking for a hard-working and skilled individual
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/marvinlee323/">Joe Monaghan </a>
                            <span>Dec 20, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Great addition to any team looking for a hard-working and skilled individual
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis stood out as one of the most knowledgeable individuals
                              during my time with her at Hack Reactor. She demonstrated
                              exceptional critical thinking skills, and was always eager to
                              lend a helping hand whenever someone had a question. She would
                              be a great addition to any team looking for a hard-working and
                              skilled individual to join them.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/eugenehong2/">Eugene Hong</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  A knack for quickly picking up topics
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/eugenehong2/">Eugene Hong </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          A knack for quickly picking up topics
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis is a very intelligent software engineer that
                              has a knack for quickly picking up topics. During my
                              time working with her, Karis has shown great coding
                              ability in addition to great team work skills that made
                              her a pleasure to work with. While I have not worked with
                              Karis directly on any coding projects, I can attest to
                              her intelligence and can say that she will be an asset
                              to any team she joins in the future.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/york-shaw/">York Shaw</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Outstanding time management and group management skills
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/york-shaw/">York Shaw </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Outstanding time management and group management skills
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              I had the great pleasure of working with Karis on a project,
                              and it was truly a privilege to be her teammate. Karis is
                              so inspiring to work with. She consistently went above and
                              beyond with her work, and demonstrated outstanding time
                              management and group management skills. I admired her ability
                              to solve any problem no matter the difficulty, and I learned
                              so much from her by observing the way she calmly used logic
                              to overcome any hurdle. Karis is also such a creative
                              individual, and any project she works on will reflect her
                              wonderful outside-the-box thinking.
                            </p>
                            <p>
                              Karis's enthusiasm for software development is infectious,
                              and it truly made working on the project a wonderful time
                              every day. She is so selfless in helping others, and always
                              took the time to help me understand anything I had questions
                              about. I was lucky to get to spend time working with Karis,
                              and I can confidently say any place she works at will be extremely
                              fortunate to have her. Karis's collaborative and software
                              development skills will undoubtedly help grow any business
                              she is a part of.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}



          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/leonardo-galvan/">Leo Galvan</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Ability to handle multiple projects was nothing like I have seen before
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/leonardo-galvan/">Leo Galvan </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Ability to handle multiple projects was nothing like I have seen before
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              It is rare you come across standout talent like Karis!
                              I worked with Karis during my time in Hack Reactor’s
                              Software Engineering Immersive program. Her ability to
                              handle multiple projects was nothing like I have seen
                              before and made a difference in the class production level.
                              As a team member or a leader, Karis earns my highest recommendation.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}



          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/ovidiu-buta/">Ovidiu Buta</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Committed to the success of the team and its established mission and vision
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/ovidiu-buta/">Ovidiu Buta </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Committed to the success of the team and its established mission and vision
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              I am writing to highly recommend Karis
                              for any software engineering position.
                              I have had the pleasure of working with
                              Karis on a number of projects, and have
                              consistently been impressed with her critical
                              thinking and problem solving skills. She has
                              a strong ability to identify logical and sophisticated
                              solutions, and is always eager to explore the unknown
                              in order to improve her understanding of difficult problems.
                            </p>
                            <p>
                              In addition to her technical skills, Karis is a dedicated
                              team member who is committed to the success of the team
                              and its established mission and vision. She is not afraid
                              to take on challenges, and has a great ability to boost
                              morale with a well-timed pun or two.
                            </p>
                            <p>
                              In summary, Karis is a highly skilled software engineer
                              with a strong work ethic and a positive attitude. I have
                              no doubt that she would be an asset to any team and I
                              recommend her wholeheartedly.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}



          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/tylerjoyce001/">Tyler Joyce</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Strong understanding of software development principles
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/tylerjoyce001/">Tyler Joyce </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Strong understanding of software development principles
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              I am writing to recommend Karis for any future software engineering projects or opportunities. I had the pleasure of working with Karis on a project in our software engineering class, and was consistently impressed by her dedication, hard work, and skill.
                            </p>
                            <p>
                              Karis consistently demonstrated a strong understanding of software development principles and was able to effectively apply them in our project. She was able to take on tasks and responsibilities with confidence, and consistently delivered high-quality work on time.
                            </p>
                            <p>
                              In addition to her technical skills, Karis also displayed excellent communication and collaboration skills. She was always willing to listen to others' ideas and provide constructive feedback, and was able to work effectively in a team environment.
                            </p>
                            <p>
                              Overall, I highly recommend Karis for any software engineering project or opportunity. I have no doubt that she will continue to excel and make valuable contributions to any team she joins.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}



          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/rosario-davi/">Rosario Davi</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Friendly, kind, and determined person who is a pleasure to work with
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/rosario-davi/">Rosario Davi </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Friendly, kind, and determined person who is a pleasure to work with
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              I had the pleasure of studying with Karis, and I was consistently impressed by her intelligence and ability to find solutions to even the most challenging problems. Whenever I was struggling with a problem, I knew I could count on Karis to provide helpful insights and guidance.
                            </p>
                            <p>
                              In addition to her technical skills, Karis is a friendly, kind, and determined person who is a pleasure to work with. I believe any company would be lucky to have her on their team and I highly recommend her for any opportunity. Karis is an asset to any team and would be a valuable addition to any company.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}



          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/-matt-carr-/">Matt Carr</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Always able to articulate her thought process in a way that was easy for others to understand
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/-matt-carr-/">Matt Carr </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Always able to articulate her thought process in a way that was easy for others to understand
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              It was a pleasure to work with Karis during our time together at Hack Reactor's Software Engineering Immersive. One of the things that stood out to me about Karis was her ability to clearly & concisely communicate her problem solving process. Whether she was working on a group project or tackling a particularly challenging concept, Karis was always able to articulate her thought process in a way that was easy for others to understand. In addition to her excellent communication skills, Karis also impressed me with her ability to grasp complicated concepts quickly. She was always eager to learn and was not afraid to ask questions when she needed clarification.
                            </p>
                            <p>
                              Beyond being a brilliant software engineer, Karis consistently demonstrates a positive attitude, even in the face of difficult challenges. She was always willing to lend a helping hand to her fellow students and was a pleasure to work with. I highly recommend Karis for any opportunity and am confident that she will excel in any environment.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}




          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/cristovalramirez/">Cristoval Ramirez</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Demonstrates her ability to find creative solutions to complex challenges
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/cristovalramirez/">Cristoval Ramirez </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Demonstrates her ability to find creative solutions to complex challenges
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              I highly recommend Karis as a software engineer. She is an extremely talented individual with a strong understanding of software engineering concepts. Highly skilled in critical thinking and problem-solving, and she consistently demonstrates her ability to find creative solutions to complex challenges. She is also very easy to get along with and is willing to learn and adapt to new situations. Karis is a team player who is never stressed out about any aspect of her work, which makes her a pleasure to work with. In my experience studying with Karis, she has consistently demonstrated her ability to produce high-quality work and I have no doubt that she will be a valuable asset to any team she joins.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/andrew-n-collins/">Andrew Collins</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Top-notch technical professional
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/andrew-n-collins/">Andrew Collins </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Top-notch technical professional
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis Courey is an exceptional student with a natural aptitude for technology and a strong work ethic. She consistently demonstrated her knowledge and understanding of the subject matter, and her attention to detail was impeccable. I highly recommend her as a top-notch technical professional.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/janete-hays/">Janete Hays</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Proactive and if it comes to someone needing assistance, she is there
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/janete-hays/">Janete Hays </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Proactive and if it comes to someone needing assistance, she is there
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Working with and getting to know Karis was amazing, She is incredibly talented and get's along amazingly with people. She is proactive and if it comes to someone needing assistance, she is there. She always has a positive attitude and an energy that I never understood how she got! Making her a wonderful candidate for any team oriented company!
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/patrickjamescerutti/">Patrick Cerutti</a>
                    <span>Dec 19, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  With her help I was able to solve the challenge related to my project
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/patrickjamescerutti/">Patrick Cerutti </a>
                            <span>Dec 19, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          With her help I was able to solve the challenge related to my project
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis was someone I personally sought out to help me solve a problem on a project we were completing while in a Software Engineering bootcamp. My initial thoughts of Karis were, how impressed I was of her knowledge when solving coding challenges and her ability to think outside the box when solving those problems. She was a great team player and with her help I was able to solve the challenge related to my project. She would be a great addition to any Software Engineering team.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/katelyngmartin/">Katelyn Martin</a>
                    <span>Dec 17, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  A proactive, result oriented, and technically sound individual
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/katelyngmartin/">Katelyn Martin </a>
                            <span>Dec 17, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          A proactive, result oriented, and technically sound individual
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis is a proactive, result oriented, and technically sound individual who is always ready to put in her time and energy to deliver quality solutions. She has displayed strong technical knowledge of software engineering concepts with commitment to continuous learning. She has been an excellent resource for me and our fellow classmates. She would be a valuable asset to any team.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/waylenroche/">Waylen Roche</a>
                    <span>Dec 17, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Sent anyone who wanted one in our cohort a friendship bracelet, which she hand made
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/waylenroche/">Waylen Roche </a>
                            <span>Dec 17, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Sent anyone who wanted one in our cohort a friendship bracelet, which she hand made
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis sent anyone who wanted one in our cohort a friendship bracelet, which she hand made. I mean. Is there anything else to say? Yes there is. Karis is a brilliant, dedicated problem solver who demonstrated time and again a persistence and commitment to excellence. She inspired me and many of our cohort mates to bring our all to each endeavor. She and I would often compare approaches to problem sets, or share insights from coding along to lectures. Karis is a joy to work with and study along, and will make a powerful asset to any team she joins.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/shelenells/">Shelen Ells</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Always met a problem with an engineering mind and pursued continued growth on a concept far beyond what I would consider adequate
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/shelenells/">Shelen Ells </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Always met a problem with an engineering mind and pursued continued growth on a concept far beyond what I would consider adequate
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis is an incredibly brilliant person who made a significant impression on me immediately.
                            </p>
                            <p>
                              Karis always met a problem with an engineering mind and pursued continued growth on a concept far beyond what I would consider adequate. Karis is an exceptional person that will do incredible things and I’m grateful I got to know her in the time I did.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}



          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/jonas-pf/">Jonas Petit-frere</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  A great attitude and is always seeking to learn more
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/jonas-pf/">Jonas Petit-frere </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          A great attitude and is always seeking to learn more
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Karis is a talented developer who was always available to help. The knowledge she shared with me has helped me become a better problem-solver and developer. She has a great attitude and is always seeking to learn more. My time with Karis during our Software immersive has shown me that she is on her way to being a wealth of knowledge for years to come. I would love another opportunity to work with her again.
                            </p>
                            <p>
                              I believe she will be an asset to any team and will excel in any role she takes on. I highly recommend Karis for any software development opportunity.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <div className="news_share">
                            <span>View:</span>
                            <Recommendations />
                            {/* END RECOMMENDATIONS */}
                          </div>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

        </ul>
      </div>
    </>
  );
};

export default Plaudits;
