$(document).ready(function() {
  $.simpleWeather({
    location: 'Evanston, IL',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'℃'+'</h2>';


            for(var i=7;i<weather.forecast.length;i++) {
              html += '<h3>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</h3>';
            }

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
