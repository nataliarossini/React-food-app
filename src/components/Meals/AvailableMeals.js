import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sourdough Bread',
      description: 'Organic white sourdough, perfect for your morning toast',
      price: 3.99,
    },
    {
      id: 'm2',
      name: 'Pain ou Chocolat',
      description: 'For the chocolate lovers...',
      price: 2.5,
    },
    {
      id: 'm3',
      name: 'Croissaint',
      description: 'Layered and buttery as it should be!',
      price: 2.00,
    },
    {
      id: 'm4',
      name: 'Baguette',
      description: 'The traditional crusty white french stick.',
      price: 1.99,
    },
  ];
  
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
      id={meal.id}
      key={meal.id} 
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