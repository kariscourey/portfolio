import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";


const Resume = () => {

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Read all about it</span>
                <h3>Resume</h3>
                <br />
                <p>Extra, extra! Taking you{' '}
                  <a href="https://drive.google.com/file/d/1Pi0X27mSo45qb_nMMSTYfgDWnv0N9C0d/view?usp=sharing">there</a>...
                </p>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Resume;
