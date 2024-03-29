/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {splash} from '../../assets';
import {Logo} from '../../assets';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(auth.data ? 'MainApp' : 'Auth');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={styles.background} />
      {/* <View style={styles.wrapperLogo}>
        <Logo style={styles.logo} />
        <Text style={styles.text}>Food Recipes App</Text>
      </View> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  wrapperLogo: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    backgroundColor: '#EFC81A',
    objectFit: 'cover',
  },
  logo: {
    margin: 'auto',
    alignSelf: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    fontWeight: '900',
    marginTop: 15,
  },
});
