import React, { useState, useRef } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import DocumentsApiService from "../services/documents-api.service";
import {Toast} from "primereact/toast";
import {useNavigate} from "react-router-dom";

const SecondStep = ({pet, setVisibleDocument}) => {
    const [adopter, setAdopter] = useState(JSON.parse(localStorage.getItem("ADOPTER")));
    const toast = useRef(null);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            detail: "",
            dateAdoption: "",
            location: "",
            status: "",
            monthlyIncome: undefined,
            anotherPet: ""
        },
        validationSchema: Yup.object({
            detail: Yup.string()
                .required("Detail is required"),
            location: Yup.string()
                .required("Location is required"),
            dateAdoption: Yup.string()
                .required("Date Adoption is required"),
            status: Yup.string()
                .required("Status is required"),
            monthlyIncome: Yup.number()
                .required("Monthly Income is required"),
            anotherPet: Yup.string()
                .required("Another Pet is required")
        }),
        onSubmit:(values) => {
            console.log(values);
            DocumentsApiService.createDocument(values, adopter.id, pet.id)
                .then(response => {
                    console.log(response)
                    toast.current.show({ severity: 'success', summary: 'Pet adopted!', detail: 'You are an adopter. Congratulations!!', sticky: true });
                    setVisibleDocument(false);
                })
                .catch(e => console.log(e));
        }
    })
    return (
        <>
            <Toast ref={toast} />
            <div className="flex align-content-center justify-content-center mt-8 ">
                <div className="surface-card  shadow-2  p-3 border-round w-10 sm:w-full">
                    <div className=" flex-column text-center  mb-3 mt-4">
                        <h4>Complete to be an adopter</h4>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-column  justify-content-center">
                            <div className="field">
                                <label htmlFor="detail" className="field">Detail</label>
                                <InputText
                                    id="detail"
                                    name="detail"
                                    type="text"
                                    className="w-full"
                                    {...formik.getFieldProps("detail")}
                                />
                                { formik.touched.detail && formik.errors.detail ? (
                                    <span className="p-error">{formik.errors.detail}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="location" className="field">Location</label>
                            <InputText
                                id="location"
                                name="location"
                                type="text"
                                className="w-full"
                                {...formik.getFieldProps("location")}
                            />
                            { formik.touched.location && formik.errors.location ? (
                                <span className="p-error">{formik.errors.location}</span>
                            ) : null}
                        </div>
                        <div className="field">
                            <label htmlFor="dateAdoption" className="field">Adoption's Date</label>
                            <InputText
                                id="dateAdoption"
                                name="dateAdoption"
                                type="text"
                                className="w-full"
                                {...formik.getFieldProps("dateAdoption")}
                            />
                            { formik.touched.dateAdoption && formik.errors.dateAdoption ? (
                                <span className="p-error">{formik.errors.dateAdoption}</span>
                            ) : null}
                        </div>
                        <div className="field">
                            <label htmlFor="status" className="field">Status</label>
                            <InputText
                                id="status"
                                name="status"
                                type="text"
                                className="w-full"
                                {...formik.getFieldProps("status")}
                            />
                            { formik.touched.status && formik.errors.status ? (
                                <span className="p-error">{formik.errors.status}</span>
                            ) : null}
                        </div>
                        <div className="field">
                            <label htmlFor="monthlyIncome" className="field">Monthly Income</label>
                            <InputText
                                id="monthlyIncome"
                                name="monthlyIncome"
                                type="number"
                                className="w-full"
                                {...formik.getFieldProps("monthlyIncome")}
                            />
                            { formik.touched.monthlyIncome && formik.errors.monthlyIncome ? (
                                <span className="p-error">{formik.errors.monthlyIncome}</span>
                            ) : null}
                        </div>
                        <div className="field">
                            <label htmlFor="anotherPet" className="field">Another Pet</label>
                            <InputText
                                id="anotherPet"
                                name="anotherPet"
                                type="text"
                                className="w-full"
                                {...formik.getFieldProps("anotherPet")}
                            />
                            { formik.touched.anotherPet && formik.errors.anotherPet ? (
                                <span className="p-error">{formik.errors.anotherPet}</span>
                            ) : null}
                        </div>
                        <Button label="Submit" type="submit" disabled={!formik.isValid} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default SecondStep;