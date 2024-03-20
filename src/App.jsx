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

  const [educationInfo, setEducationInfo] = useState([
    {
      id: 1,
      schoolName: "Boston University",
      degree: "Spatial Management",
      fromDate: "March 2020",
      toDate: "June 2023",
    },
  ]);

  const handleInputChange = (event, stateUpdater) => {
    const { name, value } = event.target;
    stateUpdater((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEducationInputChange = (e, id) => {
    const { name, value } = e.target;
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.map((education) => {
        if (education.id === id) {
          return { ...education, [name]: value };
        }
        return education;
      })
    );
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: educationInfo.length + 1,
      schoolName: "",
      degree: "",
      fromDate: "",
      toDate: "",
    };

    setEducationInfo([...educationInfo, newEducation]);
  };

  return (
    <>
      <div>
        <h1>CV Application</h1>
        <GeneralInfo
          generalInfo={generalInfo}
          onInputChange={(e) => handleInputChange(e, setGeneralInfo)}
        />

        <div>
          {educationInfo.map((info) => (
            <EducationInfo
              key={info.id}
              educationInfo={info}
              onInputChange={(e) => handleEducationInputChange(e, info.id)}
            />
          ))}
          <button onClick={handleAddEducation}>Add Education</button>
        </div>
        <ExperienceInfo />
      </div>
    </>
  );
}

export default App;
