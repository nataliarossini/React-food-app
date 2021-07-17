import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-https';
  
const AvailableMeals = () => {
    const[meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    useEffect(() => {
      const transformMeals = (mealsObj) => {
        const loadedMeals = [];

        for (const mealKey in mealsObj) {
          loadedMeals.push({ 
            id: mealKey, 
            name: mealsObj[mealKey].name,
            description: mealsObj[mealKey].description,
            price: mealsObj[mealKey].price,
          });
        }

        setMeals(loadedMeals);
      };

      fetchMeals(
        {url: "https://meals-react-71efd-default-rtdb.europe-west1.firebasedatabase.app/meals.json"},
        transformMeals
      );
    }, [fetchMeals]);

    // const mealAddHandler = (meal) => {
    //   setMeals((prevMeals) => prevMeals.concat(meal));
    // };


    const mealsList = meals.map((meal) => (
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
          <ul>
              {mealsList}
          </ul>
        </Card>
      </section>
    );
};

export default AvailableMeals;