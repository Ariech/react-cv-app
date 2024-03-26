import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";

function App() {
  const generateId = () => {
    return new Date().getTime().toString();
  };

  const [generalInfo, setGeneralInfo] = useState({
    fullName: "John Smith",
    email: "johns@gmail.com",
    phoneNumber: "504 969 000",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      id: generateId(),
      schoolName: "Boston University",
      degree: "Spatial Management",
      fromDate: "",
      toDate: "",
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: generateId(),
      companyName: "Boston Dynamics",
      positionTitle: "Programmer",
      mainResponsibilites: "Programming",
      fromDate: "",
      toDate: "",
    },
  ]);

  const handleInputChange = (event, stateUpdater) => {
    const { name, value } = event.target;
    stateUpdater((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInfoInputChange = (e, id, setter) => {
    const { name, value } = e.target;
    setter((prevInfo) =>
      prevInfo.map((info) => {
        if (info.id === id) {
          return { ...info, [name]: value };
        }
        return info;
      })
    );
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: generateId(),
      schoolName: "",
      degree: "",
      fromDate: "",
      toDate: "",
    };

    setEducationInfo([...educationInfo, newEducation]);
  };

  const handleRemoveEducation = (id) => {
    setEducationInfo((prevEducationInfo) => {
      return prevEducationInfo.filter((education) => education.id !== id);
    });
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: generateId(),
      companyName: "",
      positionTitle: "",
      mainResponsibilites: "",
      fromDate: "",
      toDate: "",
    };

    setExperienceInfo([...experienceInfo, newExperience]);
  };

  const handleRemoveExperience = (id) => {
    setExperienceInfo((prevExperienceInfo) => {
      return prevExperienceInfo.filter((experience) => experience.id !== id);
    });
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
            <div key={info.id}>
              <EducationInfo
                educationInfo={info}
                onInputChange={(e) =>
                  handleInfoInputChange(e, info.id, setEducationInfo)
                }
              />
              <button onClick={() => handleRemoveEducation(info.id)}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleAddEducation}>Add Education</button>
        </div>

        <div>
          {experienceInfo.map((info) => (
            <div key={info.id}>
              <ExperienceInfo
                experienceInfo={info}
                onInputChange={(e) =>
                  handleInfoInputChange(e, info.id, setExperienceInfo)
                }
              />
              <button onClick={() => handleRemoveExperience(info.id)}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleAddExperience}>Add Experience</button>
        </div>
      </div>
    </>
  );
}

export default App;
