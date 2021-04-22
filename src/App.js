import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router ,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderSection from './components/CommonConponents/HeaderSection';
import FooterSection from './components/CommonConponents/FooterSection';
import DetailsPage from './pages/DetailsPage';
import { FaArrowUp } from "react-icons/fa";
import {MainScript} from './Scripts/MainScript';
 import {HelmetProvider} from 'react-helmet-async';
 import {select,on,scrollto} from './Scripts/CommonScripts';

require('dotenv').config();




export class App extends Component {
  
  state = {
    navOpen:false
  }
  navOpenHandle = () => {
    this.setState({
      navOpen:true
    })
    document.querySelector('body').classList.add('mobile-nav-active')
    }
    navCloseHandle = () => {
        this.setState({
          navOpen:false
        })
        document.querySelector('body').classList.remove('mobile-nav-active')
      
      }
  componentDidMount() {
     /**
   * Scrool with ofset on links with a class name .scrollto
   */
     const navCloseHandle = () => {
        this.setState({
          navOpen:false
        })
        document.querySelector('body').classList.remove('mobile-nav-active')
      
      }
  on('click', '.scrollto', function(e) {
    
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        navCloseHandle(); 
      }
      scrollto(this.hash)
    }
  }, true)
  // main script
    MainScript();


    // get info
    axios.get(process.env.REACT_APP_USER_INFO_API)
  .then((res) => {
    
    // axios.post('http://127.0.0.1:8000/api/user',{
     axios.post('https://immense-beyond-81444.herokuapp.com/api/user',{
      ip:res.data.ip,
      continent_name:res.data.continent_name,
      calling_code:res.data.calling_code,
      city:res.data.city,
      country_name:res.data.country_name,
      district:res.data.district,
      zipcode:res.data.zipcode,
      isp:res.data.isp,
      website:'portfolio',
      platform:window.navigator.platform
     })
     .then((response) => {
      const visitorId = response.data.success.id;
      localStorage.setItem('visitorId',visitorId)
    }) 
   
  })
  

  }
  render() {
    return (
     

      <HelmetProvider>
      <Router>
       
<HeaderSection navOpen={this.state.navOpen} navOpenHandle={this.navOpenHandle} navCloseHandle={this.navCloseHandle}/>
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/portfolio/details/:slug" component={DetailsPage}/>
    </Switch>
  <FooterSection/>
<button type='button' className="back-to-top d-flex align-items-center justify-content-center"><FaArrowUp/></button>


    </Router>
    </HelmetProvider>
   
    )
  }
}

export default App




