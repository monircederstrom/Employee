var config = {
  apiKey: "AIzaSyAqKWcRP3jSGDhUASkQcTLhXDKt2DgsRxE",
  authDomain: "employee-d9cbf.firebaseapp.com",
  databaseURL: "https://employee-d9cbf.firebaseio.com",
  projectId: "employee-d9cbf",
  storageBucket: "employee-d9cbf.appspot.com",
  messagingSenderId: "887525033865"
};
firebase.initializeApp(config);
var employeeData = firebase.database();
$("#add-employee-btn").on("click", function() {
// Grabs user input
var employeeName = $("#name-input").val().trim();
var role = $("#role-input").val().trim();
var startDate = $("#startDate-input").val().trim();
var rate = $("#rate-input").val().trim();
// Creates local object for holding EMployee data
var newEmployee = {
name: employeeName,
role: role,
startDate: startDate,
rate: rate
};
// Uploads EMployee data to the database
employeeData.ref().push(newEmployee);
// confirm in console
console.log(newEmployee.name);
console.log(newEMployee.role);
console.log(newEMployee.startDate);
console.log(newEMployee.rate);
// Alert
alert("New Employee Successfully Created");
// Clears all of the text-boxes
$("#name-input").val("");
$("#role-input").val("");
$("#first-input").val("");
$("#rate-input").val("");
// Determine when the next EMployee arrives.
return Employee;
});
//  Firebase event for adding EMployees to the database 
//  and a row in the html when a user adds an entry
EMployeeData.ref().on("child_added", function(childSnapshot, prevChildKey) {
console.log(childSnapshot.val());
// EMployee app variables
var tName = childSnapshot.val().name;
var trole = childSnapshot.val().role;
var trate = childSnapshot.val().rate;
var tstartDate = chilstartDateal().startDate;