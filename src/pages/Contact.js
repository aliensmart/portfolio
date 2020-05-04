import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Contact(){
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true)

  const messagedata = ()=>{
    const sendData = async ()=>{
      setLoading(true)
      try{
        const data = {
          name: name,
          email: email,
          subject: subject,
          message: message
        }
        const res = await axios.post("http://localhost:5000/contact", data)
        console.log(res)
      } catch(error){
        console.log(error)
      }

    }
    sendData()
  };

  const submitHandler = (event) =>{
    // event.preventDefault();
    if( !name){
      setError(true);
      setErrorMessage('Name is required');
    } else if( !email ){
      setError(true);
      setErrorMessage('Email is required');
    } else if( !subject ){
      setError(true);
      setErrorMessage('Subject is required');
    } else if( !message ){
      setError(true);
      setErrorMessage('Message is required');
    } else{
      messagedata()
      setError(false);
      setErrorMessage('You message has been sent!!!');
    }
  }
  const numberFormatter = (number) =>{
    const phnNumber = number;
    return phnNumber;
  }

  const handleAlerts = () => {
    if(error && errorMessage){
      return (
        <div className="alert alert-danger mt-4">
          {errorMessage}
        </div>
      )
    } else if(!error && errorMessage){
      return (
        <div className="alert alert-success mt-4">
          {errorMessage}
        </div>
      )
    } else{
      return null;
    }
  }

  useEffect(() => {
    axios.get('/api/contactinfo')
      .then(response =>{
        setPhoneNumbers(response.data.phoneNumbers);
        setEmailAddress(response.data.emailAddress);
        setAddress(response.data.address);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form action="#" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input onChange={e=>setName(e.target.value)} type="text" name="name" id="contact-form-name"/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">Enter your email*</label>
                    <input onChange={e=>setEmail(e.target.value)} type="text" name="email" id="contact-form-email"/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Enter your subject*</label>
                    <input onChange={e=>setSubject(e.target.value)} type="text" name="subject" id="contact-form-subject"/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Enter your Message*</label>
                    <textarea onChange={e=>setMessage(e.target.value)} name="message" id="contact-form-message" cols="30" rows="6"></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">Send Mail</button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Phone</h6>
                      {phoneNumbers.map(phoneNumber =>(
                        <p key={phoneNumber}><a href={numberFormatter(phoneNumber)}>{phoneNumber}</a></p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}><a href={`mailto:${email}`}>{email}</a></p>
                      ))}
                    </div>
                  </div>
                )}
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
