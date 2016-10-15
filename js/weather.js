$(document).ready(function() {
  var lat, lon, url;
  //get user coordinates


  $.getJSON("http://ip-api.com/json", function(ip) {
    lat = ip.lat;
    lon = ip.lon;
    url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=ffaef73b35c42fabc5a6c5eeb6b3b165";
    console.log(url);

    //get json info
    $.getJSON(url, function(data) {
      var degree = "°F";
      console.log(data.weather[0].main);
      var city = data.name;
      var icon = data.weather[0].icon;
      var far = Math.round(data.main.temp);
      var desc = data.weather[0].main;


      //display on app
      $(".city").append('<h1>' + city + '</h1>');
      $(".icon").append('<img src="http://openweathermap.org/img/w/' + icon + '.png">');
      $('.temp').append('<h3>' + far + ' ' + '<span>'+degree+'</span></h3>');
      $('.desc').append('<h3>' + desc + '</h3>');

      //Convert F to C and C to F
      var celcius = Math.round((far - 32)*0.5556);
      $('.temp').on('click', function(){
        if(degree == "°F") {
          degree = "°C";
          $('.temp').html('<h3>' + celcius + ' ' + '<span>'+degree+'</span></h3>');
        }
        else if (degree == "°C") {
          degree = "°F";
          $('.temp').html('<h3>' + far + ' ' +'<span>'+degree+'</span></h3>');
        }
      });
    });
  });

  //Date function
  var date = new Date();
  var monthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  currentDate = date.getDate();
  monthNum = date.getMonth() + 1;
  month = monthStr[monthNum];
  year = date.getFullYear();


  $(".date").append('<h4>' + currentDate + " " + month + " " + year + '</h4>');


});