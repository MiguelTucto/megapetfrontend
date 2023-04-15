import { Menubar } from 'primereact/menubar';

import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
const NavbarComponent = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: "Search",
            icon: 'pi pi-fw pi-search',
            command: () => {
                navigate("/home");
            }
        },
        {
            label: "Profile",
            icon: 'pi pi-fw pi-user',
            command: () => {
                navigate("profile")
            }
        },
        {
            label: "Adoptions",
            icon: 'pi pi-fw pi-list',
            command: () => {
                navigate("adoption")
            }
        }
    ]
    return (
        <>
            <Menubar model={items} />
            <Outlet />
        </>
    );
}

export default NavbarComponent;