function ExperienceInfo() {
  return (
    <>
      <h2>Experience Info Section</h2>
      <form action="">
        <div>
          <label>Company Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Position Title:</label>
          <input type="text" />
        </div>
        <div>
          <label>Main Responsibilites:</label>
          <input type="text" />
        </div>
        <div>
          <label>From Date:</label>
          <input type="date" />
        </div>
        <div>
          <label>To Date:</label>
          <input type="date" />
        </div>
        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </>
  );
}

export default ExperienceInfo;
