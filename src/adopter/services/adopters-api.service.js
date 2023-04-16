import http from "../../shared/services/http-common";

const createAdopter = (data, userId) => {
    return http.post(`/adopters/user/${userId}`, data)
}

const AdoptersApiService = {
    createAdopter
}

export default AdoptersApiService;