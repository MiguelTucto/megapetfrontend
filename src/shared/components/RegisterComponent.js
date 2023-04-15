import React, {useRef} from "react";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
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
import {Divider} from "primereact/divider";

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
    return (
      <>
          <div className="card">
              <Toast ref={toast} />
              <div className="flex align-content-center justify-content-center mt-8 ">
                  <div className="surface-card  shadow-2  p-3 border-round w-10 sm:w-2">
                      <div className=" flex-column text-center  mb-3 mt-4">
                          <Image src={megapet} width={250} />
                          <h4>You may complete the fields with your personal information</h4>
                      </div>
                      <div className="">
                          <form onSubmit={formik.handleSubmit}>
                              <div className="">
                                  <div className="flex flex-column justify-content-center">
                                      <div className="field">
                                          <label htmlFor="name" className="field">Name</label>
                                          <InputText
                                              id="name"
                                              name="name"
                                              type="text"
                                              className="w-full"
                                              {...formik.getFieldProps("name")}
                                          />
                                          { formik.touched.name && formik.errors.name ? (
                                              <span className="p-error">{formik.errors.name}</span>
                                          ) : null}
                                      </div>
                                      <div className="field">
                                          <label htmlFor="lastName" className="p-mr-2">Last Name</label>
                                          <InputText
                                              id="lastName"
                                              name="lastName"
                                              type="text"
                                              className="w-full"
                                              {...formik.getFieldProps("lastName")}
                                          />
                                          { formik.touched.lastName && formik.errors.lastName ? (
                                              <span className="p-error">{formik.errors.lastName}</span>
                                          ) : null}
                                      </div>
                                      <div className="field">
                                          <label htmlFor="phone">Phone</label>
                                          <InputText
                                              id="phone"
                                              name="phone"
                                              type="number"
                                              className="w-full"
                                              {...formik.getFieldProps("phone")}
                                          />
                                          { formik.touched.phone && formik.errors.phone ? (
                                              <span className="p-error">{formik.errors.phone}</span>
                                          ) : null}
                                      </div>
                                      <div className="field">
                                          <label htmlFor="image">Image</label>
                                          <InputText
                                              id="image"
                                              name="image"
                                              type="text"
                                              className="w-full"
                                              {...formik.getFieldProps("image")}
                                          />
                                          { formik.touched.image && formik.errors.image ? (
                                              <span className="p-error">{formik.errors.image}</span>
                                          ) : null}
                                      </div>
                                      <div className="field">
                                          <label htmlFor="email">Email</label>
                                          <InputText
                                              id="email"
                                              name="email"
                                              type="text"
                                              className="w-full"
                                              {...formik.getFieldProps("email")}
                                          />
                                          { formik.touched.email && formik.errors.email ? (
                                              <span className="p-error">{formik.errors.email}</span>
                                          ) : null}
                                      </div>
                                      <div className="field">
                                          <label htmlFor="password">Password</label>
                                          <InputText
                                              id="password"
                                              name="password"
                                              type="text"
                                              className="w-full"
                                              {...formik.getFieldProps("password")}
                                          />
                                          { formik.touched.password && formik.errors.password ? (
                                              <span className="p-error">{formik.errors.password}</span>
                                          ) : null}
                                      </div>
                                      <Button label="Submit" type="submit" disabled={!formik.isValid}/>
                                  </div>
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