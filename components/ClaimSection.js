import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { FaMapMarkerAlt, FaLanguage } from "react-icons/fa";
import { Upload, X } from 'lucide-react';

const ClaimSection = () => {
  const [files, setFiles] = useState({
    statement: null,
    agreement: null,
    arbitration: null,
    additional: []
  });

  const handleFileChange = (section, uploadedFile) => {
    if (section === 'additional') {
      setFiles(prev => ({
        ...prev,
        additional: [...prev.additional, uploadedFile]
      }));
    } else {
      setFiles(prev => ({
        ...prev,
        [section]: uploadedFile
      }));
    }
  };

  const removeFile = (section, index = null) => {
    if (section === 'additional') {
      setFiles(prev => ({
        ...prev,
        additional: prev.additional.filter((_, i) => i !== index)
      }));
    } else {
      setFiles(prev => ({
        ...prev,
        [section]: null
      }));
    }
  };

  // Icon components remain the same
  const StatementIcon = () => (
    <img src="/images/statement.png" alt="Statement" className="w-10 h-10" />
  );

  const AgreementIcon = () => (
    <img src="/images/agreement.png" alt="Agreement" className="w-10 h-10" />
  );

  const AdditionalDocsIcon = () => (
    <img src="/images/document.png" alt="Additional Docs" className="w-10 h-10" />
  );

  const UploadIcon = () => (
    <div className="flex justify-center">
      <img src="/images/upload.png" alt="Upload" className="w-9 h-9" />
    </div>
  );

  const FileUploadBox = ({ section, title, handleUpload, file }) => (
    <div 
      onClick={() => document.getElementById(`${section}-upload`).click()}
      className="border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-lg p-6 transition-all duration-200 cursor-pointer group"
    >
      <div className="text-center space-y-2">
        {file ? (
          <div className="relative p-3 bg-gray-50 rounded-lg">
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFile(section);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-600 break-all">{file.name}</p>
          </div>
        ) : (
          <>
            <UploadIcon />
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-xs text-gray-400">Max 2MB, PDF</p>
          </>
        )}
        <input
          id={`${section}-upload`}
          type="file"
          className="hidden"
          accept=".pdf"
          onChange={(e) => handleUpload(e.target.files[0])}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen flex justify-center px-3 sm:px-6">
    {/* Main content container with max-width and full height */}
    <div className="w-full max-w-7xl">
      <div className={`${styles.sidebarSpacing} flex flex-col items-center`}>
        <div className={`${styles["claim-section"]} w-full`}>
          <h2 className={`${styles["section-title"]} text-center sm:text-left`}>
            File your Claim. <span>(Approx 5 Minutes)</span>
          </h2>
  
          <div className={`${styles["claim-container"]} space-y-1`}>
            {/* Claim Value Section */}
            <div className={`${styles["claim-value"]} w-full`}>
              <h3 className={styles.heading}>
                <img
                  src="/images/claim.png"
                  alt="Claim Value"
                  className={`${styles.icon} inline-block w-9 h-9 mr-2`}
                />
                Claim Value
              </h3>
              <label>Contract Value</label>
              <input
                type="text"
                placeholder="10,00,00 USD"
                className={styles.inputField}
              />
              <label>Claim Value</label>
              <input
                type="text"
                placeholder="15,00,00 USD"
                className={styles.inputField}
              />
           <p style={{ color: "#FBC02D", fontWeight: "bold" }}>
  150% of Contract Value
</p>

            </div>
  
            {/* Place Section */}
            <div className={`${styles["claim-place"]} w-full`}>
              <h3 className={styles.heading}>
                <img
                  src="/images/place.png"
                  alt="Place"
                  className={`${styles.icon} inline-block w-9 h-9 mr-2`}
                />
                Place
              </h3>
              <input
                type="text"
                placeholder="Select the Place for proceedings"
                className={styles.input}
              />
              <p>
                Is the place for the proceedings the one mentioned in the
                agreement?
              </p>
              <label>
                <input type="radio" name="place" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="place" value="no" /> No
              </label>
            </div>
  
            {/* Language Section */}
            <div className={`${styles["claim-language"]} w-full`}>
              <h3 className={styles.heading}>
                <img
                  src="/images/language.png"
                  alt="Language"
                  className={`${styles.icon} inline-block w-9 h-9 mr-2`}
                />
                Language
              </h3>
              <input
                type="text"
                placeholder="Select the language for proceedings"
                className={styles.input}
              />
              <p>
                Is the language for the proceedings the one mentioned in the
                agreement?
              </p>
              <label>
                <input type="radio" name="language" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="language" value="no" /> No
              </label>
            </div>
          </div>

            <div className="w-full border-t border-gray-200 my-6"></div>
            
       

            <div className="w-full">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Statement Section */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                    <StatementIcon />
                    <h3 className="text-lg text-gray-700">Statement</h3>
                  </div>
                  <FileUploadBox
                    section="statement"
                    title="Upload Statement"
                    handleUpload={(file) => handleFileChange('statement', file)}
                    file={files.statement}
                  />
                </div>

                {/* Agreement Section */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                    <AgreementIcon />
                    <h3 className="text-lg text-gray-700">Agreement under Disputes</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FileUploadBox
                      section="agreement"
                      title="Upload the Contract"
                      handleUpload={(file) => handleFileChange('agreement', file)}
                      file={files.agreement}
                    />
                    <FileUploadBox
                      section="arbitration"
                      title="Arbitration Agreement"
                      handleUpload={(file) => handleFileChange('arbitration', file)}
                      file={files.arbitration}
                    />
                  </div>
                </div>

                {/* Additional Documentation Section */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                    <AdditionalDocsIcon />
                    <h3 className="text-lg text-gray-700">Additional Documentation</h3>
                  </div>
                  <div className="space-y-4">
                    {files.additional.map((file, index) => (
                      <div key={index} className="relative p-3 bg-gray-50 border border-gray-300 rounded-lg">
                        <button
                          onClick={() => removeFile('additional', index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <p className="text-sm text-gray-600 break-all">{file.name}</p>
                      </div>
                    ))}
                    <div className="flex gap-4">
                      <FileUploadBox
                        section="additional"
                        title="Upload Document"
                        handleUpload={(file) => handleFileChange('additional', file)}
                        file={null}
                      />
                      <button 
                        onClick={() => document.getElementById('additional-upload').click()}
                        className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center text-2xl hover:bg-blue-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimSection;