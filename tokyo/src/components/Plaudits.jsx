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
    desc: [
      'Karis is bright, adaptive and communicates effectively. I had the pleasure of working with Karis and was quick to find out that she is a highly skilled developer and collaborative teammate. She is always willing to go the extra mile and help team members in need. I highly recommend Karis for any software development role available.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/marvinlee323/',
    name: 'Marvin Lee',
    date: 'Dec 20, 2022',
    title: 'Great addition to any team looking for a hard-working and skilled individual',
    desc: [
      'Karis stood out as one of the most knowledgeable individuals during my time with her at Hack Reactor. She demonstrated exceptional critical thinking skills, and was always eager to lend a helping hand whenever someone had a question. She would be a great addition to any team looking for a hard-working and skilled individual to join them.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/eugenehong2/',
    name: 'Eugene Hong',
    date: 'Dec 19, 2022',
    title: 'A knack for quickly picking up topics',
    desc: [
      'Karis is a very intelligent software engineer that has a knack for quickly picking up topics. During my time working with her, Karis has shown great coding ability in addition to great team work skills that made her a pleasure to work with. While I have not worked with Karis directly on any coding projects, I can attest to her intelligence and can say that she will be an asset to any team she joins in the future.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/york-shaw/',
    name: 'York Shaw',
    date: 'Dec 19, 2022',
    title: 'Outstanding time management and group management skills',
    desc: [
      'I had the great pleasure of working with Karis on a project, and it was truly a privilege to be her teammate. Karis is so inspiring to work with. She consistently went above and beyond with her work, and demonstrated outstanding time management and group management skills. I admired her ability to solve any problem no matter the difficulty, and I learned so much from her by observing the way she calmly used logic to overcome any hurdle. Karis is also such a creative individual, and any project she works on will reflect her wonderful outside-the-box thinking.',
      "Karis's enthusiasm for software development is infectious, and it truly made working on the project a wonderful time every day. She is so selfless in helping others, and always took the time to help me understand anything I had questions about. I was lucky to get to spend time working with Karis, and I can confidently say any place she works at will be extremely fortunate to have her. Karis's collaborative and software development skills will undoubtedly help grow any business she is a part of."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/leonardo-galvan/',
    name: 'Leo Galvan',
    date: 'Dec 19, 2022',
    title: 'Ability to handle multiple projects was nothing like I have seen before',
    desc: [
      'It is rare you come across standout talent like Karis! I worked with Karis during my time in Hack Reactor’s Software Engineering Immersive program. Her ability to handle multiple projects was nothing like I have seen before and made a difference in the class production level. As a team member or a leader, Karis earns my highest recommendation.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/ovidiu-buta/',
    name: 'Ovidiu Buta',
    date: 'Dec 19, 2022',
    title: 'Committed to the success of the team and its established mission and vision',
    desc: [
      'I am writing to highly recommend Karis for any software engineering position. I have had the pleasure of working with Karis on a number of projects, and have consistently been impressed with her critical thinking and problem solving skills. She has a strong ability to identify logical and sophisticated solutions, and is always eager to explore the unknown in order to improve her understanding of difficult problems.',
      'In addition to her technical skills, Karis is a dedicated team member who is committed to the success of the team and its established mission and vision. She is not afraid to take on challenges, and has a great ability to boost morale with a well-timed pun or two.',
      'In summary, Karis is a highly skilled software engineer with a strong work ethic and a positive attitude. I have no doubt that she would be an asset to any team and I recommend her wholeheartedly.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/tylerjoyce001/',
    name: 'Tyler Joyce',
    date: 'Dec 19, 2022',
    title: 'Strong understanding of software development principles',
    desc: [
      'I am writing to recommend Karis for any future software engineering projects or opportunities. I had the pleasure of working with Karis on a project in our software engineering class, and was consistently impressed by her dedication, hard work, and skill.',
      'Karis consistently demonstrated a strong understanding of software development principles and was able to effectively apply them in our project. She was able to take on tasks and responsibilities with confidence, and consistently delivered high-quality work on time.',
      "In addition to her technical skills, Karis also displayed excellent communication and collaboration skills. She was always willing to listen to others' ideas and provide constructive feedback, and was able to work effectively in a team environment.",
      'Overall, I highly recommend Karis for any software engineering project or opportunity. I have no doubt that she will continue to excel and make valuable contributions to any team she joins.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/rosario-davi/',
    name: 'Rosario Davi',
    date: 'Dec 19, 2022',
    title: 'Friendly, kind, and determined person who is a pleasure to work with',
    desc: [
      'I had the pleasure of studying with Karis, and I was consistently impressed by her intelligence and ability to find solutions to even the most challenging problems. Whenever I was struggling with a problem, I knew I could count on Karis to provide helpful insights and guidance.',
      'In addition to her technical skills, Karis is a friendly, kind, and determined person who is a pleasure to work with. I believe any company would be lucky to have her on their team and I highly recommend her for any opportunity. Karis is an asset to any team and would be a valuable addition to any company.'
    ]
  },
  {
    link: 'https://www.linkedin.com/in/matt-carr-/',
    name: 'Matt Carr',
    date: 'Dec 19, 2022',
    title: 'Able to articulate her thought process',
    desc: [
      "It was a pleasure to work with Karis during our time together at Hack Reactor's Software Engineering Immersive. One of the things that stood out to me about Karis was her ability to clearly & concisely communicate her problem solving process. Whether she was working on a group project or tackling a particularly challenging concept, Karis was always able to articulate her thought process in a way that was easy for others to understand. In addition to her excellent communication skills, Karis also impressed me with her ability to grasp complicated concepts quickly. She was always eager to learn and was not afraid to ask questions when she needed clarification.",
      "Beyond being a brilliant software engineer, Karis consistently demonstrates a positive attitude, even in the face of difficult challenges. She was always willing to lend a helping hand to her fellow students and was a pleasure to work with. I highly recommend Karis for any opportunity and am confident that she will excel in any environment."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/cristovalramirez/',
    name: 'Cristoval Ramirez',
    date: 'Dec 19, 2022',
    title: 'Demonstrates her ability to find creative solutions to complex challenges',
    desc: [
      "I highly recommend Karis as a software engineer. She is an extremely talented individual with a strong understanding of software engineering concepts. Highly skilled in critical thinking and problem-solving, and she consistently demonstrates her ability to find creative solutions to complex challenges. She is also very easy to get along with and is willing to learn and adapt to new situations. Karis is a team player who is never stressed out about any aspect of her work, which makes her a pleasure to work with. In my experience studying with Karis, she has consistently demonstrated her ability to produce high-quality work and I have no doubt that she will be a valuable asset to any team she joins."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/andrew-n-collins/',
    name: 'Andrew Collins',
    date: 'Dec 19, 2022',
    title: 'Top-notch technical professional',
    desc: [
      "Karis Courey is an exceptional student with a natural aptitude for technology and a strong work ethic. She consistently demonstrated her knowledge and understanding of the subject matter, and her attention to detail was impeccable. I highly recommend her as a top-notch technical professional."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/janete-hays/',
    name: 'Janete Hays',
    date: 'Dec 19, 2022',
    title: 'Proactive and if it comes to someone needing assistance, she is there',
    desc: [
      "Working with and getting to know Karis was amazing, She is incredibly talented and get's along amazingly with people. She is proactive and if it comes to someone needing assistance, she is there. She always has a positive attitude and an energy that I never understood how she got! Making her a wonderful candidate for any team oriented company!"
    ]
  },
  {
    link: 'https://www.linkedin.com/in/patrickjamescerutti/',
    name: 'Patrick Cerutti',
    date: 'Dec 19, 2022',
    title: 'With her help I was able to solve the challenge related to my project',
    desc: [
      "Karis was someone I personally sought out to help me solve a problem on a project we were completing while in a Software Engineering bootcamp. My initial thoughts of Karis were, how impressed I was of her knowledge when solving coding challenges and her ability to think outside the box when solving those problems. She was a great team player and with her help I was able to solve the challenge related to my project. She would be a great addition to any Software Engineering team."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/katelyngmartin/',
    name: 'Katelyn Martin',
    date: 'Dec 17, 2022',
    title: 'A proactive, result oriented, and technically sound individual',
    desc: [
      "Karis is a proactive, result oriented, and technically sound individual who is always ready to put in her time and energy to deliver quality solutions. She has displayed strong technical knowledge of software engineering concepts with commitment to continuous learning. She has been an excellent resource for me and our fellow classmates. She would be a valuable asset to any team."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/waylenroche/',
    name: 'Waylen Roche',
    date: 'Dec 17, 2022',
    title: 'Sent anyone who wanted one in our cohort a friendship bracelet, which she hand made',
    desc: [
      "Karis sent anyone who wanted one in our cohort a friendship bracelet, which she hand made. I mean. Is there anything else to say? Yes there is. Karis is a brilliant, dedicated problem solver who demonstrated time and again a persistence and commitment to excellence. She inspired me and many of our cohort mates to bring our all to each endeavor. She and I would often compare approaches to problem sets, or share insights from coding along to lectures. Karis is a joy to work with and study along, and will make a powerful asset to any team she joins."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/shelenells/',
    name: 'Shelen Ells',
    date: 'Dec 16, 2022',
    title: 'Pursued continued growth on a concept far beyond what I would consider adequate',
    desc: [
      "Karis is an incredibly brilliant person who made a significant impression on me immediately.",
      "Karis always met a problem with an engineering mind and pursued continued growth on a concept far beyond what I would consider adequate. Karis is an exceptional person that will do incredible things and I’m grateful I got to know her in the time I did."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/jonas-pf/',
    name: 'Jonas Petit-frere',
    date: 'Dec 16, 2022',
    title: 'A great attitude and is always seeking to learn more',
    desc: [
      "Karis is a talented developer who was always available to help. The knowledge she shared with me has helped me become a better problem-solver and developer. She has a great attitude and is always seeking to learn more. My time with Karis during our Software immersive has shown me that she is on her way to being a wealth of knowledge for years to come. I would love another opportunity to work with her again.",
      "I believe she will be an asset to any team and will excel in any role she takes on. I highly recommend Karis for any software development opportunity."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/thedavidleung/',
    name: 'David Leung',
    date: 'Dec 16, 2022',
    title: 'Exceptional ability to understand complex technical concepts',
    desc: [
      "Karis has a broad skill set and a wealth of knowledge in a range of technologies, including but not limited to Python, JavaScript, React.js, Redux, and PostgreSQL.",
      "She has a talent for critical thinking and finding solutions to complex problems, making her a valuable asset to any project. She has an exceptional ability to understand complex technical concepts and is able to translate them into effective solutions in a way that is both efficient and elegant. Her problem-solving skills are exceptional, and she is able to efficiently troubleshoot and debug code under tight deadlines.",
      "In addition to her technical abilities, Karis is a team player and a joy to work with. She is always willing to collaborate and contribute to group projects, and her positive attitude is infectious."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/matt-sabo/',
    name: 'Matthew Sabo',
    date: 'Dec 16, 2022',
    title: 'Eager to learn and took on extra challenges whenever they were offered',
    desc: [
      "I had the pleasure of working with Karis during her time at our software engineer bootcamp. From the start, it was clear that Karis was an exceptional student - she consistently demonstrated a strong aptitude for problem-solving and a natural curiosity about technology.",
      "Throughout the course, Karis consistently impressed me with her ability to quickly grasp new concepts and apply them to her work. She was always eager to learn and took on extra challenges whenever they were offered. Her work was consistently of a high quality and she was able to complete tasks efficiently and effectively.",
      "In addition to her technical skills, Karis also has excellent communication and collaboration skills. She was a valuable contributor to group projects and was always willing to lend a helping hand to her fellow students. She was a pleasure to work with and was well-respected by her peers.",
      "I have no doubt that Karis has the skills and drive necessary to succeed as a software engineer. She would be a valuable asset to any team and I highly recommend her for any software engineering positions."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/jeffjiang13/',
    name: 'Jeff Jiang',
    date: 'Dec 16, 2022',
    title: 'Positive attitude and work ethic make her a pleasure to work with',
    desc: [
      "Karis is a talented software engineer who is dedicated to her craft. She is always willing to learn new technologies and techniques and is consistently seeking out ways to improve her skills. In addition to being a skilled coder, Karis is also a great problem-solver, able to think logically and quickly to solve complex technical challenges. She is a valuable member of any team, and her positive attitude and work ethic make her a pleasure to work with."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/roman-jonathan/',
    name: 'Jonathan Roman',
    date: 'Dec 16, 2022',
    title: 'Able to explain concepts to both technical and non-technical audiences',
    desc: [
      "During our software engineering program, Karis demonstrated consistent dedication and ability to learn new technical skills while applying them to projects. In addition to her strong technical abilities, she is able to explain these complex concepts in a public presentation setting to both technical and non-technical audiences. With these qualities, I believe any team would be lucky to have Karis joining them."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/eli-gilead/',
    name: 'Elijah Gilead',
    date: 'Dec 16, 2022',
    title: 'A great team player and is able to work effectively with others',
    desc: [
      "Karis has a strong foundation in computer science principles and is skilled in multiple programming languages, including Python 3 and JavaScript. She is a diligent and proactive learner, always seeking out opportunities to improve her skills and broaden her knowledge base.",
      "In addition to her technical expertise, Karis is a great team player and is able to work effectively with others. She is able to take direction well and is always willing to lend a helping hand to her colleagues.",
      "I highly recommend Karis for any software development opportunity. I believe she will be an asset to any team and will excel in any role she takes on."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/rahmanm2016/',
    name: 'Muhammad Rahman',
    date: 'Dec 16, 2022',
    title: 'Very fluent on the full-stack',
    desc: [
      "Studying with Karis at Hack Reactor was phenomenal. Her knowledge of algorithms and data structures exceeds what you would expect of most software engineering students. She is very fluent on the full-stack, not only excelling in complex queries with Django/FastAPI, but also delivering solid UI with React.js with Redux and Material UI."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/connorhgillespie/',
    name: 'Connor Gillespie',
    date: 'Dec 16, 2022',
    title: 'Someone who will elevate your team/company',
    desc: [
      "I have had countless experiences interacting with Karis during my time studying with her at Hack Reactor. I can tell you that no matter what, no matter what we were doing or talking about, every single one of those interactions I came away with an immensely positive mindset while also being subsequently impressed with how impressive of an individual Karis is. She works harder, smarter, and with more dedication than almost anyone else I have ever met. If you need someone who will elevate your team/company, it honestly doesn't matter what you need elevated because Karis WILL take care of it to a level that will exceed what you expect. She is worth the investment, just do it."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/margaret-ketchum/',
    name: 'Margaret Ketchum',
    date: 'Dec 16, 2022',
    title: 'Humble, open-minded, and always willing to lend a helping hand',
    desc: [
      "I have had the privilege of studying with Karis and have been consistently impressed by her technical skills and her ability to consistently deliver high quality work. Karis is an asset to any team due to her strong work ethic and dedication to continuous learning.",
      "In addition to her technical abilities, Karis is also an exceptional team player. She is humble, open-minded, and always willing to lend a helping hand. Karis is also an incredibly kind and supportive person, and I have no doubt that she will always be there to support her colleagues to the end.",
      "As a student, I have found Karis to be an invaluable resource and mentor. She is a true professional and a pleasure to work with. I highly recommend Karis for any opportunity and believe that she will be a valuable asset to any team."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/theresavilla/',
    name: 'Theresa Villa',
    date: 'Dec 16, 2022',
    title: 'Consistently delivering high-quality results and exceeding expectations',
    desc: [
      "I am pleased to recommend Karis as a talented software engineer. In the time that I have worked with her, I have consistently been impressed by her intelligence, communication skills, and strong work ethic. Karis consistently goes above and beyond in her work, consistently delivering high-quality results and exceeding expectations. She is a pleasure to work with and her positive attitude and strong teamwork skills make her a valuable asset to any team. Her technical skills and dedication to her work makes her an excellent candidate and I have no doubt she will excel in any position she pursues."
    ]
  },
  {
    link: 'https://www.linkedin.com/in/rkhan786/',
    name: 'Ray Khan',
    date: 'Dec 16, 2022',
    title: 'Natural problem solver and approaches challenges with logical thinking',
    desc: [
      "Karis truly demonstrated her technical expertise and ability to learn quickly as we navigated through a software engineering bootcamp together. In addition to her resilient work ethic, she is a natural problem solver and approaches challenges with logical thinking. I have no hesitation in recommending Karis for any software engineering company/group/organization."
    ]
  },

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

                    {desc.map((line, i) => (
                      <p key={i}>
                        {line}
                      </p>
                    ))}

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
          {recommendations.map((recommendation, i) => (
            <li key={i} data-aos="fade-right" data-aos-duration="1200">
              <Plaudit recommendation={recommendation} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Plaudits;
