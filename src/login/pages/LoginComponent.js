import React, {useRef, useState} from "react";
import UsersApiService from "../../user/services/users-api.service";
import {useFormik} from "formik";
import {InputText} from "primereact/inputtext";
import {Image} from "primereact/image";
import megapet from "../../shared/img/megapet.png";
import {Button} from "primereact/button";
import { Toast } from 'primereact/toast';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import RegisterComponent from "../../shared/components/RegisterComponent";
import {classNames} from "primereact/utils";
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
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required"),
            password: Yup.string()
                .required("Password is required"),
        })
        })

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>
    }



    return(
        <>
            {
                visible
                ? (
                        <div className="card">
                            <Toast ref={toast} />
                            <div className="flex align-content-center justify-content-center mt-8 ">
                                <div className="surface-card  shadow-2 mt-8 p-3  border-round  w-10 sm:w-2">
                                    <div className="flex flex-column text-center mb-3 mt-4">
                                        <Image src={megapet} width={250} />
                                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer hover:text-bluegray-500" onClick={() => setVisible(false)}>Create now!</a>
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
                                                        className={classNames(({'p-invalid':isFormFieldInvalid('email')}))}
                                                        {...formik.getFieldProps("email")}
                                                    />
                                                </div>
                                                { getFormErrorMessage('email') }
                                                <div className="p-inputgroup flex-1 mt-2 ">
                                                    <span className="p-inputgroup-addon">
                                                        <i className="pi pi-key"></i>
                                                    </span>
                                                    <InputText
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        className={classNames(({'p-invalid':isFormFieldInvalid('password')}))}
                                                        {...formik.getFieldProps("password")}
                                                    />
                                                </div>
                                                { getFormErrorMessage('password') }
                                                <Button type="submit" label="Submit" className=" mt-3"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <RegisterComponent setVisible={setVisible}/>
                    )
            }
        </>
    );
}

export default LoginComponent;