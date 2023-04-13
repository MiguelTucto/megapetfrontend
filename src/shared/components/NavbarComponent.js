import { Menubar } from 'primereact/menubar';

import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
const NavbarComponent = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: "Users",
            icon: 'pi pi-fw pi-database',
            command: () => {
                navigate("/profile")
            }
        },
        {
            label: "Form",
            icon: 'pi pi-fw pi-user',
            url: '/user-form'
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