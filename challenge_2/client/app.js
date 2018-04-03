$(document).ready(function() {

  renderTable();

  $(document).on('click', '#submitButton', function() {
    var text = $('#inputBox').val();

    if (text[text.length-1] === ';') {
      alert("Input cannot end in a semicolon");

    } else {

      $('#inputBox').val('');
      var textObj = {'result': text};

      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3000',
        data: JSON.stringify(textObj), 
        contentType: 'application/json',
        // dataType: 'application/json',
        success: function(data, status) {
          console.log('received data!', data);
          handleData(data);

          //display data on screen
        },
        error: function(data) {
          console.log('error', data);
        }
      })
    }

  });

  function handleData (data) {

    if (data[0]=== '"') {
      data = data.slice(1);
    } 
    if (data[data.length-1] === '"') {
      data = data.slice(0, data.length-1);
    }

    var lines = data.split('\\n');
    var headers = lines[0].split(',');
  
    for (var i=0; i<headers.length; i++) {
      $('.headers').append('<th>'+headers[i]+'</th>');
    }

    for (var i=1; i<lines.length; i++) {
      var row = lines[i].split(',');
      $('#csv').append('<tr></tr>');
      for (var t=0; t<row.length; t++) {
        var item = row[t];
        $('#csv tr:last').append('<td>'+item+'</td>');
      }


    }

    renderTable();

  }

  function renderTable() {

    if ($('#csv > tr > td').length === 0) {
      $('#csv').toggle();
    } else {
       $('#csv').toggle();
    }

  }



});

