4.studentsRESTservice
Question:Using the REST API at 'localhost:3000/students' create a web application for managing students 1.The REST API provides methods as follows: i. POST creates a new student ii. GET returns all students iii. DELETE deletes a student by Id 2.You may extend the demo for jQuery.ajax()

go to project root directory from command prompt.
cd ..../studentRESTservice
npm install
open command prompt >mongod  ...to start mongodb server
node server.js
open google chrome and navigate to url localhost:3000/      and use the client ui.


or to test it via POSTMAN

POST     http://localhost:3000/students/addStudent
{
"course": "mech",
    "dob": "2016-05-13T00:00:00.000Z",
    "id": "3",
    "lastname": "dick",
    "firstname": "mik",
    "__v": 0
  }

GET http://localhost:3000/students

DELETE http://localhost:3000/students/deleteStudent/3
