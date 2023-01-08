import React from "react";

const GitSites = [
  {
    iconName: "github",
    link: "https://www.github.com",
  },
  {
    iconName: "gitlab",
    link: "https://www.gitlab.com",
  },
];
const Project = (props) => {
  return (
    <>
      {props.name == 'igneous-rocks/hot-stocks' ?
        <ul className="social">
          <li>
            <a href={`${GitSites[1].link}/${props.name}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${GitSites[1].iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        </ul> :

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
      }
      {/* END PROJECT */}
    </>
  );
};

export default Project;
