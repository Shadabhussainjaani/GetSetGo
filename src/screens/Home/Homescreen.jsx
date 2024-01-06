import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Wrapper from '@src/screens/Wrapper/WrapperComp';
import Text from '@src/components/text/Text.jsx';
import Button from '@src/components/button/Button';
import { ScreenWidth, ScreenHeight } from '@src/helpers';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';
import { getAllFlightsDetails } from '@src/modules/findflights/actions';
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const source = [
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Mumbai', value: 'Mumbai' },
  ];
  const destination = [
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Chennai', value: 'Chennai' },
  ];
  const searchFlight = () => {
    if (!selectedSource || !selectedDestination) {
      Alert.alert(
        'Get Set Go!',
        'Please select Onboarding place and Destination place.',
        [
          {
            text: 'Ok',
            onPress: () => {},
          },
        ],
      );
      return;
    }
    dispatch(
      getAllFlightsDetails({
        selectedSource,
        selectedDestination,
      }),
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <Wrapper isBackgroundImage>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.headerText}>Let's Book Your Flight ✈️</Text>
            </View>
            <View>
              <Image
                source={require('@src/assets/Images/man.png')}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.dropDownContainer}>
                <Text style={styles.label}>From:</Text>
                <Dropdown
                  style={{
                    marginBottom: 20,
                  }}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.placeholderStyle}
                  data={source}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={selectedSource}
                  onChange={item => {
                    setSelectedSource(item.value);
                  }}
                />
              </View>
              <View style={styles.dropDownContainer}>
                <Text style={styles.label}>To:</Text>
                <Dropdown
                  style={{
                    marginBottom: 20,
                  }}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.placeholderStyle}
                  data={destination}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={selectedDestination}
                  onChange={item => {
                    setSelectedDestination(item.value);
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}>
                <View style={styles.dateContainer}>
                  <Text style={styles.label}>Departure:</Text>
                  <Text>
                    {/* {new Date().getDate() +
                      '/' +
                      new Date().getMonth() +
                      1 +
                      '/' +
                      new Date().getFullYear()} */}
                    2023-03-31{' '}
                  </Text>
                </View>
                <View style={styles.dateContainer}>
                  <Text style={styles.label}>Return:</Text>
                  <Text>-</Text>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Button
                  style={{ width: ScreenWidth - 60, bottom: 0 }}
                  text={'Search'}
                  onPress={() => searchFlight()}
                />
              </View>
            </View>
          </View>
          {/* <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <Text>Upcoming </Text>
              <Text>Upcoming </Text>
            </View>
            <View style={styles.modalContainer}></View>
          </View> */}
        </View>
      </Wrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    width: '80%',
  },
  imageStyle: {
    height: 35,
    width: 35,
  },
  mainContainer: {
    // marginTop: 30,
  },
  modalContainer: {
    height: ScreenHeight / 2.3,
    width: '100%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 30,
    alignItems: 'center',
  },
  dropDownContainer: {
    borderWidth: 1,
    height: 60,
    width: ScreenWidth - 60,
    borderRadius: 10,
    marginTop: 20,
    borderColor: 'gray',
    padding: 8,
  },
  dateContainer: {
    borderWidth: 1,
    height: 60,
    width: ScreenWidth / 2.5,
    borderRadius: 10,
    marginTop: 20,
    borderColor: 'gray',
    padding: 10,
  },
  placeholderStyle: {
    color: '#000000',
  },
  label: { fontSize: 12 },
});

export default HomeScreen;
