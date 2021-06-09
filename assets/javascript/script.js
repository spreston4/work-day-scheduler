// DECLARE the 'currentHour'
var currentHour = moment().hour();
// var currentHour = 11;                  // Testing

// DECLARE the 'currentDay'
var currentDay = moment().format('dddd [, ] MMMM do YYYY');

// DECLARE element for button list
var buttonListEl = $('button');

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
        timeValue: 13,
        storageValue: 'schedulerHour13'
    },
    twoPm = {
        text: '2 PM',
        timeValue: 14,
        storageValue: 'schedulerHour14'
    },
    threePm = {
        text: '3 PM',
        timeValue: 15,
        storageValue: 'schedulerHour15'
    },
    fourPm = {
        text: '4 PM',
        timeValue: 16,
        storageValue: 'schedulerHour16'
    },
    fivePm = {
        text: '5 PM',
        timeValue: 17,
        storageValue: 'schedulerHour17'
    },
 ];

// DECLARE variables to edit body elements
var currentDayEl = $('#currentDay');
var containerEl = $('#schedule-container');

// Function to display 'currentDay' to the jumbotron
function renderCurrentDay () {

    currentDayEl.append(currentDay);

};

// Function to 'renderSchedule' to the 'container'
function renderSchedule() {

    for (i = 0; i < timeBlocks.length; i++) {

        // DECLARE function variables
        var hourBlock = timeBlocks[i].text;
        var textStorage = timeBlocks[i].storageValue;
        var blockTimeValue = timeBlocks[i].timeValue;
        var conditionalFormat = '';

        // Compare 'currentHour' to 'timeValue' to determin formating
        if (currentHour == blockTimeValue) {

            conditionalFormat = 'present';

        } else if ( currentHour > blockTimeValue) {

            conditionalFormat = 'past';

        } else {

            conditionalFormat = 'future';

        };

        // Create form for each row
        var schedulerowEl = $(
            `<form class = "time-block row"> 
                <p class = "hour">
                    ${hourBlock}
                </p>
                <textarea id = "${textStorage}" class = "${conditionalFormat}" data-storageID = "schedulerHourBlock${i}">
                </textarea>
                <button class = "saveBtn" data-storageID = "schedulerHourBlock${i}">
                    Save
                </button>
            </form>`
        );

        // Append row to container
        containerEl.append(schedulerowEl);

    }

};

// Function to 'storeScheduleItem' to the scheduler
function storeScheduleItem(event) {

    // Stop form reload
    event.preventDefault();


    // Get 'scheduleHourBlock ID for pressed button
    
    var testVar = '';



};


// ------------------ Call Functions -------------------------------- //
renderCurrentDay();
renderSchedule();
buttonListEl.on('click', storeScheduleItem());


