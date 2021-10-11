import React from 'react';
 
function Homepage(history) {
 
  // handle click event of logout button
  const handleLogout = () => {    
  }
 
  return (
    <div>
      <br />
     <a href="/">Homepage</a>
                <a href="/signup">Sign-up</a>
                <a href="/login">Login</a>
                <h1>Homepage</h1><br /><br />

      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
    </div>
  );
}
 
export default Homepage;