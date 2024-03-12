import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function Baz() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState('');
  const allowedFiles = ['application/pdf'];

  const handleFile = (e) => {
    let selectedfile = e.target.files[0];
    if (selectedfile) {
      if (selectedfile && allowedFiles.includes(selectedfile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedfile);
        reader.onloadend = (e) => {
          setPdfError('');
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError('');
        setPdfFile('not valid pdf');
      }
    } else {
      console.log("baz");
    }
  };

  return (
    <div className="container">
      <form>
        <label>
          <h5>UPLOAD PDF</h5>
        </label>
        <br></br>
        <input type="file" className="form-control" onChange={handleFile}></input>
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>

      <h4>view pdf </h4>
      <div className="viewer">
        {pdfFile && (
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
        {!pdfFile && <>NO FILE IS SELECTED</>}
      </div>
    </div>
  );
}

export default Baz;
