import React, { Component } from 'react';

// when you shall use state you start with class
class LoginForm extends Component {
    
    state = {
    email: '',
    password: '',
    error: '',
  }

handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
      
      if (this.state.password.length < 10) {
      this.setState({ error: "Password too short" });
    } else {
      this.setState({ error: '' });
    }
      
      this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
      
      event.preventDefault();
    if(this.state.email === "dragoness390@gmail.com" && this.state.password === "login1234"){
        
        this.props.handleLogin(this.state.email, this.state.password);
    } else {
      this.setState({ error: "Wrong email or password!" });
    }
    
  }


    
    render(){
        
        /* login*/
        
        let errorMessage = null;
    if(this.state.error){
      errorMessage = <small id="emailHelp" className="form-text text-danger">{this.state.error}</small>;
    }
    let errorClass = 'form-group';
    if(this.state.error){
      errorClass = "form-group has-danger";
    }
        return(
            
            <form onSubmit={this.handleSubmit}>
        <div className={ errorClass }>
          <label htmlFor="email">Email address</label>
          <input 
                  type="email"
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
      );
    }
}
            
            

export default LoginForm;