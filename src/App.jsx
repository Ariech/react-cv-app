import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "John Smith",
    email: "johns@gmail.com",
    phoneNumber: "504 969 000",
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "Boston University",
    degree: "Spatial Management",
    fromDate: "March 2020",
    toDate: "June 2023",
  });

  const handleInputChange = (event, stateUpdater) => {
    console.log(event);
    const { name, value } = event.target;
    stateUpdater((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h1>CV Application</h1>
        <GeneralInfo
          generalInfo={generalInfo}
          onInputChange={(e) => handleInputChange(e, setGeneralInfo)}
        />

        <EducationInfo
          educationInfo={educationInfo}
          onInputChange={(e) => handleInputChange(e, setEducationInfo)}
        />
        <ExperienceInfo />
      </div>
      <div>
        <p>Full name: {generalInfo.fullName}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone Number: {generalInfo.phoneNumber}</p>
      </div>
      <div>
        <p>School name: {educationInfo.schoolName}</p>
        <p>Degree: {educationInfo.degree}</p>
        <p>From Date: {educationInfo.fromDate}</p>
        <p>To Date: {educationInfo.toDate}</p>
      </div>
    </>
  );
}

export default App;
