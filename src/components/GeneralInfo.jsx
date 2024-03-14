function GeneralInfo() {
  return (
    <>
      <h2>General Info Section</h2>
      <form action="">
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
            title="Please enter phone number in the correct format ex. 500100500"
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </>
  );
}

export default GeneralInfo;
