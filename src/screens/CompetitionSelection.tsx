import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../configs/ImagesPath';
import {colorCode} from '../configs/Colors';
import CustomButton from '../reuseableComponents/CustomButton';

const CompetitionSelection = props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.marginVertical20,
          {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '90%',
            gap: 20,
          },
        ]}>
        <CustomButton
          buttonStyles={{
            onPress: () => {
              props.navigation.navigate('Welcome');
            },
            style: [styles.backIcon],
          }}>
          <Image source={ImagePath.leftArrow} style={[styles.icon]} />
        </CustomButton>
        <Text style={styles.titleText}>Create Account</Text>
      </View>
    </View>
  );
};

export default CompetitionSelection;

const styles = StyleSheet.create({
  marginVertical20: {marginVertical: 20},
  signUpBtnText: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
  },
  backIcon: {
    // position: 'absolute',
    // left: '5%',
    // top: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colorCode.darkBlue,
    borderWidth: 2,
    borderRadius: 22,
    width: 44,
    height: 44,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  icon: {width: 20, height: 20},
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 25,
    paddingTop: 30,
  },
});
