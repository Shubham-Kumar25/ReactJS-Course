import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md shadow-xl rounded-xl bg-gray-500 my-8 mx-auto">
      <h1 className="font-bold text-white text-center text-3xl py-4">
        Password Generator
      </h1>
      <div className="flex shadow overflow-hidden mx-5 mb-4 items-center justify-center">
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Password"
          className="rounded-md w-full py-1 px-3 text-3xl"
          ref={passwordRef}
        />
        <button
          onClick={handleCopy}
          className="bg-purple-600 px-2 py-2 text-3xl text-white text-center rounded-md flex-shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex gap-4 mx-3 my-4">
        <div className="flex items-center justify-center gap-2">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            name="range"
            onChange={(e) => setLength(e.target.value)}
            id="range"
          />
          <label htmlFor="range" className="text-white font-bold text-lg">
            Length: {length}
          </label>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name="checkbox1"
            id="checkbox1"
          />
          <label htmlFor="checkbox1" className="text-white font-bold text-lg">
            Number
          </label>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            name="checkbox2"
            id="checkbox2"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="checkbox2" className="text-white font-bold text-lg">
            Character
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
