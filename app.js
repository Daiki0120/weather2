$(document).ready(function() {
  $.simpleWeather({
    location: 'Evanston, IL',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'℃'+'</h2>';

      html += '<ul><li>'+weather.city+'</li>';

      html += '<li class="currently">'+weather.currently+'</li>';

      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';


            for(var i=0;i<weather.forecast.length;i++) {
              html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
            }

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
