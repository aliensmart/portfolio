import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 260,
        density: {
          enable: true
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 10,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "left",
        out_mode: "out"
      }
    }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, [])

 
  

  class TypeWriter{
    constructor(txtElement, words, wait = 3000){
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;

    }
    type(){
      //current index of word
    const current = this.wordIndex % this.words.length;
    //GEt full text of current word
    const fulltxt = this.words[current];
    //Check if Deleting
    if(this.isDeleting){
      //Remove Char
      this.txt = fulltxt.substring(0, this.txt.length - 1 );
    }else{
      //Add Char
      this.txt = fulltxt.substring(0, this.txt.length + 1 );
    }
    //insert txt into Element
    this.txtElement.innerHTML = `<span className="txt">${this.txt}</span>`;

    //Initial type Speed
    let typeSpeed = 300;
    if(this.isDeleting){
      typeSpeed /=2
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fulltxt){
      //Make pause at the End
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true; 
    }else if(this.isDeleting && this.txt === ''){
      this.isDeleting = false;

      //Move to the next word
      this.wordIndex++;
      //Pause befor start typing
      typeSpeed = 500
    }



    setTimeout(() => {
      this.type()
    }, typeSpeed);
    }
  }
  // Init on Dom Load
  window.addEventListener('DOMContentLoaded', init)
  // Init App
  function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait)
  }
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">{information.name}</span>
                </h1>
                <h3>
                   I am a <span className='txt-type' data-wait='3000' data-words='["Developer", "Designer", "Photographer", "Learner"]'></span>
                </h3>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
