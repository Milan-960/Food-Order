import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dhosa",
    description:
      "South Indian paper thin pancakes made from lentils and fermented rice flour, fried on a flat baking tray with ghee.",
    price: 21,
  },
  {
    id: "m2",
    name: "Vada pav",
    description:
      "Vegetarian fast food dish originating in the state of Maharashtra.",
    price: 15,
  },
  {
    id: "m3",
    name: "Manchurian",
    description:
      "Manchurian is a class of Indian Chinese dishes prepared by coarse chopping and deep-frying a main ingredient such as chicken, cauliflower, shrimp, fish, mutton or paneer cheese, and then frying in a sauce with the addition of soy sauce",
    price: 40,
  },
  {
    id: "m4",
    name: "Paneer Tikka Masala",
    description:
      "Paneer tikka masala is an Indian dish of marinated paneer cheese served in a spice sauce",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <h1>♥ Available Meals ♥</h1>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
