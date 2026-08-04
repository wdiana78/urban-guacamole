/*
create a form to
name,email,phone,password.

have a submit button that
console.logs the values when form submitted.

after the form have a list to show the state
changes as user is typing for each.

for all the input fields use only
1 state variable.
example [person,setPerson]=useState(<object:hint>)
-> it stores other data types.
*/
import { useState } from "react";

function Form() {
  // event when name changes

  //useState("")

  /*
    stateData=[]
    0:initial State
    1:update state function
  */

  //return []->
  //0 current state
  //1 function:<update state>

  const [input, setInput] = useState(["", "", "", ""]);

  const nameOnChange = (e) => {
    // console.log("NAME IS", e.target.value);

    const inputClone = [...input];
    //const inputClone = { ...input }

    inputClone[0] = e.target.value;
    setInput(inputClone);
  };

  //

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is", input[0]);
    console.log("email is", input[1]);
    console.log("phone is", input[2]);
    console.log("password is", input[3]);

    //request->
  };

  console.log(input);

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={input[0]} onChange={nameOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            value={input[1]}
            onChange={(e) => {
              const inputClone = [...input];

              inputClone[1] = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <div>
          <label>Phone</label>
        </div>
        <div>
          <input
            value={input[2]}
            onChange={(e) => {
              const inputClone = [...input];

              inputClone[2] = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            value={input[3]}
            onChange={(e) => {
              const inputClone = [...input];

              inputClone[3] = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      {/*displaying data*/}
      <ul>
        <li>Name:{input[0]}</li>
        <li>Email:{input[1]}</li>
        <li>Phone:{input[2]}</li>
        <li>Password:{input[3]}</li>
      </ul>
    </div>
  );
}

export default Form;

/**
import { useState } from "react";

function Form2() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const nameOnChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const emailOnChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  const phoneOnChange = (e) => {
    setPerson({
      ...person,
      phone: e.target.value,
    });
  };

  const passwordOnChange = (e) => {
    setPerson({
      ...person,
      password: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log("Form submitted");
    console.log("Name:", person.name);
    console.log("Email:", person.email);
    console.log("Phone:", person.phone);
    console.log("Password:", person.password);
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
          <label>Phone</label>
        </div>
        <div>
          <input onChange={phoneOnChange} />
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
        <li>Name: {person.name}</li>
        <li>Email: {person.email}</li>
        <li>Phone: {person.phone}</li>
        <li>Password: {person.password}</li>
      </ul>
    </div>
  );
}

export default Form2;
*/
