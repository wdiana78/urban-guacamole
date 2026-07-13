/* 
   Step 1: Import the data
 */

const data = require("./data.json");
const fs = require("fs");

/*
Sample applicant object

{
  "id": 1,
  "first_name": "Roderick",
  "last_name": "Pellew",
  "email": "rpellew0@imageshack.us",
  "gender": "Male",
  "phone": "774-530-6366"
}
*/

/* 
   Step 2: Loop through each applicant
   and print the data
 */

for (const applicant of data) {
  console.log(applicant);
}

/*
Alternative solution

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
*/

/* 
   Step 3: Create a rejection
   message for each applicant
 */

function LogRejectionLetters(data) {
  for (let i = 0; i < data.length; i++) {
    let greeting;

    if (data[i].gender === "Female") {
      greeting = "Madam";
    } else {
      greeting = "Sir";
    }

    const message = `
Dear ${greeting} ${data[i].first_name} ${data[i].last_name},

We regret to inform you that you will not be proceeding to the next stage of the interview because you were not a good fit for this position.

Thank you for your interest in this opportunity. We encourage you to apply for future opportunities.

Kind regards,
The Recruitment Team
`;

    console.log(message);
  }
}

// Uncomment to print all rejection letters
// LogRejectionLetters(data);

/* 
   Step 4:
   Create a new array that
   stores the applicant data
   together with the message.
 */

const output = [];

for (let i = 0; i < data.length; i++) {
  const doc = data[i];

  const { first_name, last_name, email, gender, phone } = doc;

  let title;

  if (gender === "Male") {
    title = "Sir";
  } else {
    title = "Madam";
  }

  const message = `Dear ${title} ${first_name} ${last_name},

We regret to inform you that you will not proceed to the next round of interviews because you were not a good fit for this position.

Thank you for your interest in this opportunity. We encourage you to apply for future opportunities.

Kind regards,
The Recruitment Team`;

  output.push({
    first_name,
    last_name,
    email,
    gender,
    phone,
    message,
  });
}

// Print the completed output array
console.log(output);

/* 
   Step 5:
   Convert the JavaScript
   array into JSON text and
   save it to output.json
 */

const outputText = JSON.stringify(output, null, 2);

fs.writeFile("output.json", outputText, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("output.json created successfully!");
  }
});
