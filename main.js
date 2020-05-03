// Leave these, required for Spotify Authentication
const client_id = 'ba8b2e03236a45b0828c5e3573b316fa'

const authenticateUser = () => {
    const auth_url = "https://accounts.spotify.com/authorize"
    const repsonse_type = "token"
    const redirect_uri = "https://itsjaap.nl/projecten/spotifyMapper/"

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.response);
        }
    }

    full_url = auth_url + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri

    xhttp.open("GET", full_url , true);
    xhttp.send();
    return null
}

const main = () => {
    // connect authentication function to button
    document.getElementById('authButton').addEventListener('click', authenticateUser)
    
    console.log("Scripts work!");

}

window.onload = main