import React, {useEffect, useState} from "react";
import {Image} from "primereact/image";
import {Divider} from "primereact/divider";
import { Badge } from 'primereact/badge';
import { Tooltip } from 'primereact/tooltip';
import {InputText} from "primereact/inputtext";
import UsersApiService from "../services/users-api.service";
import {Button} from "primereact/button";

const ProfileComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(("USER"))));
    const [visible, setVisible] = useState(false);
    const [editableFields, setEditableFields] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        setEditableFields({
            name: user.name,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            password: user.password
        })
    }, [user])

    const handleChange = (event, field) => {
        const value = event.target.value;
        setEditableFields({...editableFields, [field]: value})
    }

    const handleUpdate =  (field) => {
        const updateUser = {...user, [field]: editableFields[field]};

        UsersApiService.updateUser(user.id, updateUser)
            .then(response => {
                console.log(response);
                localStorage.setItem("USER", JSON.stringify(updateUser));
                setUser(updateUser);
                setVisible(false)
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <div className="surface-section ">
                    <h1 className="text-3xl font-bold sm:ml-8 ml-1">Profile</h1>
                    <div className=" flex flex-column justify-content-center align-items-center gap-4 sm:gap-8 sm:flex-row">
                        <Image src={user.image} width="200" height="200" className="rounded-full mt-2"/>
                        <div className="flex flex-column sm:w-3 w-11 ">
                            <Divider />
                            <div className="flex flex-row justify-content-between align-items-center border-transparent  hover:shadow-8 border-round-2xl transition-ease-in transition-duration-500 cursor-pointer"  onClick={() => { setVisible(true)}}>
                                <h4 >First Name</h4>
                                {
                                    !visible ? <h1>{user.name}</h1> :
                                        <>
                                            <InputText value={editableFields.name} onChange={(e) => handleChange(e, "name")} placeholder="Put your new name" />
                                            <Button icon="pi pi-check" className="ml-2 bg-primary-reverse" onClick={() => {handleUpdate("name")}} />
                                        </>
                                }
                            </div>
                            <Divider />
                            <div className="flex flex-row justify-content-between align-items-center border-transparent  hover:shadow-8 border-round-2xl transition-ease-in transition-duration-500 cursor-pointer">
                                <h4 >Last Name</h4>
                                {
                                    !visible ? <h1>{user.lastName}</h1> :
                                        <>
                                            <InputText value={editableFields.lastName} onChange={(e) => handleChange(e, "lastName")} placeholder="Put your new last name" />
                                            <Button icon="pi pi-check" className="ml-2 bg-primary-reverse" onClick={() => {handleUpdate("lastName")}} />
                                        </>
                                }
                            </div>
                            <Divider />
                            <div className="flex flex-row justify-content-between align-items-center border-transparent  hover:shadow-8 border-round-2xl transition-ease-in transition-duration-500 cursor-pointer">
                                <h4 >Phone</h4>
                                {
                                    !visible ? <h1>{user.phone}</h1> :
                                        <>
                                            <InputText value={editableFields.phone} onChange={(e) => handleChange(e, "phone")} placeholder="Put your new phone" />
                                            <Button icon="pi pi-check" className="ml-2 bg-primary-reverse" onClick={() => {handleUpdate("phone")}} />
                                        </>
                                }
                            </div>
                            <Divider />
                            <div className="flex flex-row justify-content-between align-items-center border-transparent  hover:shadow-8 border-round-2xl transition-ease-in transition-duration-500 cursor-pointer">
                                <h4 >Email</h4>
                                {
                                    !visible ? <h1>{user.email}</h1> :
                                        <>
                                            <InputText value={editableFields.email} onChange={(e) => handleChange(e, "email")} placeholder="Put your new email" />
                                            <Button icon="pi pi-check" className="ml-2 bg-primary-reverse" onClick={() => {handleUpdate("email")}} />
                                        </>
                                }
                            </div>
                            <Divider />
                            <div className="flex flex-row justify-content-between align-items-center border-transparent  hover:shadow-8 border-round-2xl transition-ease-in transition-duration-500 cursor-pointer">
                                <h4 >Password</h4>
                                {
                                    !visible ? <h1>{user.password}</h1> :
                                        <>
                                            <InputText value={editableFields.password} onChange={(e) => handleChange(e, "password")} placeholder="Put your new password" />
                                            <Button icon="pi pi-check" className="ml-2 bg-primary-reverse" onClick={() => {handleUpdate("password")}} />
                                        </>
                                }
                            </div>
                            <Divider />
                        </div>
                    </div>
            </div>
        </>
    );
}

export default ProfileComponent;