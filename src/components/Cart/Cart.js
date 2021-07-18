import { useContext, useState, Fragment } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false); //handle order status when sending order to db
    const [didSubmit, setDidSubmit] =useState(false); // 

    const cartCtx = useContext(CartContext);

    const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    //functions to add or remove from cart
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    };

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch("https://meals-react-71efd-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };
    const cartItems =( 
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem 
                    key={item.id} 
                    name={item.name}
                    amount={item.amount} 
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && (<button className={classes.button} onClick={orderHandler}>Order</button>)}
        </div>
    )

    const cartModalContent = ( //displays normal modal content 
        <Fragment>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (<Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>)}
            {!isCheckout && modalActions}
        </Fragment>
    )

    const isSubmittingModalContent = <p>Sending your order...</p>
    const didSubmitModalContent = <p>Your order was successfully sent.</p>

    return (
        <Modal onClose={props.onClose}>
            {/* displays normal content when not submited */}
            {!isSubmitting && !didSubmit && cartModalContent} 

            {/* displays processing order after user submit */}
            {isSubmitting && isSubmittingModalContent}

            {/* displays if order was successful  */}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
};

export default Cart;