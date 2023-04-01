import React from 'react';
import {Text, View, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {colors} from '../utils/colors';
interface Props {
  image?: any;
  label?: string;
  color?: string;
  leftLabel?: string;
  imageSize?: number;
  rightLabel?: string;
  borderColor?: string;
}
const HeaderComponent = (props: Props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 5,
          justifyContent:
            props?.label === 'know more' ? 'flex-end' : 'flex-start',
        }}>
        <Image
          style={{
            height: props?.imageSize,
            width: props?.imageSize,
            tintColor: colors.white,
            borderRadius: 5,
            transform: [{rotate: '180deg'}],
          }}
          source={props?.image}
        />
        <Text style={[styles.labelSTyle]}>{props?.label}</Text>
      </View>
      <View style={[styles.bottomViewStyle, {borderColor: props?.borderColor}]}>
        <Text style={[styles.textStyle, {color: props?.color}]}>
          {props?.leftLabel}
        </Text>
        <Text style={[styles.textStyleView, {color: props?.color}]}>
          {props?.rightLabel}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(HeaderComponent);

const styles = StyleSheet.create({
  bottomViewStyle: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 5,
    flexDirection: 'row',
  },
  textStyle: {
    color: '#907846',
    textAlign: 'center',
    fontSize: 10,
  },
  textStyleView: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#907846',
  },
  labelSTyle: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
    // width: 'auto',
  },
});
