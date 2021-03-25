import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactSectionData from '../../../data/ContactSectionData';

const {title,infos} = ContactSectionData;



export class ContactSection extends Component {
    render() {
        return (
         <section id="contact" className="contact">
  <div className="container">
    <div className="section-title">
      <h2>Contact</h2>
      <p>{title}</p>
    </div>
    <div className="row" data-aos="fade-in">
      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
 {
   infos.map(el => {
   return  el.key === 'map'?  el.visibility &&   <iframe key={el.id} title="map" src={el.value} frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />
     :
     el.visibility  &&   <div key={el.id} className={`${el.key} infoEl`}>
       <div className='infoIcon'>
       {el.icon}
       </div>
    
     <h4 className='text-capitalize'>{el.key}:</h4>
     <p>{el.value}</p>
   </div>


    
   }) 
 }

   
        
        </div>
      </div>
      <ContactForm/>
      
    </div>
  </div>
</section>

        )
    }
}

export default ContactSection
