// import './App.css';
import Home from "./routes/home/home.component";

// Routing libraries for using routes
import {Routes, Route} from 'react-router-dom';
import NavigationComponent from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import ShoppingComponent from "./routes/shop/shopping.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavigationComponent />}>
        {/* index show that whenever there is empty slash it means the component in which it is used is homepage */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<ShoppingComponent />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  
  );
}

export default App;
