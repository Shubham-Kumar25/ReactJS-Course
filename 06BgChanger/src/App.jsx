import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bg, setBg] = useState("pink");
  const changeBg = (color) => {
    setBg(color);
  };

  const colors = ["black", "red", "yellow", "orange", "purple", "blue"];

  return (
    <div style={{ backgroundColor: bg }} className="w-full h-screen">
      <Button colors={colors} changeTheBg={changeBg} />
    </div>
  );
}

export default App;
