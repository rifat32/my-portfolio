import React, { Component } from 'react';
import PortfolioSectionData from '../../../data/PortfolioSectionData';
import {slider} from './PortfolioDetailsSectionFunctions';
import {shuffle} from '../../../Scripts/CommonScripts';
  import {Helmet} from 'react-helmet-async';

const {data} = PortfolioSectionData;




export class PortfolioDetailsSection extends Component {
  state = {
    slug:this.props.slug,
    detailsData: data.find((el) => {
      return  el.title === this.props.slug.split('-').join(' ')
      })
  }
    componentDidMount() {
      slider();
    }
    componentDidUpdate(prevProps) {
      if (prevProps.slug !== this.props.slug) {
        const detailsData =  data.find((el) => {
          return  el.title === this.props.slug.split('-').join(' ')
          })
          this.setState({
            slug: this.props.slug,
            detailsData
          })
      
      }
    }  
    render() {
        return (
          
           <section id="portfolio-details" className="portfolio-details">
             <Helmet>
             <meta name="description" content={this.state.detailsData.description}/>
             <meta name="keywords" content="Web Project"/>
           </Helmet>  
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-12 position-relative">
        <div className="portfolio-details-slider swiper-container">
          <div className="swiper-wrapper align-items-center">
            {
              shuffle(this.state.detailsData.images).map((el,index) => {
                return  <div key={index} className="swiper-slide">
                <img src={el} alt='Portfolio Details Img' />
              </div>
              })
            }
          </div>
          <div className="swiper-pagination"> </div>
        </div>
        <div className="portfolio-info position-absolute">
          <h3>Project information</h3>
          <ul>
            {this.state.detailsData.ProjectInfo.map(el => {
              return el.type === 'text'? (<li key={el.key}><strong className='text-capitalize'>{el.key}</strong>: {el.value}</li>)
              :
              (<li key={el.key}><strong className='text-capitalize'>{el.key}</strong>:
              <a rel="noopener noreferrer" className='btn btn-primary btn-small' target='_blank' href={el.value}>Click And Go</a>
              </li>)

            })}
           
          </ul>
        </div>
      </div>
      <div className="col-lg-12">
       
        <div className="portfolio-description">
          <h2>Description</h2>
          <p>
            {this.state.detailsData.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
}

export default PortfolioDetailsSection
