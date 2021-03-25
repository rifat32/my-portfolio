import React, { Component } from 'react';
import {HashLink} from 'react-router-hash-link'
import { BiX } from "react-icons/bi";
import {MdViewHeadline} from 'react-icons/md'

import { scrollActiveNav} from './HeaderSectionFunctions'
import HeaderSectionData from '../../../data/HeaderSectionData';




const {name,image,navLinks, socialLinks,} = HeaderSectionData;


export class Header extends Component {
  state = {
    navOpen:false
  }
componentDidMount(){
  scrollActiveNav();
}
navOpen = () => {
this.setState({
  navOpen:true
})
document.querySelector('body').classList.add('mobile-nav-active')
}
navClose = () => {
  this.setState({
    navOpen:false
  })
  document.querySelector('body').classList.remove('mobile-nav-active')
  }
    render() {
        return ( <>
    {this.state.navOpen? <BiX className='mobile-nav-toggle d-xl-none' onClick={this.navClose}/> : <MdViewHeadline className='mobile-nav-toggle d-xl-none' onClick={this.navOpen}/>
     }    
       
         <header id="header">
  <div className="d-flex flex-column">
    <div className="profile">
      <img src={image} alt='RIFAT AL- ASHWAD' className="img-fluid rounded-circle" style={{height:'130px'}} />
      <h1 className="text-light"><HashLink to='/#hero'>{name}</HashLink></h1>
      <div className="social-links mt-3 text-center">
        {/* ##################### ######### ###################### */}
    {/* ##################### social Links ###################### */}
    {/* ##################### ######### ###################### */}
    {
      socialLinks.map(el => {
        return el.visibility &&  <a key={el.id} rel="noopener noreferrer" href={el.link} target="_blank"  className={el.media}>{el.icon}</a>
      })
    }
     
    
     
       
       
      
       
      </div>
    </div>
    {/* ##################### ######### ###################### */}
    {/* ##################### nav Links ###################### */}
    {/* ##################### ######### ###################### */}
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        {navLinks.map(el => {
          return el.visibility && <li key={el.id} onClick={this.navClose}><HashLink to={el.link} className="nav-link scrollto">{el.icon} <span>{el.text}</span></HashLink></li>
           
        })
        }
      
      </ul>
    </nav>
  </div>
</header>


        </>
          
        )
    }
}

export default Header
