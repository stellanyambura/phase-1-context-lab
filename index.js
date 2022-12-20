/* Your Code Here */
function createEmployeeRecord(array){
    return{
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}
function createEmployeeRecords(array){
    return array.map(createEmployeeRecord);
}
function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type:"TimeIn",
        hour: parseInt(dateStamp.split(" ")[1],10),
        date:dateStamp.split("")[0],
    })
    return this;
}
function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(dateStamp.split(" ")[1],10),
        date:dateStamp.split("")[0],
    })
    return this;
    }
function hoursWorkedOnDate(dateHours){
    const TimeInHOur = this.timeInEvents.find(dateStamp => dateStamp.date === dateHours).hour
    const TimeOutHOur = this.timeOutEvents.find(dateStamp => dateStamp.date === dateHours).hour
    const totalHours = (timeOutHOur-timeInHOur)
    return totalHours /100
}
function wagesEarnedOnDate(dateHours){
    const wagedHours = hoursWorkedOnDate.call(this, dateHours);
    const employeeWage = wagedHours * this.payPerHour;
    return parseFloat(employeeWage.toString());
 }
 function findEmployeeByFirstName(empArray, firstName) {
    return empArray.find((employee) => {
      return employee.firstName === firstName;
    });
}

  function calculatePayroll(arrayEmployees) {
    return arrayEmployees.reduce((acc, rec) => {
      return acc + allWagesFor.call(rec);
    }, 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}