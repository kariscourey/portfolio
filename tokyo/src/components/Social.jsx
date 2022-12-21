import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/kariscourey",
  },  {
    iconName: "github",
    link: "https://www.github.com/kariscourey",
  },
  {
    iconName: "gitlab",
    link: "https://www.gitlab.com/kariscourey",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
