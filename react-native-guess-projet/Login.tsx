import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Obtenez les dimensions de l'écran
const { width, height } = Dimensions.get('window');

const Login = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(211, 73, 177, 0.73)', 'rgba(208, 138, 36, 0.97)']}
        style={styles.backgroundCircle}
      />
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.continueText}>To continue</Text>
      <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Your email or phone" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      <TouchableOpacity>
        <LinearGradient
          colors={['#D449AE', '#D08A24']}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer :{
    marginTop:  height * 0.15,
  },
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backgroundCircle: {
    width: width * 0.95,
    height: height * 0.64,
    borderRadius: width / 2,
    position: 'absolute',
    top: -height * 0.3,
    left: -width * 0.18,
  },
  loginText: {
    position: 'absolute',
    top: height * 0.04,
    left: width * 0.15,
    color: '#8F1B75',
    fontSize: width * 0.1,
    fontWeight: 'bold',
  },
  continueText: {
    position: 'absolute',
    top: height * 0.12,
    left: width * 0.15,
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: '500',
  },
  input: {
    width: width * 0.82,
    height: height * 0.08,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 10,
    fontSize: width * 0.045,
    marginTop: height * 0.03,
    alignSelf: 'center',
  },
  signInButton: {
    width: width * 0.67,
    padding: 18,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
    alignSelf: 'center',
  },
  signInButtonText: {
    textAlign: 'center',
    color: '#FFFCFC',
    fontSize: width * 0.045,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#FE724C',
    fontSize: width * 0.04,
    fontWeight: '700',
    marginTop: height * 0.07,
    alignSelf: 'center',
  },
});

export default Login;
