import http from "../../shared/services/http-common";

const getAll = () => {
    return http.get(`/users`);
}

const login = (values) => {
    return http.post(`users/login`, {
        email: values.email,
        password: values.password
    });
}

const getUserById = (id) => {
    return http.get(`/users/${id}`);
}

const updateUser = (id, data) => {
    return http.put(`/users/${id}`, data)
}

const createUser = (data) => {
    return http.post(`/users`, data);
}

const UsersApiService = {
    getAll,
    login,
    getUserById,
    updateUser,
    createUser
};

export default UsersApiService;