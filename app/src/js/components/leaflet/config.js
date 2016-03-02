var config = {
  params: {
    zoomControl: false,
    zoom: 13,
    maxZoom: 19,
    minZoom: 11,
    scrollwheel: false,
    legends: true,
    infoControl: false,
    attributionControl: true
  },
  tileLayer: {
    uri: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    params: {
      minZoom: 11,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'narayn60.p7pooa86',
      accessToken: 'pk.eyJ1IjoibmFyYXluNjAiLCJhIjoiY2lremNmbnpuMDA1dXc3bTBoZjdudmJkOCJ9.V3wqoTabqCCYbeVJ20V34g'
    }
  }
}

export default config;
