import React, { useState, useRef } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';

const SecondStep = ({pet}) => {
    const [adopter, setAdopter] = useState(JSON.parse(localStorage.getItem("ADOPTER")));

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

        }
    })
    return (
        <>
            <h1>{pet.name}</h1>
            <h1>{adopter.id}</h1>
        </>
    );
}

export default SecondStep;