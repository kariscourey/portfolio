import React from "react";

const RecLinks = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/kariscourey/details/recommendations/",
  }
];
const Recommendations = () => {
  return (
    <>

            <a href={`${RecLinks[0].link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${RecLinks[0].iconName}.svg`}
                alt="social"
              ></img>
            </a>

      {/* END RECOMMENDATIONS */}
    </>
  );
};

export default Recommendations;
