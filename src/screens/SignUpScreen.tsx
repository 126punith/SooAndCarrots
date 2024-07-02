import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../reuseableComponents/CustomButton';
import {ImagePath} from '../configs/ImagesPath';
import {colorCode} from '../configs/Colors';
import CustomTextInput from '../reuseableComponents/CustomTextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
const {width} = Dimensions.get('screen');
const SignUpScreen = props => {
  const [checked, setChecked] = useState(false);
  const onSignUpValidation = () => {
    let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let password = /^(?=(.*[^A-Za-z0-9]){3})(?=(.*[A-Z]){3})(?=(.*\d){3}).+/;
    let name = /^([a-zA-Z ]){2,30}$/;

    return yup.object().shape({
      email: yup
        .string()
        .matches(email, 'Please enter a valid email')
        .required('Please, provide your email'),
      firstName: yup
        .string()
        .matches(name, 'Please enter your First Name')
        .required('Please enter your first Name'),
      lastName: yup
        .string()
        .matches(name, 'Please enter your Last Name')
        .required('Please enter your Last Name'),

      password: yup
        .string()
        .min(8, 'Password must be 8 characters long')
        .matches(
          password,
          'Password requires at least 3 uppercase letters, lowercase letters, number, or special letters',
        ),

      confirm: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}
      style={styles.flexOne}>
      <ScrollView
        style={styles.flexOne}
        contentContainerStyle={styles.container}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirm: '',
            firstName: '',
            lastName: '',
          }}
          enableReinitialize={true}
          validationSchema={onSignUpValidation()}
          onSubmit={values => {
            console.log(values, 'values');
          }}
          validateOnChange={true}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
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
              <CustomButton
                buttonStyles={{
                  style: [styles.button, {}],
                  onPress: () => {
                    props.navigation.navigate('CompetitionSelection');
                  },
                }}>
                <Text style={styles.signUpBtnText}>
                  Competition to sign up *{' '}
                </Text>
                <Image
                  source={ImagePath.downArrow}
                  style={[
                    styles.downIcon,
                    {tintColor: colorCode.darkBlue, marginRight: 10},
                  ]}
                />
              </CustomButton>

              <View style={styles.marginVertical20}>
                <CustomTextInput
                  placeholderText={'Email Address'}
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  errorText={
                    errors.email && touched.email ? errors.email : null
                  }
                  value={values.email}
                />
              </View>
              <CustomTextInput
                iconImage={ImagePath.eyeIcon}
                placeholderText={'Enter Password'}
                handleChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                errorText={
                  errors.password && touched.password ? errors.password : null
                }
                value={values.password}
              />
              <CustomTextInput
                iconImage={ImagePath.eyeIcon}
                placeholderText={'Re-Enter Password'}
                handleChange={handleChange('confirm')}
                handleBlur={handleBlur('confirm')}
                errorText={
                  errors.confirm && touched.confirm ? errors.confirm : null
                }
                value={values.confirm}
              />
              <CustomTextInput
                placeholderText={'First Name in English *'}
                handleChange={handleChange('firstName')}
                handleBlur={handleBlur('firstName')}
                errorText={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
                value={values.firstName}
              />
              <CustomTextInput
                placeholderText={'Last Name in English *'}
                handleChange={handleChange('lastName')}
                handleBlur={handleBlur('lastName')}
                errorText={
                  errors.lastName && touched.lastName ? errors.lastName : null
                }
                value={values.lastName}
              />
              <View style={styles.checkboxContainer}>
                <CheckBox
                  style={styles.checkbox}
                  tintColor={colorCode.primary}
                  value={checked}
                  onValueChange={() => setChecked(prev => !prev)}
                />
                <Text style={styles.checkboxTitle}>
                  {' '}
                  By siging up, I agree to Colit's{' '}
                  <Text style={styles.textUnderline}>
                    Terms & Conditions
                  </Text>{' '}
                  and <Text style={styles.textUnderline}>Privacy Policy.</Text>
                </Text>
              </View>
              <CustomButton
                buttonStyles={{
                  onPress: () => {
                    props.navigation.navigate('CompetitionSelection')
                  },
                  style: [
                    styles.button,
                    {backgroundColor: colorCode.primary, marginBottom: 60, justifyContent: 'center', alignItems: 'center'},
                  ],
                }}>
                <Text style={styles.signupbuttonText}>SignUp</Text>
              </CustomButton>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 25,
    paddingTop: 30,
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
  icon: {width: 20, height: 20},
  downIcon: {width: 24, height: 24},
  marginLeft12: {marginLeft: 12},
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingLeft: 12,
    backgroundColor: colorCode.blueGrey,
  },
  signUpBtnText: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
  },
  marginVertical20: {marginVertical: 20},
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderColor: colorCode.blueGrey,
    alignSelf: 'flex-start',
    marginRight: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    width: '90%',
  },
  checkboxTitle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
    color: colorCode.darkBlue,
  },
  textUnderline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  signupbuttonText: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    color: colorCode.white,
  },
});
