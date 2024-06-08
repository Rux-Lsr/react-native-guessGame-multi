import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App({navigation}) {
  const handleVerify = () => {
    navigation.push('party')
  }
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <Text style={styles.login}>Login</Text>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email or phone"
          placeholderTextColor="#C4C4C4"
        />
      </View>
      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  circle1: {
    width: 26,
    height: 25,
    position: 'absolute',
    left: 22,
    top: 38,
    backgroundColor: '#D347B5',
    borderRadius: 9999,
  },
  circle2: {
    width: 26,
    height: 25,
    position: 'absolute',
    left: width - 22 - 26,
    top: height - 38 - 25,
    backgroundColor: '#D347B5',
    borderRadius: 9999,
  },
  login: {
    width: 236,
    position: 'absolute',
    left: 48,
    top: height - 38 - 236,
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    fontFamily: 'Inter',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  emailContainer: {
    width: width - 50,
    height: 93,
    position: 'absolute',
    left: 25,
    top: 139,
  },
  emailLabel: {
    width: 56,
    position: 'absolute',
    left: 2.01,
    top: 0,
    color: '#9796A1',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  inputContainer: {
    width: width - 50,
    height: 65,
    position: 'absolute',
    left: 0,
    top: 28,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    shadowColor: '#E8E8E8',
    shadowOffset: { width: 15, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 45,
  },
  input: {
    width: width - 50,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    shadowColor: '#E8E8E8',
    shadowOffset: { width: 15, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 45,
    paddingLeft: 20,
    fontSize: 17,
    color: '#C4C4C4',
  },
  buttonContainer: {
    width: 252,
    padding: 18,
    position: 'absolute',
    left: 52,
    top: 266,
    backgroundColor: '#D449AE',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFCFC',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
