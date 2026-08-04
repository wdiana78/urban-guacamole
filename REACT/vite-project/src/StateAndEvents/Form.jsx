/*
How to handle form input and events
*/

import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // event when name changes
  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log("Form submitted");
    console.log("Name is", name);
    console.log("Email is", email);
    console.log("Password is", password);
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input name="John" onChange={nameOnChange} />
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
        <button onClick={onSubmit}>Submit</button>
      </main>

      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
      </ul>
    </div>
  );
}

export default Form;
