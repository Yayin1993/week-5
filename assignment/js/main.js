

var removeMarkers = function(array3){
     _.each(array3,function(location){
    map.removeLayer(location);});
  };

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);




$(document).ready(function() {
  //$('#text-label1').text('Address');
  //$('#key-label').text('Latitude');
  //$('#key-labe2').text('Longtitude');
  $('#text-input1').val('Tell me the address!');
  //$('#key-input1').val('Please tell me the latitude');
  //$('#key-input2').val('Please tell me longtitude');

  $( "button" ).click(function() {
    var Address = $('#text-input1').val();
    var Lat = $('#key-input1').val();
    var Lng = $('#key-input2').val();
    var downloadData = $.ajax(Address);
    var parseData = function(n) {return JSON.parse(n);};

    var makeMarkers = function(array1) {
      return _.map(array1,function(Object){
        return [Object[Lat],Object[Lng]];
      });
    };

    var plotMarkers = function(array2) {
      return _.map(array2,function(location){
        return L.marker(location).addTo(map);
       });
     };


    downloadData.done(function(data) {
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      plotMarkers(markers);
      //removeMarkers(markers);
    });
  });
});

//Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
