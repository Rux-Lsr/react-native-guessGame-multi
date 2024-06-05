import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Startup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GUESS THE NUMBER</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </View>
      <Text style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <Text style={styles.footerLink}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    position: 'relative',
    backgroundColor: 'transparent',
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    left: 69,
    top: 57,
    position: 'absolute',
    textAlign: 'center',
    color: '#84067F',
    fontSize: 36,
    fontFamily: 'Inter',
    fontWeight: '800',
    textTransform: 'capitalize',
    letterSpacing: 1.80,
  },
  button: {
    width: 252,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 18,
    paddingBottom: 18,
    left: 54,
    top: 474,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#D347B5',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  footer: {
    width: 257,
    height: 27,
    left: 49,
    top: 551,
    position: 'absolute',
    textAlign: 'center',
  },
  footerText: {
    color: '#18181A',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  footerLink: {
    color: '#FE724C',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
});

export default Startup;
