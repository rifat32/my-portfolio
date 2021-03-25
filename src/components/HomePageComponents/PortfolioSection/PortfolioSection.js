import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PortfolioSectionData from '../../../data/PortfolioSectionData';
import {portfolioIsotop} from './PortfolioSectionFunctions';
import {shuffle} from '../../../Scripts/CommonScripts'
import {BiPlus, BiLink} from 'react-icons/bi'


const {title,data,filters} = PortfolioSectionData;
 


export class PortfolioSection extends Component {
  state={
    randomData: shuffle(data)
  }
 componentDidMount() {
  portfolioIsotop();
  const portfolioLightbox = window.GLightbox({
    selector: '.portfolio-lightbox'
  });
 }
    render() {
        return (
           <section id="portfolio" className="portfolio section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Portfolio</h2>
      <p>{title}</p>
    </div>
    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          {
            filters.map((el) => {
            return (
              <li key={el.id} data-filter={`.filter-${el.data}`}>{el.data}</li>
            ) 
            })
          }
         
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
     
     
      {
        this.state.randomData.map(el => {
          return (
            <div key={el.id} className={`col-lg-4 col-md-6 portfolio-item filter-${el.filter}`}>
            <div className="portfolio-wrap">
              <img src={el.img} className="img-fluid"  alt={`portfolio-item-${el.title.split(' ').join('-')}`} />
              <div className="portfolio-links">
                <a href={el.img}  data-gallery="portfolioGallery" className="portfolio-lightbox" title={el.title}><BiPlus/></a>
                <Link to={`/portfolio/details/${el.title.split(' ').join('-')}`} title="More Details"><BiLink/></Link>
              </div>
            </div>
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

export default PortfolioSection
