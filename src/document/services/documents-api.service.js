import http from "../../shared/services/http-common";

const getAllDocuments = () => {
    return http.get(`/documents`)
}

const createDocument = (data, adopterId, petId) => {
    return http.post(`/documents/adopter/${adopterId}/pet/${petId}`, data)
}

const DocumentsApiService = {
    createDocument,
    getAllDocuments
}

export default DocumentsApiService;