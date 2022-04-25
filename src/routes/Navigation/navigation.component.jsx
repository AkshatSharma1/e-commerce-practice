import React from "react";
import { Outlet, Link } from "react-router-dom";
// import fragment
import { Fragment, useContext } from "react";
// import "./navigation.styles.scss";
import { useNavigate } from "react-router-dom";

// import logo as component
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import CartComponent from "../../components/cart/cart.component";
import CartdropComponent from "../../components/cart-dropdown/cartDrop.component";
import { CartContext } from "../../contexts/cart.context";

import {
  NavigationContainer,
  LogoContainer,
  NavBarLinks,
  NavBarLink,
} from "./navigation.styles";

// Navigation bar
const NavigationComponent = () => {
  const navigate = useNavigate();

  //current value of user extract
  //set user not required now->onAuth
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser)

  //no longer needed as onAuthStateChangedListener is taking care of signIn and signOut
  // const signOutHandler = async () => {
  //   await signOutUser();

  //   //no need to change currentuser here as onAuth change handler is taking care
  //   // setCurrentUser(null);
  // };

  const shoppingPage = () => {
    navigate("/shop");
  };

  return (
    // or <></>
    <Fragment>
      {/* <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="/shop"
            // key={identifier}
          >
            SHOP
          </Link>
          
          whenever currenet user is signed in, then show signOut link
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </span>
            

          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}

          <CartComponent />
        </div>
        {isCartOpen && <CartdropComponent />}
      </div> */}

      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavBarLinks>
          <NavBarLink to="/shop">SHOP</NavBarLink>

          {currentUser ? (
            <NavBarLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavBarLink>
          ) : (
            <NavBarLink to="/auth">SIGN IN</NavBarLink>
          )}
          <CartComponent />
        </NavBarLinks>
        {isCartOpen && <CartdropComponent />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationComponent;
