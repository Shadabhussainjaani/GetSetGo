import React from 'react';
import { View, useColorScheme, StyleSheet, Image } from 'react-native';
import { ScreenWidth, ScreenHeight } from '@src/helpers';

const WrapperComp = ({ children, isBackgroundImage }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);
  return (
    <>
      <View style={styles.container}>
        {isBackgroundImage && (
          <Image
            source={require('@src/assets/Images/background.jpeg')}
            style={{
              position: 'absolute',
              height: ScreenWidth / 1.5,
              width: ScreenWidth,
            }}
          />
        )}
        {children}
      </View>
    </>
  );
};

const getStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? 'black' : 'white',
      height: '100%',
      width: '100%',
      padding: 10,
    },
  });
};

export default WrapperComp;
