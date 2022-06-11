import "./category.styles.scss";
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [ products, setProducts ] = useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap, category])

    return (
        <>
        <h2 className="category-title">{ category.toUpperCase() }</h2>
        <div className="category-container">
            {
                products &&
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
        </>
    )
}

export default Category