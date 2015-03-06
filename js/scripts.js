
//click button, capture zip feild
$('#getZip').click(function(){
  
event.preventDefault();
  
var zip= $('#zip').val();
console.log(zip);
  


//Get Weather copy line 11-32 http://codepen.io/manikoth/pen/BEioc
 $.simpleWeather({
    
    location: zip,
  	success: function(weather) {
      
      console.log(weather);
      $('.temp').text('weather.temp');
      $('.city').text('weather.city');
      $('.country').text('weather.country');
     
    },
 
      // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // Get and store State
      var state = weather.region;
      
      //Get and store thumbnail 
      var thumb = weather.thumbnail;
      console.log(thumb);                     
      
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.thumb img').attr('src', thumb)

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
 });
  
  $('#getWeather').val('');
});


