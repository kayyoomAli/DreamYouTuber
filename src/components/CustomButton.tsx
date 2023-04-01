import {
  Text,
  TextStyle,
  ViewStyle,
  StyleProp,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

/**
 * @ButtonProps interface
 * @description defining the props of CustomButton
 */
interface ButtonProps {
  buttonText?: string;
  disabled?: boolean | undefined;
  buttonTextStyle?: StyleProp<TextStyle>;
  customButtonStyle?: StyleProp<ViewStyle>;
  image?: any;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
}

/**
 * @CustomButton interface
 * @description return the CustomButton for reuseablilty
 */
const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.disabled}
      style={[styles.loginBtn, props.customButtonStyle]}
      onPress={props.onPress}>
      <Text style={[styles.btnText, props.buttonTextStyle]}>{'Select 1'}</Text>
      <Image
        style={{height: 20, width: 20, marginHorizontal: 5}}
        source={props?.image}
      />
      <Text style={[styles.btnText, props.buttonTextStyle]}>
        {props.buttonText || 'Enter text'}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);

const styles = StyleSheet.create({
  loginBtn: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#4854f0',
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
