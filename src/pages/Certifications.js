import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Certification from '../components/Certifications';
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
const Certifications = ()=>{
const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    axios.get('/api/certifications')
      .then( response => {
        setCertifications(response.data);
      })
  })

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="My Certifications" />
          <div className="row mt-30-reverse">
            {certifications.map(certification => (
              <TrackVisibility once offset={200} className="col-lg-4 col-md-6 col-12 mt-30" key={certification.id}>
                <Certification content={certification}/>
              </TrackVisibility>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Certifications;