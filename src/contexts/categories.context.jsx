import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js'
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap }

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments();
            setCategoriesMap(categories);
            console.log(categories);
        }

        getCategoriesMap()
    },[])

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}
