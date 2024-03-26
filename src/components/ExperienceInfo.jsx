function ExperienceInfo({ experienceInfo, onInputChange }) {
  const { companyName, positionTitle, mainResponsibilites, fromDate, toDate } =
    experienceInfo;

  return (
    <>
      <h2>Experience Info Section</h2>
      <form action="">
        <div>
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              name="companyName"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Position Title:
            <input
              type="text"
              value={positionTitle}
              name="positionTitle"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Main Responsibilites:
            <input
              type="text"
              value={mainResponsibilites}
              name="mainResponsibilites"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            From Date:
            <input
              type="date"
              value={fromDate}
              name="fromDate"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            To Date:
            <input
              type="date"
              value={toDate}
              name="toDate"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
      </form>
    </>
  );
}

export default ExperienceInfo;
