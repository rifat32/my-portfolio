import React, { Component } from 'react'
import SkillSectionData from '../../../data/SkillsSectionData';
import {ProgressBar } from 'react-bootstrap';
import 'waypoints/lib/noframework.waypoints.min.js';
import {skillsAnimation} from './SkillSectionFunctions'




export class SkillsSection extends Component {
    state = {
        skills_col_1: SkillSectionData.skillsCol1,
        skills_col_2: SkillSectionData.skillsCol2
    }
    componentDidMount() {
      skillsAnimation();
    }
    
    
    render() {
        return (
           <section id="skills" className="skills section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Skills</h2>
      <p>I have learnt from w3schools.com, udemy videos , youtube playlists
and free code camp. I am an expert in javascript and php
programming. To see projects that I have created, scroll down to the portfolio section</p>
    </div>
    <div className="row skills-content">
        {/* ########## skills column 1 ############ */}
      <div className="col-lg-6" data-aos="fade-up">
        {this.state.skills_col_1.map((el) => {
        return (  <div className="progress" key={el.id}>
          <span className="skill">{el.skill} <i className="val">{el.value} %</i></span>
          <div className="progress-bar-wrap">
      <ProgressBar  animated now={el.value} /> 
          </div>
        </div>
        )
        })}
       
      </div>
      {/* ########## skills column 2 ############ */}
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
      {this.state.skills_col_2.map((el) => {
        return (  <div className="progress" key={el.id}>
          <span className="skill">{el.skill} <i className="val">{el.value} %</i></span>
          <div className="progress-bar-wrap">
      <ProgressBar key={el.id} animated now={el.value} /> 
          </div>
        </div>
        )
        })}
     
       
      </div>
    </div>
  </div>
</section>

        )
    }
}

export default SkillsSection
