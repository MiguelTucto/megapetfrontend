import React, {useEffect, useState} from "react";
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import PetsApiService from "../services/pets-api.service";
import {Image} from "primereact/image";
import InformationPetComponent from "./InformationPetComponent";
import {Dialog} from "primereact/dialog";
import SheltersApiService from "../../shelter/services/shelters-api.service";
import UsersApiService from "../../user/services/users-api.service";
import {useNavigate} from "react-router-dom";
const TablePetComponent = () => {
    const [pets, setPets] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedPet, setSelectedPet] = useState([]);
    const [shelter, setShelter] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const getAllPets = () => {
        PetsApiService.getAllPets()
            .then(response => { setPets(response.data.content)})
            .catch(e => console.log(e));
    }
    const retrieveShelter = (set) => {
        SheltersApiService.getShelterById(set.shelterId)
            .then(response => setShelter(response.data))
            .catch(e => console.log(e))
    }

    const retrieveUser = (shelterId) => {
        UsersApiService.getUserById(shelterId.userId)
            .then(response => setUser(response.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getAllPets();
    }, [getAllPets])

    const gridView = (pet) => {
        const showInformation = () => {
            setVisible(true);
            setSelectedPet(pet);
            retrieveShelter(pet);
        }

        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round sm:w-8 w-full ">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{pet.typeOfPet}</span>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5 justify-content-center">
                        <Image className=" shadow-2 block xl:block mx-auto border-round" width="200" height="200" src={pet.image} />
                        <div className="text-2xl font-bold">{pet.name}</div>
                        <h2 className="flex flex-row align-items-center justify-content-center">{pet.likes}<i className="pi pi-heart-fill ml-2 text-red-500 text-4xl"></i></h2>
                        <div className="gap-5">
                            <Button icon="pi pi-window-maximize" rounded className="mr-5" onClick={showInformation}/>
                            <Button icon="pi pi-shield" rounded onClick={() => { navigate("adoption")}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (pet) => {
        return gridView(pet);
    }

    return(
        <>
            <DataView value={pets} itemTemplate={itemTemplate}  />
            <Dialog onHide={() => setVisible(false)} header={selectedPet.name} visible={visible} >
                { selectedPet && <InformationPetComponent pet={selectedPet} shelter={shelter}  />}
            </Dialog>
        </>
    );
}

export default TablePetComponent;