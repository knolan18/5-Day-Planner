$(document).ready(function() {
  update = function()
  {
    var time = moment().format('MMM Do, YYYY [at]  hh:mm:ss a');
    $("#currentDay").text(time);
  }
  update();
  setInterval(update,1000);


  function hourCheck() {
    var currentHour = moment().hours();
    $('.time-block').each(function() {
      var hourBlock = parseInt($(this).siblings('.hour').attr('id').split('-')[1]);

      if(hourBlock < currentHour) {
        $(this).addClass('past')
      } else if( hourBlock === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }

      console.log(hourBlock)
    })
  }

  $('.saveBtn').on('click', function() {
    var value = $(this).siblings('.time-block').val();
    var time = $(this).siblings('.hour').attr('id');

    localStorage.setItem(time, value)
  })

  hourCheck();

  var interval = setInterval(hourCheck, 15000);

$('#hour-9').siblings('.time-block').val(localStorage.getItem('hour-9'))
$('#hour-10').siblings('.time-block').val(localStorage.getItem('hour-10'))
$('#hour-11').siblings('.time-block').val(localStorage.getItem('hour-11'))
$('#hour-12').siblings('.time-block').val(localStorage.getItem('hour-12'))
$('#hour-13').siblings('.time-block').val(localStorage.getItem('hour-13'))
$('#hour-14').siblings('.time-block').val(localStorage.getItem('hour-14'))
$('#hour-15').siblings('.time-block').val(localStorage.getItem('hour-15'))
$('#hour-16').siblings('.time-block').val(localStorage.getItem('hour-16'))
$('#hour-17').siblings('.time-block').val(localStorage.getItem('hour-17'))
});