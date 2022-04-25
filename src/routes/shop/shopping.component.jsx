// import { useContext} from 'react';

// // import ProductCard from '../../components/product-card/product-card.component';
// // import ProductCardComponent from '../../components/productCard/productCard.component';

// import { CategoriesContext } from '../../contexts/categories.context';
// import CategoryPreview from '../../components/category_preview/category.component';

// import './shopping.style.scss';

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <div className='shop=container'>
//       {Object.keys(categoriesMap).map((title) => {
//         const products = categoriesMap[title];
//         return (
//             <CategoryPreview key={title} title={title} products={products} />
//         )
//       }
//       )}
//     </div>
//   );
// };

// export default Shop;

import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/c-preview,component';
import Category from '../category/category.component';

import './shopping.style.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;