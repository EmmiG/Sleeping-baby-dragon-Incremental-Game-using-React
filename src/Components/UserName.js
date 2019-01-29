import React from 'react';

/*
    * UserName Component, passing in props from LoginForm.
    * Displayed in UserStatsContainer.
*/

function UserName(props) {
  return (
      
     
    <div className="user-name-container">
      <h1 className="header-login">
        Welcome <span className="user-name-span">{props.email}</span>
      </h1>
    </div>
    
    
  );
}

export default UserName;










      
    