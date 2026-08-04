/*
How to handle form input and events
*/

function Form() {
  // event when name changes
  const nameOnChange = (e) => {
    console.log("Name is", e.target.value);
  };

  const emailOnChange = (e) => {
    console.log("Email is", e.target.value);
  };

  const passwordOnChange = (e) => {
    console.log("Password is", e.target.value);
  };

  const onSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input onChange={nameOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={emailOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input type="password" onChange={passwordOnChange} />
        </div>
      </main>
      <main>
        <main>
          <button onClick={onSubmit}>Submit</button>
        </main>
      </main>
    </div>
  );
}

export default Form;
