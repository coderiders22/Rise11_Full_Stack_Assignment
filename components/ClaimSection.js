import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { Upload, X } from 'lucide-react';


const ClaimSection = () => {
  const [files, setFiles] = useState({
    statement: null,
    agreement: null,
    arbitration: null,
    additional: []
  });

  const [formData, setFormData] = useState({
    contractValue: "",
    claimValue: "",
    currency: "USD",
    place: "",
    isPlaceFromAgreement: "",
    language: "",
    isLanguageFromAgreement: "",
  });

  const [percentage, setPercentage] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
  

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (field === 'contractValue' || field === 'claimValue') {
      calculatePercentage(
        field === 'contractValue' ? value : formData.contractValue,
        field === 'claimValue' ? value : formData.claimValue
      );
    }
  };

  const calculatePercentage = (contract, claim) => {
    const contractNum = parseFloat(contract.replace(/,/g, "")) || 0;
    const claimNum = parseFloat(claim.replace(/,/g, "")) || 0;
    if (contractNum > 0) {
      const percentageValue = ((claimNum / contractNum) * 100).toFixed(2);
      setPercentage(`${percentageValue}% of Contract Value`);
    } else {
      setPercentage("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.contractValue) newErrors.contractValue = "Contract value is required";
    if (!formData.claimValue) newErrors.claimValue = "Claim value is required";
    if (!formData.place) newErrors.place = "Place is required";
    if (!formData.isPlaceFromAgreement) newErrors.isPlaceFromAgreement = "Please select if place is from agreement";
    if (!formData.language) newErrors.language = "Language is required";
    if (!formData.isLanguageFromAgreement) newErrors.isLanguageFromAgreement = "Please select if language is from agreement";
    if (!files.statement) newErrors.statement = "Statement file is required";
    if (!files.agreement) newErrors.agreement = "Agreement file is required";
    if (!files.arbitration) newErrors.arbitration = "Arbitration agreement is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
   
      console.log("Form Data:", formData);
      console.log("Files:", files);
      setShowSuccessMessage(true);
      
    
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } else {
 
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };


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

  const FileUploadBox = ({ section, title, handleUpload, file, error }) => (
    <div className="space-y-2">
      <div 
        onClick={() => document.getElementById(`${section}-upload`).click()}
        className={`border-2 border-dashed ${error ? 'border-red-500' : 'border-gray-300 hover:border-blue-500'} rounded-lg p-6 transition-all duration-200 cursor-pointer group`}
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
      {error && <p className="text-red-500 text-sm error-message">{error}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full min-h-screen flex justify-center px-3 sm:px-6">
      <div className="w-full max-w-7xl">
        <div className={`${styles.sidebarSpacing} flex flex-col items-center`}>
          <div className={`${styles["claim-section"]} w-full`}>
            <h2 className={`${styles["section-title"]} text-center sm:text-left`}>
              File your Claim. <span>(Approx 5 Minutes)</span>
            </h2>
            
            {showSuccessMessage && (
  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative">
    <p>Claim submitted successfully!</p>
  </div>
)}

            <div className={`${styles["claim-container"]} space-y-6`}>
      
              <div className={`${styles["claim-value"]} w-full`}>
                <h3 className={styles.heading}>
                  <img
                    src="/images/claim.png"
                    alt="Claim Value"
                    className={`${styles.icon} inline-block w-9 h-9 mr-2`}
                  />
                  Claim Value
                </h3>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Contract Value</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <input
                        id="contractValue"
                        type="number"
                        value={formData.contractValue}
                        onChange={(e) => handleFormChange('contractValue', e.target.value)}
                        placeholder="Enter value"
                        className={`${styles.inputField} w-full ${errors.contractValue ? 'border-red-500' : ''}`}
                      />
                      {errors.contractValue && (
                        <p className="text-red-500 text-sm mt-1 error-message">{errors.contractValue}</p>
                      )}
                    </div>
                    <select
                      value={formData.currency}
                      onChange={(e) => handleFormChange('currency', e.target.value)}
                      className={`${styles.currencyDropdown} flex-none`}
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="INR">INR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Claim Value</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <input
                        id="claimValue"
                        type="number"
                        value={formData.claimValue}
                        onChange={(e) => handleFormChange('claimValue', e.target.value)}
                        placeholder="Enter value"
                        className={`${styles.inputField} w-full ${errors.claimValue ? 'border-red-500' : ''}`}
                      />
                      {errors.claimValue && (
                        <p className="text-red-500 text-sm mt-1 error-message">{errors.claimValue}</p>
                      )}
                    </div>
                    <select
                      value={formData.currency}
                      onChange={(e) => handleFormChange('currency', e.target.value)}
                      className={`${styles.currencyDropdown} flex-none`}
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="INR">INR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>
                </div>

     
                {percentage && (
                  <p className="mt-2 text-yellow-600 font-bold">
                    {percentage}
                  </p>
                )}
              </div>

       
              <div className={`${styles["claim-place"]} w-full`}>
                <h3 className={styles.heading}>
                  <img
                    src="/images/place.png"
                    alt="Place"
                    className={`${styles.icon} inline-block w-9 h-9 mr-2`}
                  />
                  Place
                </h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Select the Place for proceedings"
                    value={formData.place}
                    onChange={(e) => handleFormChange('place', e.target.value)}
                    className={`${styles.input} ${errors.place ? 'border-red-500' : ''}`}
                  />
                  {errors.place && (
                    <p className="text-red-500 text-sm error-message">{errors.place}</p>
                  )}
                </div>
                <p className="mt-4">
                  Is the place for the proceedings the one mentioned in the agreement?
                </p>
                <div className="space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="place"
                      value="yes"
                      checked={formData.isPlaceFromAgreement === "yes"}
                      onChange={(e) => handleFormChange('isPlaceFromAgreement', e.target.value)}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="place"
                      value="no"
                      checked={formData.isPlaceFromAgreement === "no"}
                      onChange={(e) => handleFormChange('isPlaceFromAgreement', e.target.value)}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {errors.isPlaceFromAgreement && (
                  <p className="text-red-500 text-sm mt-1 error-message">{errors.isPlaceFromAgreement}</p>
                )}
              </div>
              <div className={`${styles["claim-language"]} w-full`}>
                <h3 className={styles.heading}>
                  <img
                    src="/images/language.png"
                    alt="Language"
                    className={`${styles.icon} inline-block w-9 h-9 mr-2`}
                  />
                  Language
                </h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Select the language for proceedings"
                    value={formData.language}
                    onChange={(e) => handleFormChange('language', e.target.value)}
                    className={`${styles.input} ${errors.language ? 'border-red-500' : ''}`}
                  />
                  {errors.language && (
                    <p className="text-red-500 text-sm error-message">{errors.language}</p>
                  )}
                </div>
                <p className="mt-4">
                  Is the language for the proceedings the one mentioned in the agreement?
                </p>
                <div className="space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="language"
                      value="yes"
                      checked={formData.isLanguageFromAgreement === "yes"}
                      onChange={(e) => handleFormChange('isLanguageFromAgreement', e.target.value)}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="language"
                      value="no"
                      checked={formData.isLanguageFromAgreement === "no"}
                      onChange={(e) => handleFormChange('isLanguageFromAgreement', e.target.value)}
                      className="mr-2"/>
                      No
                    </label>
                  </div>
                  {errors.isLanguageFromAgreement && (
                    <p className="text-red-500 text-sm mt-1 error-message">{errors.isLanguageFromAgreement}</p>
                  )}
                </div>
              </div>
  
              <div className="w-full border-t border-gray-200 my-6"></div>
  
              <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-8">
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
                      error={errors.statement}
                    />
                  </div>

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
                        error={errors.agreement}
                      />
                      <FileUploadBox
                        section="arbitration"
                        title="Arbitration Agreement"
                        handleUpload={(file) => handleFileChange('arbitration', file)}
                        file={files.arbitration}
                        error={errors.arbitration}
                      />
                    </div>
                  </div>
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
                          type="button"
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
              <div className="w-full mt-8 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Submit Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };
  
  export default ClaimSection;