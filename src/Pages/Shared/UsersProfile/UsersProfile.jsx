import { useContext } from "react";
import { UsersauthContext } from "../Userscontext/UsersContext";

const UsersProfile = () => {
    // Access user information from the context
    const { user } = useContext(UsersauthContext);
  
    // Check if a user is authenticated
    if (user) {
      const { displayName, photoURL, bio, email } = user;
  
      return (
        <div className="user-profile">
          <h2>User Profile</h2>
          <div>
            {/* Display user's profile picture */}
            <img src={photoURL} alt={displayName} />
  
            {/* Display user's name */}
            <h3>{displayName}</h3>
  
            {/* Display user's bio */}
            <p>{bio}</p>
  
            {/* Display user's email */}
            <p>Email: {email}</p>
          </div>
        </div>
      );
    } else {
      // If the user is not authenticated, you can render a message or redirect to a login page.
      return <div>You are not logged in.</div>;
    }
  };
  
  export default UsersProfile;
  