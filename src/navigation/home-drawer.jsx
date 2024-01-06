import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from 'src/screens/home';

import Sidebar from 'src/containers/Sidebar';

import { homeDrawer } from 'src/config/navigator';

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get('window');

const WIDTH_DRAWER = width * 0.78;

const drawerStyle = {
  width: WIDTH_DRAWER,
};

export default function HomeDrawer() {
  //   const [fetchedData, setFetchedData] = useState([])
  //   var homeData;
  //  async function name() {
  //   var homeData = "fufyffyufyfyu";
  //      homeData = await AsyncStorage.getItem('@homeData');
  //      homeData = JSON.parse(homeData)
  //      setFetchedData(homeData)
  // //  return homeData;

  //   }
  //  name() ;
  return (
    // fetchedData &&
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      initialRouteName={homeDrawer.home}
      screenOptions={{ headerShown: false }}
      drawerStyle={drawerStyle}>
      {/* <Drawer.Screen name={homeDrawer.home} component={Home}  initialParams={{"homeData":fetchedData}}/> */}
      <Drawer.Screen name={homeDrawer.home} component={Home} />
    </Drawer.Navigator>
    // :

    // <Drawer.Navigator
    //   drawerContent={props => <Sidebar {...props} />}
    //   initialRouteName={homeDrawer.home}
    //   screenOptions={{ headerShown: false }}
    //   drawerStyle={drawerStyle}>
    //   <Drawer.Screen name={homeDrawer.home} component={Home}/>
    // </Drawer.Navigator>

    // fetchedData ?<Drawer.Navigator
    //   drawerContent={props => <Sidebar {...props} />}
    //   initialRouteName={homeDrawer.home}
    //   screenOptions={{ headerShown: false }}
    //   drawerStyle={drawerStyle}>
    //   <Drawer.Screen name={homeDrawer.home} component={Home}  initialParams={{"bhang":fetchedData}}/>
    // </Drawer.Navigator> : <View></View>
  );
}
