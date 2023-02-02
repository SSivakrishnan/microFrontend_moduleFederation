import React from "react";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));
const RemoteInput = React.lazy(() => import("Remote/Input"));



export const App = () => (
  <div style={{ background: "pink" }}>
    <h1>Host Components!</h1>

    <p>Hello from the Base Side</p>
    <button>vankkam</button>
    <input placeholder="type here..."/>
    
    <h2>Remote Components:</h2>
    
      <RemoteApp />
    
      <RemoteButton />

      <RemoteInput/>
  </div>
);
export default App;
