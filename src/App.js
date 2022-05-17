import saladImage from "./images/perfection_salad.jpg";
import "./App.css";

function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2",
    },
    {
      name: "cup sugar",
      quantity: "1/2",
    },
    {
      name: "teaspoon salt",
      quantity: "1",
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1",
    },
    {
      name: " cup lemon juice",
      quantity: "1/2",
    },
    {
      name: "tablespoons vinegar",
      quantity: "2",
    },
    {
      name: "cup shredded carrot",
      quantity: "1",
    },
    {
      name: "cup sliced celery",
      quantity: "1",
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1",
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2",
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1",
    },
  ];
  const steps = [
    {
      id: 1,
      description:
        "In small saucepan, combine gelatine, sugar, and salt; mix well",
    },
    {
      id: 2,
      description:
        "Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat",
    },
    {
      id: 3,
      description:
        "Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.",
    },
    {
      id: 4,
      description:
        "Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined.",
    },
    {
      id: 5,
      description:
        "Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm.",
    },
    {
      id: 6,
      description:
        "To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve.",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Perfection Salad</h1>
        <p>MAY 24, 2011</p>
        <div>
          <img src={saladImage} className="photo" alt="perfection salad"></img>
        </div>
        <h2>Ingredients</h2>
        {ingredients.map((ingredient) => (
          <ul>
            <li>
              <em>{ingredient.quantity}</em> {ingredient.name}
            </li>
          </ul>
        ))}
        <h2>Preparation</h2>
        <ol>
          {steps.map((step) => (
            <li>{step.description}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
