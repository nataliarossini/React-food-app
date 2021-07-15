import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Freshly baked treats, delivered to you!</h2>
      <p>
        Choose your favorite treat from our broad selection of available breads, pastries, cakes and much more. 
        Enjoy anytime at your home.
      </p>
      <p>
        All our goodies are baked with high-quality ingredients, freshly made everyday by the
        best bakers in London!
      </p>
    </section>
  );
};

export default MealsSummary;