import {
  View,
  Image,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../screens/style';
import {colors} from '../utils/colors';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import {localImages} from '../utils/localImages';

interface Props {
  searchText?: string;
  onleftPress?: ((event: GestureResponderEvent) => void) | undefined;
  onRightPress?: ((event: GestureResponderEvent) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}
const ListHeaderComponent = (props: Props) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  return (
    <View style={styles.ListHeaderComponenetStyle}>
      {!isSearchVisible ? (
        <View style={styles.innerHeaderStyle}>
          <TouchableOpacity
            style={styles.imagePressStyle}
            onPress={props?.onleftPress}>
            <Image
              style={[
                styles.backarrowImageStyle,
                {
                  transform: [{rotate: '180deg'}],
                },
              ]}
              source={localImages.backArrow}
            />
          </TouchableOpacity>
          <CustomButton
            customButtonStyle={{marginHorizontal: 10}}
            buttonText="10M+ CATEGORY"
            image={localImages.youTube}
          />
          <TouchableOpacity
            style={styles.imagePressStyle}
            onPress={props?.onRightPress}>
            <Image
              style={[styles.backarrowImageStyle]}
              source={localImages.backArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSearchVisible(!isSearchVisible)}>
            <Image
              style={styles.searchImageStyle}
              source={localImages.search}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.TextInputViewStyle}>
          <CustomTextInput
            placeholder="search"
            value={props?.searchText}
            placeholderTextColor={colors.black}
            onChangeText={props?.onChangeText}
            mainViewStyle={styles.textInputStyle}
          />

          <TouchableOpacity
            onPress={() => setSearchVisible(!isSearchVisible)}
            style={{position: 'absolute', right: 20}}>
            <Image
              style={{height: 20, width: 20, tintColor: colors.black}}
              source={localImages.minus}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.listHeaderDetails}>
        <Text style={styles.textColorStyle}>{'Name'}</Text>
        <View style={styles.innerHeaderViewStyle}>
          <Text style={styles.textColorStyle}>{'Avg. Points'}</Text>
          <Text style={styles.textColorStyle}>{'Credits '}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ListHeaderComponent);
