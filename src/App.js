import List from "./components/List/List";
import ArticleList from "./components/ArticlesList/ArticlesList";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Table from "./components/Table/Table";

function App() {
  const veggies = ["Carrot", "Potato", "Tomato"];
  const fruits = [
    { name: "Banana", color: "Yellow" },
    { name: "Apple", color: "Red" },
    { name: "Orange", color: "Orange" }
  ];
  const berries = ["Strawberry", "Raspberry", "Blueberry"];

  const veggiesList = veggies.map((veggie) => {
    return <li>{veggie}</li>;
  });

  // short var
  // const fruitsList = fruits.map((fruit) => <li>{fruit}</li>);
  const fruitsList = fruits.map((fruit) => (
    <li>
      {fruit.name}: {fruit.color}
    </li>
  ))

  const berriesList = berries.map((berry) => (
    <li>
      <h5>{berry}</h5>
    </li>
  ));

  const articles = [
    { title: "This is an example article", url: "#", teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis quam deleniti. Illo earum minus eaque doloribus nulla nostrum, possimus ipsam id delectus ipsa enim officiis quas consequuntur nihil quibusdam." },
    { title: "Another article as an example", url: "#", teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis quam deleniti. Illo earum minus eaque doloribus nulla nostrum, possimus ipsam id delectus ipsa enim officiis quas consequuntur nihil quibusdam." },
    { title: "Last example article", url: "#", teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis quam deleniti. Illo earum minus eaque doloribus nulla nostrum, possimus ipsam id delectus ipsa enim officiis quas consequuntur nihil quibusdam." },
  ];

  const table = [
    { id: "1", name: "Haru", from: "Extraordinary You" },
    { id: "2", name: "Hido", from: "Twenty five, twenty one" },
    { id: "3", name: "HanJ", from: "StartUp" }
  ]; 

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Table src={table} />

      <ProgressBar progress={25} />
      <ProgressBar progress={50} color="orange" />
      <ProgressBar progress={30} color="greenyellow" />
      <ProgressBar progress={83} color="blue" />
      <ProgressBar progress={70} />
      <ProgressBar progress={90} color="violet" />
      <ul>
        {veggiesList}
      </ul>
      <ol>
        {fruitsList}
      </ol>
      <ul>
        {berriesList}
      </ul>

      <List src={veggies} />
      <ArticleList src={articles} />
    </div>
  );
}

export default App;
