import {
  View,
  Text,
  Image,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleProp,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';
/**
 * @CustomTextInputProps interface
 * @description defining the props of TextInput
 */
interface CustomTextInputProps {
  ref?: any;
  onFocus?: any;
  leftIcon?: any;
  inputMode?: any;
  rightIcon?: any;
  leftText?: string;
  editable?: boolean;
  lefIconOnPress?: any;
  placeholder?: string;
  rightIconOnPress?: any;
  value?: string | undefined;
  placeholderTextColor?: string;
  maxLength?: number | undefined;
  mainViewStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
  TextInputstyle?: StyleProp<TextStyle> | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

/**
 * @CustomTextInput function
 * @description custom component of TextInput
 */
const CustomTextInput = React.forwardRef(
  (props: CustomTextInputProps, ref: any) => {
    return (
      <View style={[styles.mainContainerStyle, props.mainViewStyle]}>
        {props.leftIcon && (
          <TouchableOpacity activeOpacity={0.7} onPress={props.lefIconOnPress}>
            <Image
              resizeMode="contain"
              source={props.leftIcon}
              style={[styles.imageStlye, props.leftIconStyle]}
            />
          </TouchableOpacity>
        )}
        {props.leftText && (
          <TouchableOpacity activeOpacity={0.7} onPress={props.lefIconOnPress}>
            <Text style={{color: 'black'}}>{props.leftText}</Text>
          </TouchableOpacity>
        )}
        <TextInput
          ref={ref}
          value={props.value}
          editable={props.editable}
          maxLength={props.maxLength}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder || 'Placeholder'}
          style={[styles.inputStyle, props.TextInputstyle]}
          placeholderTextColor={props.placeholderTextColor || 'black'}
        />
        {props.rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.rightIconOnPress}>
            <Image
              resizeMode="contain"
              source={props.rightIcon}
              style={[styles.imageStlye, props.rightIconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default React.memo(CustomTextInput);

const styles = StyleSheet.create({
  mainContainerStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  imageStlye: {
    height: 20,
    width: 20,
  },
});
