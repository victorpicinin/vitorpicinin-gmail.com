window.onload = function () {
  var target = document.getElementById('target');
  var watchId;

  if ('geolocation' in navigator) {
    document.getElementById('askButton').addEventListener('click', function () {
      navigator.geolocation.getCurrentPosition(function (location) {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude)
        lat = location.coords.latitude
        long = location.coords.longitude
        target.innerHTML = "Latitude: "+location.coords.latitude+" Longitude: " +location.coords.longitude;
        initialize_map()
      });    
    });
  } else {
    target.innerText = 'API de Geolocalização não suportada';
  }
};

function initialize_map() {
    var center = new google.maps.LatLng(lat, long);

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var markers = [];

    var latLng = new google.maps.LatLng(lat,long);
    var marker = new google.maps.Marker({position: latLng});

  google.maps.event.addDomListener(window, 'load', initialize);
}