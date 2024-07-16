import classes from './CartButton.module.css';
import { uiActions } from '../store/UI-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };
  
    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>
    );
};

export default CartButton;
