import React from "react";

const GitSites = [
  {
    iconName: "github",
    link: "https://www.github.com/kariscourey",
  },
  {
    iconName: "gitlab",
    link: "https://www.gitlab.com/kariscourey",
  },
];
const Project = (props) => {
  return (
    <>
      <ul className="social">
        {GitSites.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}/${props.name}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END PROJECT */}
    </>
  );
};

export default Project;
