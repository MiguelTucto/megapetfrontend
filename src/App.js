//components
import React from "react";
import {Outlet, Route, Routes} from "react-router-dom";
function App() {
  return (
    <React.StrictMode>
        <Outlet />
    </React.StrictMode>
  );
}

export default App;
