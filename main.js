const main = () => {
    var london = new City("London");
    london.addToList("Nothing But Thieves");
    london.addToList("Frank Carter");
    console.log(london.bandCount);
    console.log("Scripts work!");
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

window.onload = main
