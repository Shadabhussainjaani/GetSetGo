import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Wrapper from '@src/screens/Wrapper/WrapperComp';
import { useDispatch, useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import { ScreenWidth, ScreenHeight } from '@src/helpers';

const FlightsListing = ({ navigation, route }) => {
  const { selectedDestination, selectedSource } = route?.params?.payload;
  const [filteredData, setFilteredData] = useState([]);

  const {
    apiLoad,
    flightDetails: { result },
  } = useSelector(state => state?.flights);

  const filterBySelectedCity = () => {
    if (result?.length > 0) {
      let newArr = result?.map((item, index) => {
        if (
          item?.displayData?.source?.airport?.cityName == selectedSource &&
          item?.displayData?.destination?.airport?.cityName ==
            selectedDestination
        ) {
          return item;
        }
      });
      newArr = newArr.filter(function (element) {
        return element !== undefined;
      });
      return () => newArr;
    }
  };
  const newFun = filterBySelectedCity();

  useEffect(() => {
    if (result?.length > 0) {
      setFilteredData(newFun(selectedDestination, selectedSource));
    }
  }, [result]);

  const getDateTime = dateTime => {
    var dateObject = new Date(dateTime);
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1;
    var year = dateObject.getFullYear() % 100;
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

    {
      new Date(item?.displayData?.source?.depTime).getDate() +
        '/' +
        parseInt(new Date(item?.displayData?.source?.depTime).getMonth()) +
        1 +
        '/' +
        (new Date(item?.displayData?.source?.depTime).getFullYear() % 100);
    }
  };

  return (
    <Wrapper isBackgroundImage>
      <View style={styles.container}>
        {apiLoad ? (
          <>
            <AnimatedLottieView
              source={require('@src/assets/Lottie/Airplane.json')}
              autoPlay
              loop={true}
              speed={1.5}
              style={{ height: ScreenWidth, width: ScreenWidth, marginTop: 50 }}
            />
          </>
        ) : (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <View style={styles.flightDetailsContainer}>
                <Text style={styles.cityName}>{selectedSource} 🌍</Text>
                <View
                  style={{
                    width: '40%',
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    height: 0,
                    borderColor: 'white',
                  }}
                />
                <Text style={styles.cityName}>🌍 {selectedDestination}</Text>
              </View>
              <View style={styles.flightsContainers}>
                {filteredData?.length > 0 &&
                  filteredData?.map((item, index) => (
                    <View key={index} style={styles.modalContainer}>
                      <View
                        style={[
                          styles.flightDetailsContainer,
                          { paddingHorizontal: 30 },
                        ]}>
                        <View>
                          <Text style={styles.cityName}>
                            {item?.displayData?.source?.airport?.cityName}
                          </Text>
                          <Text style={styles.timeDate}>
                            {getDateTime(item?.displayData?.source?.depTime)}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: '40%',
                            borderWidth: 1,
                            borderStyle: 'dashed',
                            height: 0,
                            borderColor: 'black',
                          }}
                        />
                        <View>
                          <Text
                            style={{
                              position: 'absolute',
                              right: 50,
                              top: 10,
                            }}>
                            {item?.displayData?.totalDuration}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.cityName}>
                            {item?.displayData?.destination?.airport?.cityName}
                          </Text>
                          <Text style={styles.timeDate}>
                            {getDateTime(
                              item?.displayData?.destination?.arrTime,
                            )}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.fairComp}>
                        <Text style={{ fontSize: 20, color: 'black' }}>
                          Fair: ₹{item?.fare}
                        </Text>
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  modalContainer: {
    height: ScreenHeight / 6,
    width: ScreenWidth - 40,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  flightsContainers: {
    marginTop: 30,
  },
  flightDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ScreenWidth - 40,
    alignItems: 'center',
  },
  cityName: { fontSize: 18, color: '#000000' },
  timeDate: { fontSize: 12, color: '#000000' },
  fairComp: { marginTop: 20 },
});

export default FlightsListing;
