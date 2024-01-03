import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="flex items-center justify-center p-4 m-4 text-3xl text-center text-white bg-gray-600">
      Github Bio: {data.bio}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/Shubham-Kumar25"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
