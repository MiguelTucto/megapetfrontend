import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {classNames} from "primereact/utils";
import UsersApiService from "../../user/services/users-api.service";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Image} from "primereact/image";
import megapet from "../img/megapet.png";
import {Toast} from "primereact/toast";

const RegisterComponent = ({setVisible}) => {
    const toast = useRef(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            phone: null,
            image: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required")
                .min(5, 'Put more than 5 letters'),
            lastName: Yup.string()
                .required("Last Name is required")
                .min(5, 'Put more than 5 letters'),
            phone: Yup.number()
                .required("Phone is required"),
            image: Yup.string()
                .required("Image is required"),
            email: Yup.string()
                .required("Email is required"),
            password: Yup.string()
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            UsersApiService.createUser(values)
                .then(response => {
                    toast.current.show({severity:'success', summary: '!Registration Complete!', detail:'Enjoy MegaPet. Thank you!', life: 3000});
                    console.log(response);
                    setVisible(true);
                })
                .catch(e => console.log(e));
        }
    })

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>
    }

    return (
      <>
          <div className="card">
              <Toast ref={toast} position="center" />
              <div className="flex align-content-center justify-content-center mt-8">
                  <div className="surface-card  shadow-2 mt-8 p-3 border-round w-10 sm:w-2">
                      <div className="flex flex-column text-center justify-content-center align-content-center mb-3 mt-4">
                          <Image src={megapet} width={250} />
                          <h4>Complete with your personal information to enjoy MegaPet</h4>
                      </div>
                      <div className="">
                          <form onSubmit={formik.handleSubmit}>
                              <div className="flex flex-column align-items-center justify-content-center">
                                  <span className="p-float-label ">
                                    <InputText
                                        id="name"
                                        name="name"
                                        type="text"
                                        className={classNames({ 'p-invalid': isFormFieldInvalid("name")})}
                                        {...formik.getFieldProps("name")}
                                    />
                                    <label htmlFor="name">Name</label>
                                    </ span>
                                    { getFormErrorMessage('name') }
                                  <span className="p-float-label ">
                                    <InputText
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        className={classNames({ 'p-invalid': isFormFieldInvalid("lastName")})}
                                        {...formik.getFieldProps("lastName")}
                                    />
                                      <label htmlFor="Last Name">Last Name</label>
                                    </ span>
                                    { getFormErrorMessage('lastName') }
                                  <span className="p-float-label ">
                                    <InputText
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        className={classNames({ 'p-invalid': isFormFieldInvalid("phone")})}
                                        {...formik.getFieldProps("phone")}
                                    />
                                    <label htmlFor="phone">Phone</label>
                                  </span>
                                  { getFormErrorMessage('phone') }
                                  <span className="p-float-label ">
                                      <InputText
                                        id="image"
                                        name="image"
                                        type="text"
                                        className={classNames({ 'p-invalid': isFormFieldInvalid("image")})}
                                        {...formik.getFieldProps("image")}
                                    />
                                    <label htmlFor="image">Image URL</label>
                                  </span>
                                  { getFormErrorMessage('image') }
                                  <span className="p-float-label ">
                                    <InputText
                                        id="email"
                                        name="email"
                                        type="text"
                                        className={classNames({ 'p-invalid': isFormFieldInvalid("email")})}
                                        {...formik.getFieldProps("email")}
                                    />
                                    <label htmlFor="email">Email</label>
                                  </span>
                                  { getFormErrorMessage('email') }
                                  <span className="p-float-label ">
                                    <InputText
                                        id="password"
                                        name="password"
                                        type="text"
                                        className={classNames({ 'p-invalid': isFormFieldInvalid("password")})}
                                        {...formik.getFieldProps("password")}
                                    />
                                    <label htmlFor="password">Password</label>
                                  </span>
                                  { getFormErrorMessage('password') }
                                  <Button label="Submit" type="submit" className="m-3" />
                              </div>
                          </form>
                      </div>
                  </div>
                  </div>
          </div>
      </>
    );

}

export default RegisterComponent;