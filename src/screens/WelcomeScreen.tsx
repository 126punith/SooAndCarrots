import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../configs/ImagesPath';
import CustomButton from '../reuseableComponents/CustomButton';
import {colorCode} from '../configs/Colors';
const {height, width} = Dimensions.get('screen');

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={ImagePath.welcomeScreenBg}
      resizeMode={'cover'}
      style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{`Soo\nand Carrots`}</Text>
      </View>
      <CustomButton
        buttonStyles={{
          activeOpacity: 0.8,
          style: [
            styles.button,
            {
              backgroundColor: colorCode.primary,
            },
          ],
        }}>
        <Image
          source={ImagePath.signup_arrow}
          style={[styles.icon, styles.marginLeft12]}
        />
        <Text style={[styles.signUpText]}>Sign up for free</Text>
        <View style={styles.circleIcon}>
          <Image source={ImagePath.rightArrow} style={styles.icon} />
        </View>
      </CustomButton>
      <CustomButton
        buttonStyles={{
          activeOpacity: 0.8,
          style: [
            styles.button,
            {
              backgroundColor: colorCode.darkBlue,
            },
          ],
        }}>
        <Image
          source={ImagePath.email}
          style={[styles.icon, styles.marginLeft12]}
        />
        <Text style={[styles.signUpText]}>Continue with Email</Text>
        <View style={styles.circleIcon}>
          <Image source={ImagePath.rightArrow} style={styles.icon} />
        </View>
      </CustomButton>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 16,
    paddingTop: width * 0.9,
  },
  title: {position: 'absolute', top: '5%', left: '22.5%'},
  titleText: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 45,
    color: colorCode.white,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    zIndex: 1,
    color: colorCode.white,
    marginRight: width * 0.4,
    marginLeft: 12,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingLeft: 4,
  },
  icon: {width: 20, height: 20},
  circleIcon: {
    borderColor: colorCode.white,
    borderWidth: 2,
    borderRadius: 22,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    right: 4,
    top: 4,
  },
  marginLeft12: {marginLeft: 12},
});
