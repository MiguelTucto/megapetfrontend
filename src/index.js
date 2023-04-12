//theme
import "primereact/resources/themes/lara-light-teal/theme.css";

//core
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeflex/primeflex.min.css"

//icons
import "primeicons/primeicons.css";

//components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./login/pages/LoginComponent";
import ProfileComponent from "./user/pages/ProfileComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<LoginComponent />}  />
              <Route path="/profile" element={<ProfileComponent />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
