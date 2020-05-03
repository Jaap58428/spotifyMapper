// Leave these, required for Spotify Authentication
const client_id = 'ba8b2e03236a45b0828c5e3573b316fa'

const authenticateUser = () => {
    const redirect_uri = encodeURI("https://itsjaap.nl/projecten/spotifyMapper/")
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`);
}

function getUrlVars() {
    // no clue, just grabbed this from online
    // https://html-online.com/articles/get-url-parameters-javascript/

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const getTokenFromUrl = () => {
    token = null
    parameter = 'access_token'
    if(window.location.href.indexOf(parameter) > -1){
        token = urlparameter = getUrlVars()[parameter];
        console.log('TOKEN FOUND!');

    }

    return token
}

const checkToken = () => {
    token = getTokenFromUrl()
    if (token !== null) {
        console.log('Token found:', token);
    } else if (confirm("There seems to be no token, please login")) {
        authenticateUser()
    }
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
    checkToken()
    var london = new City("London");
    london.addToList("Nothing But Thieves");
    london.addToList("Frank Carter");
    console.log(london.bandCount);
}

window.onload = main
