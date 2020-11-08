import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [password, setPassword] = useState("");
  const generatePassword = () => {
    const masterString =
      "C2VEZAHp3n2J3ONrfY3HjkUpn7Jk15YPqNF51X3AK5g6c06nzejf1H9nEXbvMwKzEXUmgigKbHbwxrfJEaP7PQ15Pak7WIV52jrpBh01Gcy9pDVM6cS7y4vP";
    let pswdString = "";

    for (let i = 0; i < 8; i++) {
      let c = Math.floor(Math.random() * masterString.length + 1);
      pswdString += masterString.charAt(c);
    }
    setPassword(pswdString);
  };
  return (
    <div className="main">
      <div className="content">
        <h1>Password Generator</h1>
        <div className="password">
          <input
            type="text"
            placeholder="Click On Generate"
            value={password}
            readOnly={true}
          />
          <button onClick={generatePassword}>Generate</button>
        </div>
      </div>
      <p>
        Made with ❤️️ by <a href="https://github.com/suveshmoza">Suvesh Moza</a>
      </p>
    </div>
  );
};

export default App;
