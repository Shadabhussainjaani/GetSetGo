import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

const Button = ({ style, text, onPress }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      height: 50,
    },
    button: {
      backgroundColor: isDarkMode ? '#ffffff' : '#000000',
      width: '100%',
      height: '100%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: { color: isDarkMode ? '#000000' : '#ffffff' },
  });
};

export default Button;
