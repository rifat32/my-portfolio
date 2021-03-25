import React, { Component } from 'react';
// import Typed from 'react-typed';
import HeroSectionData from '../../../data/HeroSectionData';
import {Typed} from './HeroSectionFunctions'
const {name, I_AM } = HeroSectionData

export default class Hero extends Component {
  componentDidMount(){
    Typed();
  }
  render () {
    return (
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
 <div className="hero-container" data-aos="fade-in">
 <h1>{name}</h1>
   {/* <p>I'm <Typed
                   strings={I_AM}
                   typeSpeed={40}
                   backSpeed={50}
                   loop
               />
               </p> */}
  <p>I'm <span className="typed" data-typed-items={`${I_AM.map((el) => el)}`}></span></p>
 </div>
</section>

   )
  }
    
}
