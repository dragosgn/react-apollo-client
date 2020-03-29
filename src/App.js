import React from "react";

import Hipsters from "./Hipsters";
import OldSchool from "./OldSchoolers";

function App() {
  return (
    <div className="App">
      <div>Here are the OldSchool:</div>
      <OldSchool />
      <br />
      <div>Here are the Hipsters:</div>
      <Hipsters />
    </div>
  );
}

export default App;
