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




export class App extends Component {
  

  componentDidMount() {
    MainScript();
    axios.get(process.env.REACT_APP_USER_INFO_API)
  .then((res) => {
    console.log(res.data)
    axios.post('https://immense-beyond-81444.herokuapp.com/api/user',{
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
      console.log('user saved')
      const visitorId = response.data.success.id;
      localStorage.setItem('visitorId',visitorId)
    }) 
    .catch((err) =>
    {
      console.log(err)
    })
  })
  .catch((err) =>
  {
    console.log(err)
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




