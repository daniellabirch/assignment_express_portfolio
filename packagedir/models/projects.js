class Project {
  constructor(name, ...domains) {
    this.name = name
    this.domains = domains
  }
}

const projects = [
  new Project("Bike2Brew", "This app is an interactive web map that integrates bike share data, yelp business info, and google bike routes. Please test the alpha version of my beer and bike map app and send me feedback!", "http://daniellabirch.com/bike2brew.php", "bike2brew.jpg"),
  new Project("2016 Election", "2016 Election: Integrated data visualization and county maps for 2016 federal, state, and local elections. This was updating live when ballot count data was made available. Right now, it displays the final numbers.", "election.jpg"),
  new Project("Utah Campus Sexual Assault", "Utah Campus Sexual Assault: an interactive web map that shows campus boundaries compared to city boundaries and also compares the reported sexual assaults for those areas.", "http://local.sltrib.com/campusassaultreporting/sexassaultnew.html", "sexassaultmap.jpg"),
  new Project("McHenry County Water Data", "McHenry County Water Data: an interactive web map displaying real time ground water levels and other significant data points in McHenry County, Illinois.", "http://il.water.usgs.gov/data/mchenry", "mchenrycrop.png"),
  new Project("Real Time Data Display", "Real Time Data Display: a web application that cycles through the various water gages and their data throughout the state of Illinois. To see USGS data for your state enter the paramater code in the URL. For example, California real time data can be found at il.water.usgs.gov/rtd2/index.php?state=CA", "http://il.water.usgs.gov/rtd2/", "rtd2.jpg"),
]

module.exports = {
  Project,
  projects
}