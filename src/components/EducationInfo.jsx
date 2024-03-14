function EducationInfo() {
  return (
    <>
      <h2>Education Info Section</h2>
      <form action="">
        <div>
          <label>School Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Study Title:</label>
          <input type="text" />
        </div>
        <div>
          <label>Study Date:</label>
          <input type="text" />
        </div>
        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </>
  );
}

export default EducationInfo;
