import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Obtenez les dimensions de l'écran
const { width, height } = Dimensions.get('window');

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.subHeader}>To continue</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full name</Text>
        <TextInput style={styles.input} placeholder="Arlene Mccoy" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="prelookstudio@gmail.com" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="••••••••" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>sign Up</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Have an account Already? </Text>
        <Text style={styles.signInText}>Sign in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width *1, // 90% de la largeur de l'écran
    height: height * 1, // 90% de la hauteur de l'écran
    backgroundColor: '#9F1B82',
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#D08A24',
    fontSize: width * 0.1, // 10% de la largeur de l'écran
    fontWeight: 'bold',
    letterSpacing: 1.8,
  },
  subHeader: {
    textAlign: 'center',
    color: 'white',
    fontSize: width * 0.055, // 5.5% de la largeur de l'écran
    fontWeight: '500',
    letterSpacing: 6,
    marginTop: height * 0.01, // 1% de la hauteur de l'écran
  },
  inputContainer: {
    marginTop: height * 0.02, // 2% de la hauteur de l'écran
  },
  label: {
    color: '#FFFCFC',
    fontSize: width * 0.04, // 4% de la largeur de l'écran
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#E79CD7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#760B5E',
    padding: 10,
    fontSize: width * 0.04, // 4% de la largeur de l'écran
    marginTop: height * 0.005, // 0.5% de la hauteur de l'écran
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05, // 5% de la hauteur de l'écran
  },
  buttonText: {
    color: '#D347B5',
    fontSize: width * 0.04, // 4% de la largeur de l'écran
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02, // 2% de la hauteur de l'écran
  },
  footerText: {
    color: '#FFFCFC',
    fontSize: width * 0.035, // 3.5% de la largeur de l'écran
    fontWeight: '500',
  },
  signInText: {
    color: 'rgba(247, 158, 24, 0.97)',
    fontSize: width * 0.035, // 3.5% de la largeur de l'écran
    fontWeight: '700',
  },
});

export default SignUp;
