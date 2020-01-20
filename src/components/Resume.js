import React from "react";

function Resume(props) {
  const {year, position, graduation, university, company, details, link} = props.resumeData;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <a href={link} className="mi-resume-details-link" target="blank"><h6 className="mi-resume-company">{company || university}</h6></a>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Resume;
