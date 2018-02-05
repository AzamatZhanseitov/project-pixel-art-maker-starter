var numberRow = $('#inputHeight').val();
var numberColumn = $('#inputWeight').val();
var currentColour = $('#colorPicker').val();
// click event

function makeGrid() {
 $('#pixelCanvas').empty(); 
var numberRow = $('#inputHeight').val();
var numberColumn = $('#inputWeight').val();
// clear existing table

  // loop to add rows and columns
  for (x = 0; x < numberRow; x++) {
    $('#pixelCanvas').append("<tr></tr>");
  
  for (y=0; y < numberColumn; y++){
          $('#pixelCanvas').children().last().append("<td></td>");
  }
  }
}

//execute
$("#sizePicker").submit(function(e){
	e.preventDefault();
	makeGrid();
});
