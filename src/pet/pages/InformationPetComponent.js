import React, {useEffect, useState} from "react";
import {Divider} from "primereact/divider";
import SheltersApiService from "../../shelter/services/shelters-api.service";
import UsersApiService from "../../user/services/users-api.service";
const  InformationPetComponent = ({pet, shelter}) => {
    const [user, setUser] = useState([]);

    const retrieveUsers = async () => {
        await UsersApiService.getUserById(shelter.userId)
            .then(response => setUser(response.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        retrieveUsers();
    }, [retrieveUsers])

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
            <h5>Shelter's Information</h5>
            <div>
                <p><i className="pi pi-user mr-1"></i>{user.name}</p>
                <p><i className="pi pi-thumbs-up-fill mr-1"></i>{shelter.rank} likes</p>
                <p><i className="pi pi-users mr-1"></i>{shelter.vetsCertified} vets certified</p>
                <p><i className="pi pi-comment mr-1"></i>{user.email}</p>
            </div>
        </>
    )
}

export default InformationPetComponent;