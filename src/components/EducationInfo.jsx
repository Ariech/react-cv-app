function EducationInfo() {
  return (
    <>
      <h2>Education Info Section</h2>
      <form action="">
        <div>
          <label>
            School Name: <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Study Title:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Study Date:
            <input type="text" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EducationInfo;
