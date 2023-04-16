import React, { useState, useRef } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import AdoptersApiService from "../../adopter/services/adopters-api.service";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const FirstStep = ({setActiveIndex}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(("USER"))));
    const formik = useFormik({
        initialValues: {
            description: "",
            location: "",
            status: "",
            monthlyIncome: undefined,
            anotherPet: "",
            rank: undefined
        },
        validationSchema: Yup.object({
            description: Yup.string()
                .required("Description is required"),
            location: Yup.string()
                .required("Location is required"),
            status: Yup.string()
                .required("Status is required"),
            monthlyIncome: Yup.number()
                .required("Monthly Income is required"),
            anotherPet: Yup.string()
                .required("Another Pet is required"),
            rank: Yup.number()
                .required("Rank is required"),
        }),
        onSubmit:(values)=>{
            AdoptersApiService.createAdopter(values, user.id)
                .then( response => {
                    console.log(response.data);
                    localStorage.setItem("ADOPTER", JSON.stringify(response.data))
                })
                .catch(e => console.log(e));
        setActiveIndex(1);
        }
    })
    return(
        <>
            <div className="flex align-content-center justify-content-center mt-8 ">
                <div className="surface-card  shadow-2  p-3 border-round w-10 sm:w-full">
                    <div className=" flex-column text-center  mb-3 mt-4">
                        <h4>Complete to be an adopter</h4>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-column  justify-content-center">
                            <div className="field">
                                <label htmlFor="description" className="field">Description</label>
                                <InputText
                                    id="description"
                                    name="description"
                                    type="text"
                                    className="w-full"
                                    {...formik.getFieldProps("description")}
                                />
                                { formik.touched.description && formik.errors.description ? (
                                    <span className="p-error">{formik.errors.description}</span>
                                ) : null}
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
                            <div className="field">
                                <label htmlFor="rank" className="field">Rank</label>
                                <InputText
                                    id="rank"
                                    name="rank"
                                    type="number"
                                    className="w-full"
                                    {...formik.getFieldProps("rank")}
                                />
                                { formik.touched.rank && formik.errors.rank ? (
                                    <span className="p-error">{formik.errors.rank}</span>
                                ) : null}
                            </div>
                            <Button  label="Submit" type="submit" disabled={!formik.isValid}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FirstStep;