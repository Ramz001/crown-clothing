import { CategoryPreviewContainer, Title, Preview} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
    return(
        <CategoryPreviewContainer>
            <Title to={`/shop/${title.toLowerCase()}`}>{ title }</Title>
            <Preview>
                {
                    products.items
                        .filter((_, index ) => index < 4)
                        .map(product  => (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;