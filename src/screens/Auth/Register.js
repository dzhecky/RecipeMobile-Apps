/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../storages/actions/auth';
import showPassword from '../../assets/images/showPassword.png';
import hidePassword from '../../assets/images/hidePassword.png';
import imgPopular2 from '../../assets/images/imgPopular2.jpg';
import IconUser from '../../assets/icons/IconUser.png';
import Lock from '../../assets/icons/Lock.png';
import LockDark from '../../assets/icons/LockDark.png';
import User from '../../assets/icons/User.png';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const authRegister = useSelector(state => state.authRegister);
  const [emailIsActive, setEmailIsActive] = useState(false);
  const [nameIsActive, setNameIsActive] = useState(false);
  const [passwordIsActive, setPasswordIsActive] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleShowPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const submitRegister = () => {
    dispatch(registerAction(name, email, password, navigation));
  };
  return (
    <ScrollView style={styles.page}>
      <View style={styles.page}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle={'light-content'}
        />
        <View style={styles.wrapperImage}>
          <Image source={imgPopular2} style={styles.image} im />
        </View>
        <View style={styles.WrapperTitle}>
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.subTitle}>Register to Recipes App</Text>
        </View>
        <View style={styles.wrapperForm}>
          <TouchableOpacity
            style={
              nameIsActive ? styles.wrapperEmailActive : styles.wrapperEmail
            }>
            {nameIsActive ? (
              <Image source={IconUser} />
            ) : (
              <Image source={User} />
            )}
            <TextInput
              placeholder="myname"
              value={name}
              style={styles.inputEmail}
              onFocus={() => setNameIsActive(true)}
              onBlur={() => setNameIsActive(false)}
              onChangeText={value => setName(value)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              emailIsActive ? styles.wrapperEmailActive : styles.wrapperEmail
            }>
            {emailIsActive ? (
              <Image source={IconUser} />
            ) : (
              <Image source={User} />
            )}
            <TextInput
              placeholder="examplexxx@gmail.com"
              value={email}
              style={styles.inputEmail}
              onFocus={() => setEmailIsActive(true)}
              onBlur={() => setEmailIsActive(false)}
              onChangeText={value => setEmail(value)}
            />
          </TouchableOpacity>
          <View
            style={
              passwordIsActive ? styles.wrapperEmailActive : styles.wrapperEmail
            }
            onPressIn={() => setPasswordIsActive(true)}>
            {passwordIsActive ? (
              <Image source={Lock} />
            ) : (
              <Image source={LockDark} />
            )}
            <TextInput
              placeholder="Password"
              secureTextEntry={!visiblePassword}
              style={styles.inputEmail}
              value={password}
              onFocus={() => setPasswordIsActive(true)}
              onBlur={() => setPasswordIsActive(false)}
              onChangeText={value => setPassword(value)}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={styles.showHidePassword}>
              <Image source={visiblePassword ? hidePassword : showPassword} />
            </TouchableOpacity>
          </View>
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Passowrd?
          </Text>
          <TouchableOpacity style={styles.wrapperBtn} onPress={submitRegister}>
            <Text style={styles.textBtn}>Register</Text>
            {authRegister.isLoading ? (
              <ActivityIndicator
                animating={authRegister.isLoading ? true : false}
                color={'#4d4d4dff'}
              />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.signUp}>
            Have an account?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => navigation.navigate('Login')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
  },
  wrapperImage: {
    display: 'flex',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 275,
    objectFit: 'cover',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  WrapperTitle: {
    display: 'flex',
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins Regular',
    fontWeight: '500',
    fontSize: 20,
    color: '#EFC81A',
  },
  subTitle: {
    fontFamily: 'Poppins Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#C4C4C4',
  },
  wrapperForm: {
    display: 'flex',
    marginBottom: 50,
    marginHorizontal: 15,
  },
  wrapperEmailActive: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#EFC81A',
    elevation: 5,
  },
  wrapperEmail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  inputEmail: {
    marginTop: 3,
    marginLeft: 5,
    fontFamily: 'Poppins Regular',
    fontSize: 15,
    width: '100%',
    color: 'black',
  },
  showHidePassword: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 7,
    marginBottom: 30,
    color: '#999',
    fontFamily: 'Poppins Regular',
    fontSize: 14,
    fontWeight: '500',
  },
  wrapperBtn: {
    backgroundColor: '#EFC81A',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    padding: 15,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins Regular',
  },
  signUp: {
    marginTop: 20,
    textAlign: 'center',
    color: '#999',
    fontFamily: 'Poppins Regular',
    fontSize: 14,
    fontWeight: '500',
  },
  textSignUp: {
    color: '#EFC81A',
  },
});
