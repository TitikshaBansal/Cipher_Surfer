import React, { useState } from 'react';
import { uploadFile } from '../api'; // Importing the uploadFile function from api.js

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (file) {
            try {
                await uploadFile(file);
                alert('File uploaded successfully');
            } catch (error) {
                console.error('There was an error uploading the file!', error);
                alert('Error uploading file');
            }
        } else {
            alert('Please select a file first');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload File</button>
        </div>
    );
};

export default FileUpload;