import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
  } from './button.styles';
  
  export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
  };
  
  const getButton = (bType = BUTTON_TYPE_CLASSES.base) =>
    ({
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[bType]);
  
  const Button = ({ children, bType, ...otherProps }) => {
    const CustomButton = getButton(bType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
  };
  
  export default Button;