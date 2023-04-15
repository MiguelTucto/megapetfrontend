import http from "../../shared/services/http-common";

const getAllPets = () => {
    return http.get(`/pets`);
}

const PetsApiService = {
    getAllPets
}

export default PetsApiService