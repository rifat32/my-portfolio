import React, { Component } from 'react';
import AboutSectionData from '../../../data/AboutSectionData';
import {BiChevronRight} from 'react-icons/bi'

const {title,img,header, smallHeader,personalInfo, aboutDetails } = AboutSectionData
const {column_1,column_2} = personalInfo;
export class About extends Component {
  
    render() {
        return (
         <section id="about" className="about">
  <div className="container">
    <div className="section-title">
      <h2>About</h2>
      <p>{title}</p>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-4" data-aos="fade-right">
        <img src={img} className="img-fluid" alt="RIFAT AL-ASHWAD" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content " data-aos="fade-left">
        <h3>{header}</h3>
        {smallHeader.visibility && <p className="font-italic">
        {smallHeader.data}
        </p> }
        
        <div className="row">
          <div className="col-lg-6">
            <ul>
      {column_1.map(el => {
        return el.visibility && 
          <li key={el.id}><BiChevronRight/><strong className='text-capitalize'>{el.key}:</strong>{el.info} <span></span></li>
         
      })}        
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
            {column_2.map(el => {
        return el.visibility && 
          <li key={el.id}><BiChevronRight/><strong className='text-capitalize'>{el.key}:</strong>{el.info} <span></span></li>
         
      })}     
            </ul>
          </div>
        </div>
        {
          aboutDetails.visibility &&   <p> {aboutDetails.data} </p> 
        }
       
      </div>
    </div>
  </div>
</section>

        )
    }
}

export default About
