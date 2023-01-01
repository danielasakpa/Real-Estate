function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  
  const images = importAll(require.context('../assets/Agents Image', false, /\.(png|jpe?g|svg)$/));
  var AgentsImg = Object.keys(images).map((key) => images[key]);

const agents = [
    {
        img: AgentsImg[0],
        name: "Koray Okumus",
        position: "Sr. Developer"
    },
    {
        img: AgentsImg[1],
        name: "Nicolas Jesus",
        position: "Sr. Product Manager"
    },
    {
        img: AgentsImg[2],
        name: "Ava Wright",
        position: "Jr. Product Designer"
    },
    {
        img: AgentsImg[3],
        name: "Noah Pierre",
        position: "Sr. Product Designer"
    },
    {
        img: AgentsImg[4],
        name: "Lana Steiner",
        position: "Sr. Product Designer"
    },
    {
        img: AgentsImg[5],
        name: "Terry Bosman",
        position: "Sr. Developer"
    },
]

export default agents;