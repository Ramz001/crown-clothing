import { ProductCardContainer, Footer } from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { changeItemInCart } = useContext(CartContext);

    const addProductToCart = () => changeItemInCart(product, 'increment')
    
    return (
        <ProductCardContainer>
            <img src={ imageUrl }  alt={ name } loading='lazy' />
            <Footer>
                <span>{ name }</span>
                <span>${ price }</span>
            </Footer>
            <Button 
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={ addProductToCart }
            >
                Add to cart
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard