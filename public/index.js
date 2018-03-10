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
  var frequency = $("#frequency-input").val().trim();

  // Creates local object for holding train data
  var newTrain = {

    name: employeeName,
    role: role,
    startDate: startstartDaterequency
  };

  // Uploads train data to the database
  trainData.ref().push(newTrain);

  // confirm in console
  console.log(newTrain.name);
  console.log(newTrain.role);
  console.log(newTrain.startDate);
  costartDateewTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#role-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  // Determine when the next train arrives.
  return false;
});

//  Firebase event for adding trains to the database 
//  and a row in the html when a user adds an entry
trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      // Train app variables
      var tName = childSnapshot.val().name;
      var trole = childSnapshot.val().role;
      var tFrequency = childSnapshot.val().frequency;
      var tstartDate = chilstartDateal().startDate;

    startDaterr = tstartDate.split(startDate var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
      var maxMoment = moment.max(moment(), trainTime);
      var tMinutes;
      var tArrival;
      
      //If the first train is later than the current time, sent arrival to the first train time
      if (maxMoment === trainTime) {
        tArrival = trainTime.format("hh:mm A");
        tMinutes = trainTime.diff(moment(), "minutes");
      } else {

        // To calculate the minutes till arrival, 
        // take the current time in unix subtract the startDatetime
  startDatend the modulus between the difference and frequency
        var differenceTimes = moment().diff(trainTime, "minutes");
        var tRemainder = differenceTimes % tFrequency;
        tMinutes = tFrequency - tRemainder;
        // To calculate the arrival time, add the tMinutes to the currrent time
        tArrival = moment().add(tMinutes, "m").format("hh:mm A");
      }
        console.log("tMinutes:", tMinutes);
        console.log("tArrival:", tArrival);

        // Add each train's data into the table
        $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + trole + "</td><td>" +
          tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
      });
