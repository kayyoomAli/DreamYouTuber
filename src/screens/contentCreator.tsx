import {
  Dimensions,
  FlatList,
  Image,
  InteractionManager,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {data} from '../utils/data';
import {colors} from '../utils/colors';
import {headerData} from '../utils/headerData';
import {linearAnimation} from '../utils/common';
import React, {useEffect, useState} from 'react';
import {localImages} from '../utils/localImages';
import HeaderComponent from '../components/HeaderComponent';
import ListHeaderComponent from '../components/ListHeaderComponent';

const ContentCreator = () => {
  const {width} = Dimensions.get('screen');
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState(0);
  /**
   * @animation
   */
  InteractionManager.runAfterInteractions(() => {
    linearAnimation();
  });

  useEffect(() => {
    linearAnimation();
  }, [filteredData, searchText]);

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  /**
   * @handleSearch function
   * @description loacal search
   */
  const handleSearch = (text: any) => {
    const formattedQuery = text.toLowerCase();
    const resData = data.filter(item => {
      return item?.name?.toLowerCase()?.includes(formattedQuery);
    });
    setFilteredData(resData);
    setSearchText(text);
  };

  /**
   * @_renderItem return ui
   * @description render flatlist data
   */
  const _renderItem = ({item, index}: any) => {
    return (
      <View
        style={[
          styles.renderItemContainerStyle,
          {
            backgroundColor: index % 2 != 0 ? '#252339' : 'black',
          },
        ]}>
        <View style={styles.innerContainerStyle}>
          <Image source={item?.image} style={styles.profileImageStyle} />
          <Text
            style={{
              marginLeft: 10,
              color: colors.white,
            }}>
            {item?.name?.length > 15
              ? item?.name?.slice(0, 10) + '..'
              : item?.name}
          </Text>
          <Image
            source={localImages.info}
            style={styles.infoButtonImageStyle}
          />
        </View>
        <View>
          <Text style={styles.avgPointsTextStyle}>{'Avg. Points'}</Text>
          <Text style={{textAlign: 'center', color: colors.white}}>
            {item?.points}
          </Text>
        </View>
        <View>
          <Text style={styles.avgPointsTextStyle}>{'Credits'}</Text>
          <Text style={{color: colors.white, textAlign: 'center'}}>
            {item?.credits}
          </Text>
        </View>
        <Image style={styles.addIconStyle} source={localImages.add} />
      </View>
    );
  };

  return (
    <View style={styles.mainViewStyle}>
      <SafeAreaView />
      <View style={styles.topcustomHeaderStyle}>
        <HeaderComponent
          imageSize={20}
          leftLabel={'My Team  '}
          rightLabel={' 3/11'}
          color={colors.lightPurple}
          image={localImages.backArrow}
          label={'Most Popular Contest'}
          borderColor={colors.lightPurple}
        />
        <HeaderComponent
          image={localImages.info}
          label={'know more'}
          imageSize={10}
          rightLabel={'  72'}
          color={colors.yellow}
          leftLabel={'CREDITS LEFT'}
          borderColor={colors.yellow}
        />
      </View>
      <View style={styles.categoryMainViewStyle}>
        {headerData?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => setSelectedCategory(index)}
              style={{width: width / 5}}>
              <View
                style={[
                  styles.headerViewStyle,
                  {
                    backgroundColor:
                      selectedCategory === index
                        ? colors.purple
                        : colors.lightgrey,
                  },
                ]}>
                <Image
                  style={[styles.iconStyle, {tintColor: item?.tintColor}]}
                  source={item?.image}
                />
                <Text style={styles.countsTextStyle}>{item?.counts}</Text>
                <Text style={{fontSize: 7, color: colors.white}}>
                  {'Subscribers'}
                </Text>
              </View>
              <View
                style={[
                  styles.metaDataViewStle,
                  {
                    backgroundColor:
                      selectedCategory === index
                        ? colors.lightcolor
                        : colors.lightgrey,
                  },
                ]}>
                {item?.metaDat?.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      style={styles.metaDataImageStyel}
                      source={item?.image}
                    />
                  );
                })}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <ListHeaderComponent
        onleftPress={() => {
          if (selectedCategory != 0) {
            setSelectedCategory(selectedCategory - 1);
          }
        }}
        onRightPress={() => {
          if (selectedCategory != 4) {
            setSelectedCategory(selectedCategory + 1);
          }
        }}
        onChangeText={(text: any) => setSearchText(text)}
        searchText={searchText}
      />
      <FlatList
        data={filteredData}
        renderItem={_renderItem}
        keyExtractor={item => item?.id?.toString()}
      />
    </View>
  );
};

export default React.memo(ContentCreator);
