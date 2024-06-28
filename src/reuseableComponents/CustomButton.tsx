import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ButtonProps = {
  buttonStyles: TouchableOpacityProps;
  children?: React.ReactNode;
};
const CustomButton: React.FC<ButtonProps> = ({buttonStyles, children}) => {
  return (
    <TouchableOpacity accessible activeOpacity={0.8} {...buttonStyles}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
