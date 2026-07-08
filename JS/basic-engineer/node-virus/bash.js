const fs = require("fs"); // nodejs file system

/*
 fs.appendFile(@param1,@param2,@param3)
 @param1=>file name :<path>
 @param2=>data to write to the file
 @param3=>callback function (@errorParam) if there is an error
   -> successful
*/

/*
 for loops, while loops



->function <give it any name>
 void function-> function that does not take any parameters
-> create a file -> name of file is currentdate.txt
and 10k lines of code.
 <got you 1>
 <got you 2>
 <got you 3>
-> use a for loop
file system api-> nodejs

*/

//throw { message: "not working", data: "" };

function testAppendFile() {
  const fileData = "\nHello world testing file\n";
  const cb = (error) => {
    if (error) {
      console.log("creating file failed");
      console.log(error);
      ///settimeout()
    }
  };
  fs.appendFile("testfile.txt", fileData, cb);
}
testAppendFile();

//Solution

function createCurrentDateFile() {
  const today = new Date().toISOString().split("T")[0];

  const fileName = `${today}.txt`;

  let fileData = ``;

  for (let i = 1; i <= 10000; i++) {
    fileData = `${fileData}Line ${i}: Keep learning, keep growing.\n`;
  }

  const cb = (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`File created successfully.`);
    }
  };

  fs.appendFile(fileName, fileData, cb);
}

createCurrentDateFile();
