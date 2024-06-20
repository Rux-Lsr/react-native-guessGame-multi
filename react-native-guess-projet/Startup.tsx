import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('window');
export default function App({navigation}) {

  return (
    <LinearGradient
    colors={['rgba(247.56, 158.44, 24.76, 0.97)', 'rgba(255, 7.44, 200.54, 0.71)']}
    style={styles.container}
  >
    <TouchableOpacity style={[styles.button]} onPress={()=>{navigation.push('login')}}>
      <Text style={styles.buttonText}>Authenticate</Text>
    </TouchableOpacity>
    <Text style={[styles.title, { left: width * 0.19, top: height * 0.08, fontSize: width * 0.1 }]}>GUESS THE NUMBER</Text>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    left: width * 0.15,
    top: height * 0.7, 
    width: width * 0.7, 
    padding: height * 0.02
  },
  buttonText: {
    textAlign: 'center',
    color: '#D347B5',
    fontSize: width * 0.04,
    fontFamily: 'Inter',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    color: '#84067F',
    fontFamily: 'Inter',
    fontWeight: '800',
    textTransform: 'capitalize',
    letterSpacing: 1.80,
  },
});

export function handleAuth(navigation){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if(!user)
    navigation.navigate('startup')
}
