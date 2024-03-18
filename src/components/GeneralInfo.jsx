function GeneralInfo({ generalInfo, onInputChange }) {
  const { fullName, email, phoneNumber } = generalInfo;

  return (
    <>
      <h2>General Info Section</h2>
      <form action="">
        <div>
          <label>
            Name:
            <input
              type="text"
              value={fullName}
              name="fullName"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
              title="Please enter phone number in the correct format ex. 500100500"
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default GeneralInfo;
