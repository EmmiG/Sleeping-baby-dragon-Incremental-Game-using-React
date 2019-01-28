import React, { Component } from 'react';
import Header from './Header.js';


/*
    * when you shall use state you start with class
*/

class LoginForm extends Component {
    
/*
    * created so you could add any email and password
    * display the email that you put in the login inputfield.
    * made an error state an error will display when a user type a too short
    * password which has under 7 letters code handlePassword function.
    * handleSubmit function will call for the error state if the user have typed in
    * wrong email or password and it will display for the user. 
*/
    
    state = {
    email: '',
    password: '',
    error: '',
  }

handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
      
      if (this.state.password.length < 7) {
      this.setState({ error: "Password too short" });
    } else {
      this.setState({ error: '' });
    }
      
      this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
      
      event.preventDefault();
    if(this.state.email === '' && this.state.password === ''){
      this.setState({ error: "Wrong email or password!" });
        
    } else {
         this.props.handleLogin(this.state.email, this.state.password);
    
    }
    
  }
  
/*
    * Made a variables for the error handling and wrote the classes which
    * I wanted it to check with an if statement.
    * Displayed the header.js Component
    * Called the handleSubmit function in the form
    * called for the errorClass
    * Made a label Email adress 
    * Input which is the type of email
    * autoFocus flag: for the email field, so that when the form loads,
    * it sets focus to this field.
    * placeholder that will display the written text in the inputfield.
    * If the email is changed the function handleEmail will be running.
    * value state email will be running
    * Have another label with input which will check the password also.
    * If the password is changed the function handlePassword will be running.
    * value state password will be running
    * At the end of this Component it displays a button on the page
*/
  
    render(){

        
        let errorMessage = null;
    if(this.state.error){
      errorMessage = <small id="emailHelp" className="form-text text-danger">{this.state.error}</small>;
    }
    let errorClass = 'form-group';
    if(this.state.error){
      errorClass = "form-group has-danger";
    }
        return(
            <div>
            <Header />
            <form onSubmit={this.handleSubmit}>
        <div className={ errorClass }>
          <label htmlFor="email">Email address</label>
          <input 
                  type="email"
                  autoFocus
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleEmail}
                  value={this.state.email}
          />
          {
            }
          { errorMessage }
        </div>
        <div className={ errorClass }>
          <label htmlFor="password">Password</label>
          <input 
                  type="password"
                  className="form-control is-invalid"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  value={this.state.password}
          />
          {
             }
          {errorMessage}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      );
    }
}
            
            

export default LoginForm;