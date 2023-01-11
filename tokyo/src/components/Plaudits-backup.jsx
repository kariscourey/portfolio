import React, { useState } from "react";
import Modal from "react-modal";
import Recommendations from "./Recommendations";


Modal.setAppElement("#root");

const recommendations = [
  {
    link: 'https://www.linkedin.com/in/joe-monaghan-201b5713b/',
    name: 'Joe Monaghan',
    date: 'Dec 21, 2022',
    title: 'Always willing to go the extra mile and help team members in need',
    desc: 'Karis is bright, adaptive and communicates effectively. I had the pleasure of working with Karis and was quick to find out that she is a highly skilled developer and collaborative teammate. She is always willing to go the extra mile and help team members in need. I highly recommend Karis for any software development role available.'
  },
  {
    link: 'https://www.linkedin.com/in/marvinlee323/',
    name: 'Marvin Lee',
    date: 'Dec 20, 2022',
    title: 'Great addition to any team looking for a hard-working and skilled individual',
    desc: 'Karis stood out as one of the most knowledgeable individuals during my time with her at Hack Reactor. She demonstrated exceptional critical thinking skills, and was always eager to lend a helping hand whenever someone had a question. She would be a great addition to any team looking for a hard-working and skilled individual to join them.'
  }
]


const Plaudit = (props) => {
  const link = props.recommendation.link;
  const name = props.recommendation.name;
  const date = props.recommendation.date;
  const title = props.recommendation.title;
  const desc = props.recommendation.desc;

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="list_inner">
      <div className="details">
        <div className="extra">
          <p className="date">
            By <a href={link}>{name}</a>
            <span>{date}</span>
          </p>
        </div>
        {/* END EXTRA */}

        <h3 className="title" onClick={toggleModal}>
          {title}
        </h3>
        <div className="tokyo_tm_read_more">
          <a onClick={toggleModal}>
            <span>Read More</span>
          </a>
        </div>
        {/* END READ MORE BUTTON */}
      </div>
      {/* END DETAILS */}

      {/* START MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href={link}>{name} </a>
                    <span>{date}</span>
                  </p>
                </div>
                <h3 className="title">
                  {title}
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
                      {desc}
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
  )
}

const Plaudits = () => {
  return (
    <>
      <ul>
        {recommendations.map((recommendation, i) => (
          <li key={i} data-aos="fade-right" data-aos-duration="1200">
            <Plaudit recommendation={recommendation} />
          </li>
        ))}
      </ul>
    </>
  );
}

const Plaudits = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  // const [isOpen4, setIsOpen4] = useState(false);
  // const [isOpen5, setIsOpen5] = useState(false);
  // const [isOpen6, setIsOpen6] = useState(false);
  // const [isOpen7, setIsOpen7] = useState(false);
  // const [isOpen8, setIsOpen8] = useState(false);
  // const [isOpen9, setIsOpen9] = useState(false);
  // const [isOpen10, setIsOpen10] = useState(false);
  // const [isOpen11, setIsOpen11] = useState(false);
  // const [isOpen12, setIsOpen12] = useState(false);
  // const [isOpen13, setIsOpen13] = useState(false);
  // const [isOpen14, setIsOpen14] = useState(false);
  // const [isOpen15, setIsOpen15] = useState(false);
  // const [isOpen16, setIsOpen16] = useState(false);
  // const [isOpen17, setIsOpen17] = useState(false);
  // const [isOpen18, setIsOpen18] = useState(false);
  // const [isOpen19, setIsOpen19] = useState(false);
  // const [isOpen20, setIsOpen20] = useState(false);
  // const [isOpen21, setIsOpen21] = useState(false);
  // const [isOpen22, setIsOpen22] = useState(false);
  // const [isOpen23, setIsOpen23] = useState(false);
  // const [isOpen24, setIsOpen24] = useState(false);
  // const [isOpen25, setIsOpen25] = useState(false);
  // const [isOpen26, setIsOpen26] = useState(false);
  // const [isOpen27, setIsOpen27] = useState(false);
  // const [isOpen28, setIsOpen28] = useState(false);


  function toggleModal() {
    setIsOpen(!isOpen);
  }
  // function toggleModalOne() {
  //   setIsOpen(!isOpen);
  // }
  // function toggleModalTwo() {
  //   setIsOpen2(!isOpen2);
  // }
  // function toggleModalThree() {
  //   setIsOpen3(!isOpen3);
  // }
  // function toggleModalFour() {
  //   setIsOpen4(!isOpen4);
  // }
  // function toggleModalFive() {
  //   setIsOpen5(!isOpen5);
  // }
  // function toggleModalSix() {
  //   setIsOpen6(!isOpen6);
  // }
  // function toggleModalSeven() {
  //   setIsOpen7(!isOpen7);
  // }
  // function toggleModalEight() {
  //   setIsOpen8(!isOpen8);
  // }
  // function toggleModalNine() {
  //   setIsOpen9(!isOpen9);
  // }
  // function toggleModalTen() {
  //   setIsOpen10(!isOpen10);
  // }
  // function toggleModalEleven() {
  //   setIsOpen11(!isOpen11);
  // }
  // function toggleModalTwelve() {
  //   setIsOpen12(!isOpen12);
  // }
  // function toggleModalThirteen() {
  //   setIsOpen13(!isOpen13);
  // }
  // function toggleModalFourteen() {
  //   setIsOpen14(!isOpen14);
  // }
  // function toggleModalFifteen() {
  //   setIsOpen15(!isOpen15);
  // }
  // function toggleModalSixteen() {
  //   setIsOpen16(!isOpen16);
  // }
  // function toggleModalSeventeen() {
  //   setIsOpen17(!isOpen17);
  // }
  // function toggleModalEighteen() {
  //   setIsOpen18(!isOpen18);
  // }
  // function toggleModalNineteen() {
  //   setIsOpen19(!isOpen19);
  // }
  // function toggleModalTwenty() {
  //   setIsOpen20(!isOpen20);
  // }
  // function toggleModalTwentyOne() {
  //   setIsOpen21(!isOpen21);
  // }
  // function toggleModalTwentyTwo() {
  //   setIsOpen22(!isOpen22);
  // }
  // function toggleModalTwentyThree() {
  //   setIsOpen23(!isOpen23);
  // }
  // function toggleModalTwentyFour() {
  //   setIsOpen24(!isOpen24);
  // }
  // function toggleModalTwentyFive() {
  //   setIsOpen25(!isOpen25);
  // }
  // function toggleModalTwentySix() {
  //   setIsOpen26(!isOpen26);
  // }
  // function toggleModalTwentySeven() {
  //   setIsOpen27(!isOpen27);
  // }
  // function toggleModalTwentyEight() {
  //   setIsOpen28(!isOpen28);
  // }

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

                <h3 className="title" onClick={toggleModalTwo}>
                  Great addition to any team looking for a hard-working and skilled individual
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
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

                <h3 className="title" onClick={toggleModalThree}>
                  A knack for quickly picking up topics
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
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

                <h3 className="title" onClick={toggleModalFour}>
                  Outstanding time management and group management skills
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
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

                <h3 className="title" onClick={toggleModalFive}>
                  Ability to handle multiple projects was nothing like I have seen before
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFive}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFive}>
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

                <h3 className="title" onClick={toggleModalSix}>
                  Committed to the success of the team and its established mission and vision
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalSix}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSix}>
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

                <h3 className="title" onClick={toggleModalSeven}>
                  Strong understanding of software development principles
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalSeven}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSeven}>
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

                <h3 className="title" onClick={toggleModalEight}>
                  Friendly, kind, and determined person who is a pleasure to work with
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalEight}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalEight}>
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

                <h3 className="title" onClick={toggleModalNine}>
                  Always able to articulate her thought process in a way that was easy for others to understand
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalNine}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalNine}>
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

                <h3 className="title" onClick={toggleModalTen}>
                  Demonstrates her ability to find creative solutions to complex challenges
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen10}
                onRequestClose={toggleModalTen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTen}>
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

                <h3 className="title" onClick={toggleModalEleven}>
                  Top-notch technical professional
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalEleven}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen11}
                onRequestClose={toggleModalEleven}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalEleven}>
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

                <h3 className="title" onClick={toggleModalTwelve}>
                  Proactive and if it comes to someone needing assistance, she is there
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwelve}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen12}
                onRequestClose={toggleModalTwelve}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwelve}>
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

                <h3 className="title" onClick={toggleModalThirteen}>
                  With her help I was able to solve the challenge related to my project
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThirteen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen13}
                onRequestClose={toggleModalThirteen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThirteen}>
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

                <h3 className="title" onClick={toggleModalFourteen}>
                  A proactive, result oriented, and technically sound individual
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFourteen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen14}
                onRequestClose={toggleModalFourteen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFourteen}>
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

                <h3 className="title" onClick={toggleModalFifteen}>
                  Sent anyone who wanted one in our cohort a friendship bracelet, which she hand made
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFifteen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen16}
                onRequestClose={toggleModalSixteen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSixteen}>
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

                <h3 className="title" onClick={toggleModalSeventeen}>
                  Always met a problem with an engineering mind and pursued continued growth on a concept far beyond what I would consider adequate
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalSeventeen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen17}
                onRequestClose={toggleModalSeventeen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSeventeen}>
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

                <h3 className="title" onClick={toggleModalEighteen}>
                  A great attitude and is always seeking to learn more
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalEighteen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen18}
                onRequestClose={toggleModalEighteen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalEighteen}>
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


          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="https://www.linkedin.com/in/thedavidleung/">David Leung</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalNineteen}>
                  Exceptional ability to understand complex technical concepts and is able to translate them into effective solutions
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalNineteen}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen19}
                onRequestClose={toggleModalNineteen}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalNineteen}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/thedavidleung/">David Leung </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Exceptional ability to understand complex technical concepts and is able to translate them into effective solutions
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
                              Karis has a broad skill set and a wealth of knowledge in a range of technologies, including but not limited to Python, JavaScript, React.js, Redux, and PostgreSQL.
                            </p>
                            <p>
                              She has a talent for critical thinking and finding solutions to complex problems, making her a valuable asset to any project. She has an exceptional ability to understand complex technical concepts and is able to translate them into effective solutions in a way that is both efficient and elegant. Her problem-solving skills are exceptional, and she is able to efficiently troubleshoot and debug code under tight deadlines.
                            </p>
                            <p>
                              In addition to her technical abilities, Karis is a team player and a joy to work with. She is always willing to collaborate and contribute to group projects, and her positive attitude is infectious.
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
                    By <a href="https://www.linkedin.com/in/matt-sabo/">Matthew Sabo</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwenty}>
                  Eager to learn and took on extra challenges whenever they were offered
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwenty}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen20}
                onRequestClose={toggleModalTwenty}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwenty}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/matt-sabo/">Matthew Sabo </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Eager to learn and took on extra challenges whenever they were offered
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
                              I had the pleasure of working with Karis during her time at our software engineer bootcamp. From the start, it was clear that Karis was an exceptional student - she consistently demonstrated a strong aptitude for problem-solving and a natural curiosity about technology.
                            </p>
                            <p>
                              Throughout the course, Karis consistently impressed me with her ability to quickly grasp new concepts and apply them to her work. She was always eager to learn and took on extra challenges whenever they were offered. Her work was consistently of a high quality and she was able to complete tasks efficiently and effectively.
                            </p>
                            <p>
                              In addition to her technical skills, Karis also has excellent communication and collaboration skills. She was a valuable contributor to group projects and was always willing to lend a helping hand to her fellow students. She was a pleasure to work with and was well-respected by her peers.
                            </p>
                            <p>
                              I have no doubt that Karis has the skills and drive necessary to succeed as a software engineer. She would be a valuable asset to any team and I highly recommend her for any software engineering positions.
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
                    By <a href="https://www.linkedin.com/in/jeffjiang13/">Jeff Jiang</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentyOne}>
                  Positive attitude and work ethic make her a pleasure to work with
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentyOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen21}
                onRequestClose={toggleModalTwentyOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentyOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/jeffjiang13/">Jeff Jiang </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Positive attitude and work ethic make her a pleasure to work with
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
                              Karis is a talented software engineer who is dedicated to her craft. She is always willing to learn new technologies and techniques and is consistently seeking out ways to improve her skills. In addition to being a skilled coder, Karis is also a great problem-solver, able to think logically and quickly to solve complex technical challenges. She is a valuable member of any team, and her positive attitude and work ethic make her a pleasure to work with.
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
                    By <a href="https://www.linkedin.com/in/roman-jonathan/">Jonathan Roman</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentyTwo}>
                  Able to explain these complex concepts in a public presentation setting to both technical and non-technical audiences
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentyTwo}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen22}
                onRequestClose={toggleModalTwentyTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentyTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/roman-jonathan/">Jonathan Roman </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Able to explain these complex concepts in a public presentation setting to both technical and non-technical audiences
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
                              During our software engineering program, Karis demonstrated consistent dedication and ability to learn new technical skills while applying them to projects. In addition to her strong technical abilities, she is able to explain these complex concepts in a public presentation setting to both technical and non-technical audiences. With these qualities, I believe any team would be lucky to have Karis joining them.
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
                    By <a href="https://www.linkedin.com/in/eli-gilead/">Elijah Gilead</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentyThree}>
                  A great team player and is able to work effectively with others
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentyThree}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen23}
                onRequestClose={toggleModalTwentyThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentyThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/eli-gilead/">Elijah Gilead </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          A great team player and is able to work effectively with others
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
                              Karis has a strong foundation in computer science principles and is skilled in multiple programming languages, including Python 3 and JavaScript. She is a diligent and proactive learner, always seeking out opportunities to improve her skills and broaden her knowledge base.
                            </p>
                            <p>
                              In addition to her technical expertise, Karis is a great team player and is able to work effectively with others. She is able to take direction well and is always willing to lend a helping hand to her colleagues.
                            </p>
                            <p>
                              I highly recommend Karis for any software development opportunity. I believe she will be an asset to any team and will excel in any role she takes on.
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
                    By <a href="https://www.linkedin.com/in/rahmanm2016/">Muhammad Rahman</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentyFour}>
                  Very fluent on the full-stack
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentyFour}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen24}
                onRequestClose={toggleModalTwentyFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentyFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/rahmanm2016/">Muhammad Rahman </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Very fluent on the full-stack
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
                              Studying with Karis at Hack Reactor was phenomenal. Her knowledge of algorithms and data structures exceeds what you would expect of most software engineering students. She is very fluent on the full-stack, not only excelling in complex queries with Django/FastAPI, but also delivering solid UI with React.js with Redux and Material UI.
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
                    By <a href="https://www.linkedin.com/in/connorhgillespie/">Connor Gillespie</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentyFive}>
                  Someone who will elevate your team/company
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentyFive}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen25}
                onRequestClose={toggleModalTwentyFive}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentyFive}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/connorhgillespie/">Connor Gillespie </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Someone who will elevate your team/company
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
                              I have had countless experiences interacting with Karis during my time studying with her at Hack Reactor. I can tell you that no matter what, no matter what we were doing or talking about, every single one of those interactions I came away with an immensely positive mindset while also being subsequently impressed with how impressive of an individual Karis is. She works harder, smarter, and with more dedication than almost anyone else I have ever met. If you need someone who will elevate your team/company, it honestly doesn't matter what you need elevated because Karis WILL take care of it to a level that will exceed what you expect. She is worth the investment, just do it.
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
                    By <a href="https://www.linkedin.com/in/margaret-ketchum/">Margaret Ketchum</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentySix}>
                  Humble, open-minded, and always willing to lend a helping hand
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentySix}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen26}
                onRequestClose={toggleModalTwentySix}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentySix}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/margaret-ketchum/">Margaret Ketchum </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Humble, open-minded, and always willing to lend a helping hand
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
                              I have had the privilege of studying with Karis and have been consistently impressed by her technical skills and her ability to consistently deliver high quality work. Karis is an asset to any team due to her strong work ethic and dedication to continuous learning.
                            </p>
                            <p>
                              In addition to her technical abilities, Karis is also an exceptional team player. She is humble, open-minded, and always willing to lend a helping hand. Karis is also an incredibly kind and supportive person, and I have no doubt that she will always be there to support her colleagues to the end.
                            </p>
                            <p>
                              As a student, I have found Karis to be an invaluable resource and mentor. She is a true professional and a pleasure to work with. I highly recommend Karis for any opportunity and believe that she will be a valuable asset to any team.
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
                    By <a href="https://www.linkedin.com/in/theresavilla/">Theresa Villa</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentySeven}>
                  Consistently delivering high-quality results and exceeding expectations
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentySeven}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen27}
                onRequestClose={toggleModalTwentySeven}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentySeven}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/theresavilla/">Theresa Villa </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Consistently delivering high-quality results and exceeding expectations
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
                              I am pleased to recommend Karis as a talented software engineer. In the time that I have worked with her, I have consistently been impressed by her intelligence, communication skills, and strong work ethic. Karis consistently goes above and beyond in her work, consistently delivering high-quality results and exceeding expectations. She is a pleasure to work with and her positive attitude and strong teamwork skills make her a valuable asset to any team. Her technical skills and dedication to her work makes her an excellent candidate and I have no doubt she will excel in any position she pursues.
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
                    By <a href="https://www.linkedin.com/in/rkhan786/">Ray Khan</a>
                    <span>Dec 16, 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwentyEight}>
                  Natural problem solver and approaches challenges with logical thinking
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwentyEight}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen28}
                onRequestClose={toggleModalTwentyEight}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwentyEight}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="https://www.linkedin.com/in/rkhan786/">Ray Khan </a>
                            <span>Dec 16, 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Natural problem solver and approaches challenges with logical thinking
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
                              Karis truly demonstrated her technical expertise and ability to learn quickly as we navigated through a software engineering bootcamp together. In addition to her resilient work ethic, she is a natural problem solver and approaches challenges with logical thinking. I have no hesitation in recommending Karis for any software engineering company/group/organization.
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
