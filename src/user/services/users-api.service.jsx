import http from "../../shared/services/http-common";

const getAll = () => {
    return http.get("/users");
}

const UsersApiService = {
    getAll
};

export default UsersApiService;