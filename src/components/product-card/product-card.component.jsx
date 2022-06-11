import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { changeItemInCart } = useContext(CartContext);

    const addProductToCart = () => changeItemInCart(product, 'increment')
    
    return (
        <div className='product-card-container'>
            <img src={ imageUrl }  alt={ name } loading='lazy' />
            <div className='footer'>
                <span className='name'>{ name }</span>
                <span className='price'>${ price }</span>
            </div>
            <Button 
                buttonType='inverted'
                onClick={ addProductToCart }
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard