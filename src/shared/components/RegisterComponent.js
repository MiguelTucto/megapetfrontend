import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import UsersApiService from "../../user/services/users-api.service";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const RegisterComponent = () => {
    const toast = useRef(null);
    const navigate = useNavigate();

    const registerFunction = async (values) => {
        await UsersApiService.createUser(values)
            .then(() => {
                window.alert("Close and log in to enjoy eRentCar");
            })
            .catch( e => console.log(e));
    }

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
                .min('Put more than 5 letters'),
            lastName: Yup.string()
                .required("Last Name is required")
                .min('Put more than 5 letters'),
            phone: Yup.number()
                .required("Phone is required"),
            image: Yup.string()
                .required("Image is required")
                .min("Put more than 15 letters"),
            email: Yup.string()
                .required("Email is required"),
            password: Yup.string()
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            UsersApiService.createUser(values)
                .then(response => {
                    console.log(response);
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
          <div className="card flex align-items-center justify-content-center">
              <form onSubmit={formik.handleSubmit}>
                    <span className="p-float-label ">
                      <InputText
                          id="name"
                          name="name"
                          type="text"
                          className={classNames({ 'p-invalid': isFormFieldInvalid("name")})}
                          {...formik.getFieldProps("name")}
                      />
                      <label htmlFor="name">Name</label>
                  </span>
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
                  </span>
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
                  <Button label="Submit" type="submit" className="m-5" />
              </form>
          </div>
      </>
    );

}

export default RegisterComponent;