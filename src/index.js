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
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./login/pages/LoginComponent";
import ProfileComponent from "./user/pages/ProfileComponent";
import NavbarComponent from "./shared/components/NavbarComponent";
import './index.css';
import UsersList from "./user/pages/UsersList";
import TablePetComponent from "./pet/pages/TablePetComponent";
import DocumentComponent from "./document/pages/DocumentComponent";
import ToolbarComponent from "./shared/components/ToolbarComponent";
import AdoptionListComponent from "./document/pages/AdoptionListComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<LoginComponent />}  />
              <Route path="home/*" element={<ToolbarComponent />}>
                  <Route index element={<TablePetComponent />} />
                  <Route path="profile" element={<ProfileComponent />} />
                  <Route path="adoption" element={<AdoptionListComponent />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
