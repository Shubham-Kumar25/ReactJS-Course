import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div className="w-full text-4xl font-bold text-center text-white bg-gray-700 h-96">
      This is User Page and the user id is: {id}
    </div>
  );
}

export default User;
