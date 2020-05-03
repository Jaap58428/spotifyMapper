var cityInstances = [];

const authenticateUser = () => {
    const client_id = 'ba8b2e03236a45b0828c5e3573b316fa'
    const redirect_uri = encodeURI("https://itsjaap.nl/projecten/spotifyMapper/")
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`);
}

const getToken = () => {
    uri = window.location.href
    param = "access_token"

    if(uri.indexOf(param) > -1){
        tokenIndex = uri.indexOf(param)
        tokenStart = uri.indexOf("=", tokenIndex) + 1
        tokenEnd = uri.indexOf("&", tokenStart)
        token = uri.slice(tokenStart, tokenEnd)
        return token
    }

    if (confirm("There seems to be no token, please login")) {
        authenticateUser()
    }

    return null

}

const connectArtistsAndCities = (text) =>
{
  var items = text.items
  for (var i = 0; i < items.length; i++)
  {
    var name = items[i].name;
    console.log(name);
    var cities = getCitiesfromArtistPage(items[i].external_urls.spotify);
    for (var j = 0; j < cities.length; j++)
    {
      for (var k = 0; k < cityInstances.length; k++)
      {
        // check if city excists as object of city class
        // if yes -> only add band name to its list
        if (cities[j] == cityInstances[k])
        {
            var city = cityInstances[k];
            city.addToList(name);
            console.Log(cityInstances);
            return;
        }
      }
      // if not -> make instance and add band name to its addToList
      newCity = new City(cities[j]);
      newCity.addToList(name);
      cityInstances.push(newCity.name);
      console.log(newCity);
    }
  }
}

const getCitiesfromArtistPage = (url) =>
{
  // hackedy // HACK:
  return ["London", "Amsterdam", "Berlin", "Budapest"];
}

const makeAPICall = (token) =>
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         connectArtistsAndCities(JSON.parse(xhttp.response));
      }
  };
  xhttp.open("GET", "https://api.spotify.com/v1/me/top/artists?limit=50");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Authorization", "Bearer " + token)
  xhttp.send();
}

class City {
  bandArray = [];

  constructor(cityName)
  {
    this.name = cityName;
  }

  addToList(band)
  {
    this.bandArray.push(band);
  }

  get bandCount()
  {
    return this.bandArray.length;
  }
}

const main = () => {
    //token = getToken()
    makeAPICall("BQB4v7nL755jXGurcJbY13uejyS1ZI1DnLi3mwfy5nJYDKElvQrsYUfLeVM6IznGi3nDfr2FlsU_Co4fAeqBRLIsmJA6FVuiThVL9wb70aOIucSoE0NgZPQFuoDwM04nD6Lma0yd5CtgSx6LTeCHjhg")
}

window.onload = main
