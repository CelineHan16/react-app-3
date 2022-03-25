import List from "./components/List/List";

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

  return (
    <div className="App">
      <h1>Hello World</h1>
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
    </div>
  );
}

export default App;
