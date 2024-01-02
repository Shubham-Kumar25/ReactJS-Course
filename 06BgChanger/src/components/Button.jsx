import React from "react";

function Button({ colors, changeTheBg }) {
  return (
    <div className="flex w-full gap-4 mx-6 my-4 rounded-lg bg-white px-4 justify-center py-2">
      {colors.map((color) => {
        return (
          <button
            key={color}
            className={`rounded-full shadow-lg px-4 py-2 bg-${color}-900`}
            onClick={() => changeTheBg(color)}
          >
            {color}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
