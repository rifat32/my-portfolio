import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();

const baseUrl = 'http://127.0.0.1:8001/api';
// const baseUrl = 'https://immense-beyond-81444.herokuapp.com/api';
const letters = /^[A-Za-z]+$/;
const emailRegX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export class ContactForm extends Component {
  state = {
name:'',
email:'',
message:'',
nameErr:'',
emailErr:'',
messageErr:'',
loading:false,
success:false,
somethingWrong:false
  }
  handleChange = (event) => {
    let target = event.target
    this.setState({
      [target.name]:target.value,
    })
    //############### name err before submit ##################
    if(target.name === 'name' ){
      let lettersErr = !target.value.match(letters);
      let lengthErr = target.value.length >= 40
      if(lettersErr || lengthErr){
        if(lettersErr)
        {
        
          this.setState({
            nameErr: 'Only alphabet characters are allowed'
           })
           
        }
        if(lengthErr) {
          this.setState({
            nameErr: 'Name is too big'
           })
       }
      }
      else  {
        this.setState({
          nameErr:''
        });
      } 
    }
     //############### email err before submit ##################
    
if(target.name === 'email' ){
  if((target.value.length > 254  
    || 
    (
      !(emailRegX.test(target.value))
     && 
     target.value.includes('@')
      && 
      (target.value.length - target.value.indexOf('@') !== 1 )
       &&
     (target.value.length - target.value.lastIndexOf('.') !== 1 ) 
     ) 
     )
     ){  
    
  this.setState({
   emailErr: 'You have entered an invalid email address!'
  })
  } else {
    this.setState({
     emailErr :''
    });
  } 
}
     //############### message err before submit ##################
    if(target.name === 'message' ){
      if(target.value.length > 600) {
        this.setState({
          messageErr:'Message can not exceed 600 characters'
        });
      } else {
        this.setState({
          messageErr:''
        });
      } 
    }
  
   
  }
  //#####################               ######################
  //##################### Handle Submit ######################
  //#####################               ######################
  handleSubmit = (event) => {
  event.preventDefault();

  this.setState({
     nameErr:'',
     emailErr:'',
     messageErr:''
  })
  const validationSuccess = this.formValidate();
  if(validationSuccess) {
this.setState({
  loading:false
})
axios.post(`${baseUrl}/message`,{
  name:this.state.name,
  email:this.state.email,
  message:this.state.message,
  visitorId:localStorage.getItem('visitorId')
 })
 .then((response) => {
  this.setState({
    name:'',
    email:'',
    message:'',
    loading:false,
    somethingWrong:false,
    success:true
  })
  setTimeout(() => {
    this.setState({
      success:false
    })
  },5000)
   
}) 
 .catch(err => {
   if(err){
    this.setState({
      loading:false,
      success:false,
      somethingWrong:true,
    })
   }
 })
 

  }
  
  

  }
  formValidate = () => {
    
let nameErr = false, emailErr = false, messageErr = false;
// ######################  name err after submit #################
 if(!this.state.name.length && !nameErr){
   nameErr = true;
this.setState({
  nameErr: 'Name can not be empty.'
})
 }
   if(!this.state.name.match(letters)  && !nameErr)
      {
        nameErr = true;
        this.setState({
          nameErr:'Only alphabet characters are allowed'
        })
        
      }

 if(this.state.name.length >= 40 && !nameErr) {
  nameErr = true;
    this.setState({
      nameErr: 'Name is too big'
     })
  
 }
 if(this.state.name.length <= 2 && !nameErr) {
  nameErr = true;
    this.setState({
      nameErr: 'Name is too short'
     })
  
 }
 // ######################  email name err after submit #################
 if(!this.state.email.length && !emailErr){
  emailErr = true;
this.setState({
  emailErr: 'Email is required'
})
}
if((this.state.email.length > 254  || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)))
&& !emailErr
){
  emailErr = true;
this.setState({
 emailErr: 'You have entered an invalid email address!'
})
}

 // ######################  message name err after submit #################
 if(!this.state.message.length && !messageErr){
  messageErr = true;
this.setState({
 messageErr: 'Message is required'
})
}
if(this.state.message.length > 600 && !messageErr){
  messageErr = true;
this.setState({
 messageErr: 'Message can not exceed 600 characters'
})
}
if(nameErr || emailErr || messageErr){
  return false;
}
else {
  return true;
}

  }
    render() {
        return (
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form   className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input placeholder='John Doe' type="text" name="name" className="form-control" id="name" onChange={this.handleChange} value={this.state.name} />
              {
                this.state.nameErr && <small className="text-danger"> {this.state.nameErr}</small>
              }
              
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Your Email</label>
              <input placeholder='example@example.com' type="email" className="form-control" name="email" id="email" 
              onChange={this.handleChange} value={this.state.email}
               />
               {
                this.state.emailErr && <small className="text-danger"> {this.state.emailErr}</small>
              }
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea placeholder='Hello! Master ........................................................................................................' id='message' className="form-control" name="message" rows={10} onChange={this.handleChange} value={this.state.message} />
            {
                this.state.messageErr && <small className="text-danger"> {this.state.messageErr}</small>
             }
          </div>
          <div className="my-3">
            {
             this.state.loading && <div className="loading">Loading</div>
            }
            {
             this.state.somethingWrong &&  <div className="error-message" >Something went wrong</div>
            }
            {
             this.state.success &&   <div className="sent-message">Your message has been sent. Thank you!</div>
            }
           
           
          </div>
          
          <div className="text-center"><button type="submit" onClick={this.handleSubmit}>Send Message</button></div>
        </form>
      </div>
        )
    }
}

export default ContactForm
