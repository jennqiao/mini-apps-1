$(document).ready(function() {


  $(document).on('click', '#submitButton', function() {
    var text = $('input[type=text]').val();
    var textObj = {'result': text};
    console.log(textObj);

    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000',
      data: JSON.stringify(textObj), 
      contentType: 'application/json',
      // dataType: 'application/json',
      success: function(data, status) {
        console.log('received data!', data);
        console.log(status)

        //display data on screen
      }
    })



  })

});

