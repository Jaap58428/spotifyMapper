// Leave these, required for Spotify Authentication
const client_id = 'ba8b2e03236a45b0828c5e3573b316fa'

const authenticateUser = () => {
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
    token = getToken()
    var london = new City("London");
    london.addToList("Nothing But Thieves");
    london.addToList("Frank Carter");
    console.log(london.bandCount);
}

window.onload = main
