import React from "react";
import Card from "./components/Card";

function App() {
  const tags = ["#card", " #rupaycard"];
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h1 className="text-4xl font-bold my-4">Tailwind Test</h1>
      <div className="flex items-center justify-center gap-6">
        <Card name="Master Card" tags={tags} />
        <Card name="RuPay Card" tags={tags} />
      </div>
    </div>
  );
}

export default App;
