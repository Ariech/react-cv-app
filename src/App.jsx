import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (event, stateUpdater) => {
    const { name, value } = event.target;
    stateUpdater((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>CV Application</h1>
      <GeneralInfo
        generalInfo={generalInfo}
        onInputChange={(e) => handleInputChange(e, setGeneralInfo)}
      />
      <EducationInfo />
      <ExperienceInfo />
    </>
  );
}

export default App;
