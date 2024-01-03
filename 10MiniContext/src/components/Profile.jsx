import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <h1>Welcome, {user.username}</h1> : <h1>Please login</h1>}
    </div>
  );
}

export default Profile;
