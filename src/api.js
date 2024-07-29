import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const downloadFile = (filename) => {
    return api.get(`/download/${filename}`, { responseType: 'blob' });
};