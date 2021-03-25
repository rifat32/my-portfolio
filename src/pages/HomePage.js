import React, { Component } from 'react';
import HeroSection from '../components/HomePageComponents/HeroSection';
import AboutSection from '../components/HomePageComponents/AboutSection';
import SkillsSection from '../components/HomePageComponents/SkillsSection';
import PortfolioSection from '../components/HomePageComponents/PortfolioSection'
import ServicesSection from '../components/HomePageComponents/ServicesSection';
import ContactSection from '../components/HomePageComponents/ContactSection'
 import {Helmet} from 'react-helmet-async';
// import TestimonialsSection  from '../components/HomePageComponents/TestimonialsSection'
// import FactsSection from '../components/HomePageComponents/FactsSection'
// import ResumeSection from '../components/HomePageComponents/ResumeSection';




export default class HomePage extends Component {
   
    render() {
        return (
            <main id="main">
            <Helmet>
            <meta property="og:url"   content="https://masterrifat.netlify.app/"
 />
 <meta property="og:title"              content="RIFAT AL- ASHWAD" />
 <meta property="og:description"              content="I am a man. A React superman. I am a front end web developer as well as a back end web developer. I have the ability to switch to any technology. Always learning and pushing boundaries."/>
 <meta property="og:image"     content="https://masterrifat.netlify.app/assets/img/profile-img.jpg" />
             <meta name="description" content="I am a man. A React superman. I am a front end web developer as well as a back end web developer. I have the ability to switch to any technology. Always learning and pushing boundaries." />
             <meta name="keywords" content="Rifat Al- ASHWAD, Web Developer, Master,  Web Master, React Superman, JS programmer, Programmer, Javascript programmer, Front-End Web Developer, Back-End Web Developer, Web Designer, Portfolio, Real Web Developer" />
           </Helmet>    
               <HeroSection/>
               <AboutSection/>
               {/* <FactsSection/> */}
               <SkillsSection/>
               {/* <ResumeSection/> */}
               <PortfolioSection/>
               <ServicesSection/>
               {/* <TestimonialsSection/> */}
               <ContactSection/>
            </main>
        )
    }
    
}
