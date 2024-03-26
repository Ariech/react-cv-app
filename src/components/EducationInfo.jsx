function EducationInfo({ educationInfo, onInputChange }) {
  const { schoolName, degree, fromDate, toDate } = educationInfo;

  return (
    <>
      <h2>Education Info Section</h2>
      <form action="">
        <div>
          <label>
            School Name:
            <input
              type="text"
              value={schoolName}
              name="schoolName"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Degree:
            <input
              type="text"
              value={degree}
              name="degree"
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
export default EducationInfo;
