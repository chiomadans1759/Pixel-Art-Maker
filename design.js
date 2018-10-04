

// When size is submitted by the user, call makeGrid()
function makeGrid(rows, columns) {
// Your code goes here!
for(let i=1; i<=rows; i++){
//selects the table and appends table rows depending on the user input
    const tab = $('table').append('<tr></tr>');
}
//selects the tag table row<tr> to append the column<td>
    for(let i=1; i<=columns; i++){ 
        $('tr').append('<td></td>');
    }
}

// When the height and width size is submitted by the user, calls makeGrid()
$('form').submit(function(event){
    let rows = $('#inputHeight').val();
    let columns = $('#inputWidth').val();

// clears the DOM to append the next <tr><td>
    $('tr').remove();
    //calls the makeGrid() function
    makeGrid(rows, columns);
    event.preventDefault();
});

//Get the color value as the user input changes
$('#colorPicker').change(function(event){
    let gridColor = $(this).val();
    $('td').click(function(event){
        $(this).css("background-color", gridColor); 
    });
        
    event.preventDefault();
});

