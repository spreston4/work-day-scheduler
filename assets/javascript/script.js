// DECLARE the 'currentTime'
var currentTime = undefined;

// DECLARE the 'currentHour'
var currentHour = moment().hour();

// DECLARE the 'currentDay'
var currentDay = moment().format('dddd [, ] MMMM do YYYY');

// DECLARE array for 'timeBlocks'
 var timeBlocks = [
    nineAm = {
        text: '9 AM',
        timeValue: 9,
        storageValue: 'schedulerHour9'
    },
    tenAm = {
        text: '10 AM',
        timeValue: 10,
        storageValue: 'schedulerHour10'
    },
    elevenAm = {
        text: '11 AM',
        timeValue: 11,
        storageValue: 'schedulerHour11'
    },
    twelvePm = {
        text: '12 PM',
        timeValue: 12,
        storageValue: 'schedulerHour12'
    },
    onePm = {
        text: '1 PM',
        timeValue: 1,
        storageValue: 'schedulerHour13'
    },
    twoPm = {
        text: '2 PM',
        timeValue: 2,
        storageValue: 'schedulerHour14'
    },
    threePm = {
        text: '3 PM',
        timeValue: 3,
        storageValue: 'schedulerHour15'
    },
    fourPm = {
        text: '4 PM',
        timeValue: 4,
        storageValue: 'schedulerHour16'
    },
    fivePm = {
        text: '5 PM',
        timeValue: 5,
        storageValue: 'schedulerHour17'
    },
 ];

// DECLARE variables to edit body elements
var currentDayEl = $('#currentDay');
var containerEl = $('#container');

// Function to display 'currentDay' to the jumbotron
function renderCurrentDay () {

    currentDayEl.append(currentDay);

};

// Function to 'renderSchedule' to the 'container'
function renderSchedule() {
    //
};


// ------------------ Call Functions -------------------------------- //
renderCurrentDay();
console.log ('The current hour is: ' + currentHour);
