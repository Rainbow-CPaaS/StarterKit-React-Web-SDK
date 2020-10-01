import React from "react";
import rainbowSDK from "rainbow-web-sdk";
import "./App.css";

function App() {
  console.log("*** Welcome to Rainbow Web SDK Starter Kit for React ***");
  /* Add window object to allow debugging from the console */
  window.rainbowSDK = rainbowSDK;

  return (
    <div className="App">
      <header className="App-header">
        <p>Rainbow Web SDK v{rainbowSDK.version()}</p>
        <a
          className="App-link"
          href="https://hub.openrainbow.com/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Rainbow HUB and start making your own app!
        </a>
      </header>
    </div>
  );
}

export default App;
