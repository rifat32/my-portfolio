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

require('dotenv').config();
// const baseUrl = 'http://127.0.0.1:8001/api';
const baseUrl = 'https://immense-beyond-81444.herokuapp.com/api';



export class App extends Component {
  

  componentDidMount() {
    MainScript();
    axios.get(process.env.REACT_APP_USER_INFO_API)
  .then((res) => {
    axios.post(`${baseUrl}/user`,{
      ip:res.data.ip,
      continent_name:res.data.continent_name,
      calling_code:res.data.calling_code,
      city:res.data.city,
      country_name:res.data.country_name,
      district:res.data.district,
      zipcode:res.data.zipcode,
      isp:res.data.isp,
      website:'portfolio'
     })
     .then((response) => {
      const visitorId = response.data.success.id;
      localStorage.setItem('visitorId',visitorId)
    }) 
  })

  }
  render() {
    return (
     

      
      <Router>
       
<HelmetProvider>
   
<HeaderSection/>
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/portfolio/details/:slug" component={DetailsPage}/>
    </Switch>
  <FooterSection/>
<button type='button' className="back-to-top d-flex align-items-center justify-content-center"><FaArrowUp/></button>

</HelmetProvider>
    </Router>
   
    )
  }
}

export default App




