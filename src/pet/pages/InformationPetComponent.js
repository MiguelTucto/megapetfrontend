import React from "react";
import {Divider} from "primereact/divider";
const  InformationPetComponent = ({pet}) => {
    return(
        <>
            <Divider />
            <div>
                <h5>History of {pet.name}</h5>
                <p>{pet.history}</p>
            </div>
            <Divider />
            <div>
                <h5>Date posted</h5>
                <p>{pet.datePosted}</p>
            </div>
            <Divider />
        </>
    )
}

export default InformationPetComponent;