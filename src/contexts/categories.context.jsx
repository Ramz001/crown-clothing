import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const CategoriesReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload,
            };
        default:
            throw new Error("CategoriesReducer: action type not recognized");
    }
}

const INITIAL_STATE = {
    categoriesMap: {},
}

export const CategoriesProvider = ({ children }) => {
    const [{ categoriesMap }, dispatch] = useReducer(CategoriesReducer, INITIAL_STATE);

    const setCategoriesMap =  ( e ) => {
        dispatch({
            type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
            payload: e,
        });
    }

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments();
            setCategoriesMap(categories);
        }

        getCategoriesMap()
    },[])

    const value = { categoriesMap }
    
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}
