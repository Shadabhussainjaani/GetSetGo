import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Wrapper from '@src/screens/Wrapper/WrapperComp';
import Text from '@src/components/text/Text.jsx';
import Button from '@src/components/button/Button';
import { ScreenWidth, ScreenHeight } from '@src/helpers';

const Onboarding = ({ navigation }) => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@src/assets/Images/IntroImage2.jpg')}
            style={styles.introImage}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.headingText}>Find Your Flight</Text>
          <Text style={styles.otherText}>
            Let&#39;s elevate travel together!
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              style={{ width: ScreenWidth - 40, bottom: 0 }}
              text={'Get Started!'}
              onPress={() => navigation.replace('home')}
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    elevation: 10,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  introImage: {
    width: ScreenWidth / 1.5,
    height: ScreenHeight / 1.8,
    borderRadius: ScreenWidth / 1.5,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  otherText: {
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 20,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export default Onboarding;
