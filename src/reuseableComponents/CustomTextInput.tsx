import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {colorCode} from '../configs/Colors';
const {width} = Dimensions.get('window');
interface Props {
  iconImage?: any;
  placeholderText?: string;
  textColor?: string;
  externalStyle?: object;
  errorText?: any;
  handleChange?: any;
  handleBlur?: any;
  value?: any;
  height?: number;
  textInputExternalStyle?: any;
  noEdit?: boolean;
  multiline?: boolean;
}
const CustomTextInput = ({
  iconImage,
  placeholderText,
  textColor,
  externalStyle,
  errorText,
  handleBlur,
  handleChange,
  value,
  textInputExternalStyle,
  noEdit,
  multiline,
}: Props) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <View style={[styles.container, externalStyle]}>
        <TextInput
          style={[
            textInputExternalStyle ? textInputExternalStyle : styles.textInput,
          ]}
          placeholder={placeholderText}
          placeholderTextColor={textColor ? textColor : '#66615C'}
          onBlur={handleBlur}
          onChangeText={handleChange}
          value={value}
          autoCapitalize={'none'}
          editable={noEdit}
          multiline={multiline}
        />
        <Image source={iconImage} style={styles.icon} resizeMode={'contain'} />
      </View>
      {errorText ? <Text style={[styles.errorText]}>{errorText}</Text> : null}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: colorCode.blueGrey,
    borderColor: '#bec2bf',
    // borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 24,
    width: 24,
  },
  textInput: {
    paddingLeft: 4,
    fontSize: 16,
    lineHeight: 21.82,
    fontWeight: '700',
    color: '#66615C',
    paddingVertical: 17,
  },
  errorText: {
    fontSize: 10,
    color: colorCode.red,
    fontWeight: '700',
    marginTop: 5,
  },
});
