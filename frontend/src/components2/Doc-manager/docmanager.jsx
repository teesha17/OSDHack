import React, { useState } from 'react';
import "./docmanager.css";
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";
import {
    CTable,
    CTableHead,
    CTableBody,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AppDoc() {
    const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
    const [fileList, setFileList] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                const fileData = new FormData();
                fileData.append("file", selectedFile);
                const responseData = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: fileData,
                    headers: {
                        pinata_api_key: "6022956191505df3cffa",
                        pinata_secret_api_key: "5b7cca4f723165bf53abba4022086e2cec669c70ab889824a6fbd7e2076f223d",
                        "Content-Type": "multipart/form-data",
                    }
                });
                const imageUrl = "https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash;
                const fileName = selectedFile.name;
                const newFileList = [...fileList, { name: fileName, url: imageUrl }];
                setFileList(newFileList);
                setSelectedFile(null); // Reset selected file after upload
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("No file selected.");
        }
    }

    return (
        <div>
            <h1>Doc Manager- Manage All Your Files/Bills (decentralised)</h1>
            <form>
                <div>Enter Name of the File:<input type="text"></input></div>
                <FileUploader
                    multiple={false} // Allow only single file to be dropped
                    handleChange={(file) => setSelectedFile(file)}
                    name="file"
                    types={fileTypes}
                    style={{height:"20vh", width:"30vh", maxWidth:"30vh" }}
                />
                <button type="button" onClick={handleUpload}>Upload</button>
            </form>
            <div className="table">
                <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Image URL</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {fileList.map((file, index) => (
                            <CTableRow key={index}>
                                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                <CTableDataCell>{file.name}</CTableDataCell>
                                <CTableDataCell><a href={file.url} target="_blank" rel="noopener noreferrer">{file.url}</a></CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </div>
            {/* <div >
                <CTable striped hover className="table">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                    <CTableRow >
                    <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                </CTableBody>
                </CTable>
            </div> */}
        
        </div>
    );
}

export default AppDoc;