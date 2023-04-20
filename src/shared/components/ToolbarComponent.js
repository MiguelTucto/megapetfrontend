import { Toolbar } from 'primereact/toolbar';
import React, {Fragment, useRef, useState} from "react";
import {Button} from "primereact/button";
import {Outlet, useNavigate} from "react-router-dom";
import {Image} from "primereact/image";
import megapet from "../img/megapetv2.png"
import { Menu } from 'primereact/menu';

const ToolbarComponent = () => {
    const navigate = useNavigate();

    const startContent = (
        <Image src={megapet} width="210" height="60"/>
    )
    const menu = useRef(null);
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Search',
            icon: "pi pi-search",
            command: () => {
                navigate("/home");
            }
        },
        {
            label:"User",
            icon: "pi pi-user",
            command: () => {
                navigate("profile");
            }
        },
        {
            label: "Adoptions",
            icon: "pi pi-list",
            command: () => {
                navigate("adoption");
            }
        },
        {
            label: "Sign Out",
            icon: "pi pi-sign-out",
            command: () => {
                localStorage.clear();
                navigate("/");
            }
        }
    ];

    const endContent = (
        <Fragment>
            <div className="flex gap-3  inline-flex">
                <Button label="Search" icon="pi pi-search" onClick={() => {navigate("/home")}} className="hidden md:inline-flex"/>
                <Button label="Profile" icon="pi pi-user" onClick={()=> {navigate("profile")}} className="hidden md:inline-flex"/>
                <div className="sm:hidden appearance-none">
                    <Button icon="pi pi-user" rounded text raised className="bg-teal-700 text-white" onClick={(e) => menu.current.toggle(e)}/>
                </div>
                <Button label="Adoptions" icon="pi pi-list" onClick={() => {navigate("adoption")}} className="hidden md:inline-flex"/>
                <Button label="Sign Out" icon="pi pi-sign-out" onClick={() => {localStorage.clear(); navigate("/");}} className="hidden md:inline-flex"/>
            </div>
        </Fragment>
    )

    return (
        <>
            <Toolbar start={startContent} end={endContent} className="bg-teal-100"/>
            <Menu model={items} popup ref={menu} />
            <Outlet />
        </>
    );
}

export default ToolbarComponent;