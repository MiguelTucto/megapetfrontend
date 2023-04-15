import http from "../../shared/services/http-common";

const getShelterById = (id) => {
    return http.get(`/shelters/${id}`);
}

const SheltersApiService = {
    getShelterById
}

export default SheltersApiService;