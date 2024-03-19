function ExperienceInfo() {
  // const handleFromDateChange = (e) => {};

  // const handleToDateChange = (e) => {};

  return (
    <>
      <h2>Experience Info Section</h2>
      <form action="">
        <div>
          <label>
            Company Name:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Position Title:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Main Responsibilites:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            From Date:
            <input type="date" />
          </label>
        </div>
        <div>
          <label>
            To Date:
            <input type="date" />
          </label>
        </div>
      </form>
    </>
  );
}

export default ExperienceInfo;
