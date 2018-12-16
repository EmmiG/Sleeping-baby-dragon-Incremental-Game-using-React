import React from 'react';


// UserName component, passing in props from LoginForm.
// Displayed in UserStatsContainer.
function UserName(props) {
  return (
      
     
    <div className="user-name-container">
      <h1 className="header-login">
        Welcome <span className="player-name-span">{props.email}</span>
      </h1>
    </div>
    
       
      </h1>
    </div>
  );
}

export default UserName;










      
    