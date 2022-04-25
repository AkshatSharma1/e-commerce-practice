// import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from '../shop-data';
// // import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const ProductContext = createContext({
//     products: [],

// });

// export const ProductsProvider = ({children})=>{
//     //here useState contains empty array initially until we set our firebase store
//     const [products, setProducts] = useState([]);

//     // useEffect(()=>{
//     //     addCollectionAndDocuments('categories', SHOP_DATA);
//     // },[]);

//     useEffect(() => {
//         const getCategoriesMap = async()=>{
//             const categorymap = await getCategoriesAndDocuments();
//             console.log(categorymap)
//         }

//         getCategoriesMap();
//       }, []);

//     const value = {products};

//     return (
//         <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
//     )
// }

import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};