import React from "react";

import Hipsters from "./Hipsters";
import OldSchool from "./OldSchoolers";

function App() {
  return (
    <div className="App">
      <div>Here are the OldSchool:</div>
      <OldSchool />
      <div>Here are the Hipsters:</div>
      <br />
      <Hipsters />
    </div>
  );
}

export default App;
