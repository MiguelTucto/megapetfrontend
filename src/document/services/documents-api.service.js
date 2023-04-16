import http from "../../shared/services/http-common";

const createDocument = (data, adopterId, petId) => {
    return http.post(`/documents/adopter/${adopterId}/${petId}`)
}

const DocumentsApiService = {
    createDocument
}

export default DocumentsApiService;