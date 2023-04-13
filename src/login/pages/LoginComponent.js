import React, {useRef, useState} from "react";
import UsersApiService from "../../user/services/users-api.service";
import {useFormik} from "formik";
import {InputText} from "primereact/inputtext";
import {Image} from "primereact/image";
import megapet from "../../shared/img/megapet.png";
import {Button} from "primereact/button";
import { Toast } from 'primereact/toast';
import {useNavigate} from "react-router-dom";
const LoginComponent = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const loginFunction = async (values) => {
        await UsersApiService.login(values)
            .then(response => {
                toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
                localStorage.setItem("USER", JSON.stringify(response.data))
                navigate("/home");
            })
            .catch(e => console.log(e))
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            if (values) {
                loginFunction(values);
            } else {
                toast.current.show({severity:'error', summary: 'Success', detail:'Message Content', life: 3000});

            }
        }
        })
    return(
        <div className="card">
            <Toast ref={toast} />
            <div className="flex align-content-center justify-content-center mt-8 ">
                <div className="  mt-8  border-round  w-8 sm:w-2">
                    <div className="flex flex-column text-center mb-3 mt-8">
                        <Image src={megapet} width={250} />
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={() => setVisible(false)}>Create now!</a>
                    </div>
                    <div className="">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-column align-items-center justify-content-center">
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Username"
                                        {...formik.getFieldProps("email")}
                                    />
                                </div>
                                <div className="p-inputgroup flex-1 mt-2 ">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-key"></i>
                                    </span>
                                    <InputText
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        {...formik.getFieldProps("password")}
                                    />
                                </div>
                                <Button type="submit" label="Submit" className=" mt-2"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginComponent;