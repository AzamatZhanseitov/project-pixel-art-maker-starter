// declare variables
var currentColour, numberRow, numberColumn
currentColour = $('#colorPicker').val();


function makeGrid() {

//get  input values inside function
numberRow = $('#inputHeight').val();
numberColumn = $('#inputWeight').val();
// clear existing table
 $('tr').remove();// just remove table row

 // loop to add rows and columns
 for (x = 0; x < numberRow; x++) {
   $('#pixelCanvas').append("<tr></tr>");
 }
 for (y=0; y < numberColumn; y++){
  $('#pixelCanvas').children().append("<td></td>");
 }
 // color code goes in here
};

//execute
$("#sizePicker").submit(function(evt) {//submit form  and you forget add evt params
evt.preventDefault();
makeGrid();
});

