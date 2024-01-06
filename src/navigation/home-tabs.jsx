import React from 'react';
import Text from '@src/components/text/Text.jsx';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeDrawer from './home-drawer';
// import Me from 'src/screens/profile/me';
// import Cart from 'src/screens/cart/cart';
// import Category from 'src/screens/shop/category';
// import Wishlist from 'src/screens/wishlist';
import Tabbar from '@src/containers/Tabbar';
import HomeScreen from '@src/screens/Home/Homescreen';
import HomeScreen2 from '@src/screens/Home/Homescreen2';
// import {homeTabs} from 'src/config/navigator';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function HomeTabs(peops) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Home2'} component={HomeScreen2} />
      {/* <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return <Entypo color={'#009DAC'} name={'home'} size={25} />;
            else return <Entypo color={'gray'} name={'home'} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name={'Home2'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return <Entypo color={'#009DAC'} name={'home'} size={25} />;
            else return <Entypo color={'gray'} name={'home'} size={25} />;
          },

          tabBarLabel: 'Statistics',
        }}
      /> */}
      {/* <Tab.Screen name={homeTabs.shop} component={Category} />
      <Tab.Screen name={homeTabs.wish_list} component={Wishlist} />
      <Tab.Screen name={homeTabs.cart} component={Cart} />
      <Tab.Screen name={homeTabs.me} component={Me} /> */}
    </Tab.Navigator>
  );
}
