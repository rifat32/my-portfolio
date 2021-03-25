import React, { Component } from 'react'
import ServicesSectionData from '../../../data/ServicesSectionData';
const {title,data} = ServicesSectionData;
export class ServicesSection extends Component {
    render() {
        return (
       <section id="services" className="services">
  <div className="container">
    <div className="section-title">
      <h2>Services</h2>
      <p>{title}</p>
    </div>
    <div className="row">
      {
        data.map(el => {

          return (
            <div key={el.id} className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">{el.icon}</div>
            <h4 className="title">{el.title}</h4>
            <p className="description">{el.description}</p>
          </div>
          )
        })
      }
    </div>
  </div>
</section>

        )
    }
}

export default ServicesSection
