/*
document.querySelector('.time-block') 
var div=document.querySelector('.time-block')
*/

// function to call calendar events using local storage
$(document).ready(function() {
    function renderCalendarEvents() {

    var inputObject = {
        nineSave: localStorage.getItem("nineSave"),
        tenSave: localStorage.getItem("tenSave"),
        elevenSave: localStorage.getItem("elevenSave"),
        noonSave: localStorage.getItem("noonSave"),
        oneSave: localStorage.getItem("oneSave"),
        twoSave: localStorage.getItem("twoSave"),
        threeSave: localStorage.getItem("threeSave"),
        fourSave: localStorage.getItem("fourSave"),
        fiveSave: localStorage.getItem("fiveSave"),
    }

    var keys = Object.keys(inputObject);
        for (var i = 0; i < keys.length + 1; i++) {
            var textarea = $("textarea").eq(i);
            var key = keys[i];
            var value = inputObject[key];
            textarea.val(value);
        }
};

renderCalendarEvents();

});

// *Complete the following* : 

// *ADD* eventListener when user clicks save button 

/* $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var txt = $(this).
} */

// *CREATE* if/else statements to color code each hour
// example: var timeOfDay = (moment().format("HH")) 
