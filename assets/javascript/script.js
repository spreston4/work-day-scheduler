// DECLARE the 'currentHour'
// var currentHour = moment().hour();
var currentHour = 13;                  // Testing

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
        var textContent = timeBlocks[i].text;
        var textStorage = timeBlocks[i].storageValue;
        var blockTimeValue = timeBlocks[i].timeValue;

        // Create div to hold row 
        var scheduleDivEl = $('<form>');
        scheduleDivEl.addClass('time-block row');
        containerEl.append(scheduleDivEl);

        // Display time block
        var hourDisplayEl = $('<p>');
        hourDisplayEl.addClass('hour');
        hourDisplayEl.text(textContent);
        scheduleDivEl.append(hourDisplayEl);

        // Display text area
        var textAreaEl = $('<textarea>');
        textAreaEl.attr('id', textStorage);

            // Compare 'currentHour' to 'timeValue' to determine formatting
            if (currentHour == blockTimeValue) {

                textAreaEl.addClass('present');

            } else if ( currentHour > blockTimeValue) {

                textAreaEl.addClass('past');

            } else {

                textAreaEl.addClass('future');

            };

        scheduleDivEl.append(textAreaEl);

        // Display button
        var displayButtonEl = $('<button>');
        displayButtonEl.addClass('saveBtn');
        displayButtonEl.text('Save');
        scheduleDivEl.append(displayButtonEl);

    }

};

// Function to 'storeScheduleItem' to the scheduler


// ------------------ Call Functions -------------------------------- //
renderCurrentDay();
console.log ('The current hour is: ' + currentHour);
renderSchedule();
