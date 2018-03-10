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

    startDaterEmployeestartDate.split(startDate var EMployeeTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
      var maxMoment = moment.max(moment(), EMployeeTime);
      var tMinutes;
      var tArrival;
      
      //If the first EMployee is later than the current time, sent arrival to the first EMployee time
      if (maxMoment === EMployeeTime) {
        tArrival = EMployeeTime.format("hh:mm A");
        tMinutes = EMployeeTime.diff(moment(), "minutes");
      } else {

        // To calculate the minutes till arrival, 
        // take the current time in unix subtract the startDatetime
  startDatend the modulus between the difference and rate
        var differenceTimes = moment().diff(EMployeeTime, "minutes");
        var tRemainder = differenceTimes % trate;
        tMinutes = trate - tRemainderEmployee     // To calculate the arrival time, add the tMinutes to the currrent time
        tArrival = moment().add(tMinutes, "m").Employeet("hh:mm A");
      Employee     console.log("tMinutes:", tMinutes);
        console.log("tArrival:", tArrival);

        // Add each EMployee's data into the table
        $("#EMployee-table > tbody").append("<tr><td>" + tName + "</td><td>" + trole + "</td><td>" +
          trate + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
      });Employee