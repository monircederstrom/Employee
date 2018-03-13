console.log("working")
var config = {
  apiKey: "AIzaSyBK67aPNaZB212T_ELxC7jsjAF0dlQ2Woc",
  authDomain: "dailyschedule-4c1c0.firebaseapp.com",
  databaseURL: "https://dailyschedule-4c1c0.firebaseio.com",
   projectId: "dailyschedule-4c1c0",
   storageBucket: "dailyschedule-4c1c0.appspot.com",
   messagingSenderId: "837111990737",
}
firebase.initializeApp(config);
<<<<<<< HEAD
var database = firebase.database();
$("#add-employee-btn").on("click", function() {
	event.preventDefault();
=======
var employeeData = firebase.database();
$("#add").on("click", function() {
>>>>>>> f4b6290aa1049eb7b1925b7dd82b65f1f921b32f
// Grabs user input
var employeeName = $("#name").val().trim();
var role = $("#role").val().trim();
var startDate = moment($("#startdate").val().trim(), "DD/MM/YY").format("X");
var rate = $("#rate").val().trim();
// Creates local object for holding EMployee data
var newEmployee = {
name: employeeName,
role: role,
start: startDate,
rate: rate,
};
// Uploads EMployee data to the database
database.ref().push(newEmployee);
// confirm in console
console.log(newEmployee.name);
console.log(newEmployee.role);
<<<<<<< HEAD
console.log(newEMployee.start);
console.log(newEMployee.rate);
// Alert
alert("New Employee Successfully Created");
// Clears all of the text-boxes
$("#name").val("");
$("#role").val("");
$("#startdate").val("");
$("#rate").val("");
=======
console.log(newEmployee.startDate);
console.log(newEmployee.rate);
// Alert
alert("New Employee Successfully Created");
// Clears all of the text-boxes
$("#name-input").val("");
$("#role-input").val("");
$("#startDate-input").val("");
$("#rate-input").val("");
>>>>>>> f4b6290aa1049eb7b1925b7dd82b65f1f921b32f
// Determine when the next EMployee arrives.
});

//  Firebase event for adding EMployees to the database 
//  and a row in the html when a user adds an entry
<<<<<<< HEAD
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
=======
employeeData.ref().on("child_added", function(childSnapshot, prevChildKey) {
>>>>>>> f4b6290aa1049eb7b1925b7dd82b65f1f921b32f
console.log(childSnapshot.val());
// employee app variables
var tName = childSnapshot.val().name;
var trole = childSnapshot.val().role;
var trate = childSnapshot.val().rate;
<<<<<<< HEAD
var tstartDate = childSnapshot.val().start;

console.log(tName);
console.log(trole);
console.log(trate);
console.log(tstartDate);

//moment.js
var employeeStart = moment.unix(tstartDate).format("MM/DD/YY");
var months = moment().diff(moment.unix(tstartDate, "X"), "months");
console.log(months);

//total billed rate
var billed = months * trate;
console.log(billed);
$("#table > tbody").append("<tr><td>" + tName + "</td><td>" + trole + "</td><td>" +
  employeeStart + "</td><td>" + months + "</td><td>" + trate + "</td><td>" + billed + "</td></tr>");
});
=======
var tstartDate = childstartDate().startDate;
});
>>>>>>> f4b6290aa1049eb7b1925b7dd82b65f1f921b32f
