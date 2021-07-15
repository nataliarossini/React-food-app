import { Fragment } from "react";

import HeaderCartButton from './HeaderCartButton';
import bread from '../../assets/bakery3.jpg';
import classes from './Header.module.css';
import MealsSummary from "../Meals/MealsSummary";
const Header = props => {
    return  (
        <Fragment>
            <header className={classes.header}>
                <h1>The Bakery</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={bread} alt='sourdough bread' />
                <MealsSummary />
            </div>
        </Fragment>
    )
};

export default Header;