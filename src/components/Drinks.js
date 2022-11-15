import { useEffect, useState } from "react";

function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks));
  }, []);

  return (
    <div>
      {drinks.map((drink) => {
        const ingredientKeys = Object.keys(drink).filter((key) =>
          key.includes("Ingredient")
        );
        const ingredients = ingredientKeys.map((key) => drink[key]).filter((val) => val);

        return (
          <div>
            <p> {drink.strDrink}</p>
            <ul>
              {ingredients.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Drinks;
