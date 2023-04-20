import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, {useEffect, useState} from "react";
import {Button} from "primereact/button";
import DocumentsApiService from "../services/documents-api.service";
const AdoptionListComponent = () => {

    const [documents, setDocuments] = useState([]);


    const retrieveDocuments = () => {
        DocumentsApiService.getAllDocuments()
            .then(response => {
                console.log(response.data)
                setDocuments(response.data.content);
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        retrieveDocuments();
    }, [retrieveDocuments]);

    const Document = ({documentList}) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round sm:w-8 w-full ">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">Document</span>
                            <h4>{documentList.detail}</h4>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5 justify-content-center">
                        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="flex align-items-center gap-2">
                                <span className="font-semibold">Date</span>
                                <h6>{documentList.dateAdoption}</h6>
                            </div>
                        </div>
                        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="flex align-items-center gap-2">
                                <span className="font-semibold">Location</span>
                                <h6>{documentList.location}</h6>
                            </div>
                        </div>
                        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="flex align-items-center gap-2">
                                <span className="font-semibold">Status</span>
                                <h6>{documentList.status}</h6>
                            </div>
                        </div>
                        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="flex align-items-center gap-2">
                                <span className="font-semibold">Monthly Income</span>
                                <h6>$/.{documentList.monthlyIncome}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <>
            {
                documents.map(docs => <Document documentList={docs}/>)
            }
        </>
    );
}

export default AdoptionListComponent;