import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Obtenez les dimensions de l'écran pour l'adaptabilité
const { width, height } = Dimensions.get('window');

const PlayGround = () => {
  const [guessTime, setGuesstime] = useState(true)

  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#D449AE', '#D08A24']}
        style={styles.image}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={{position:'absolute', left:50, top:25, fontSize:40, color:'white'}}>?</Text>
      </LinearGradient>
      
      <Text style={styles.title}>Guess My Number Game</Text>
      <View style={styles.inputContainer}>
        {
        (guessTime) ?
          <Text style={styles.label}>Guess a number</Text>
        :
        <Text style={styles.label}>Enter your guess number</Text>
        }
        <TextInput style={styles.input} placeholder='type a number' keyboardType='numeric'/>
      </View>
      <LinearGradient
        colors={['#D449AE', '#D08A24']}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.buttonText}>Check now</Text>
      </LinearGradient>
      
      <Text style={styles.score} >Player:{'\n'}
      Score:{'\n'}
      Highest-Score: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 123,
    height: 107,
    borderRadius: 25,
    position: 'absolute',
    top: height * 0.28, // Calculé par rapport à la hauteur de l'écran
    alignSelf: 'center',
  },
  title: {
    color: '#D08A24',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    position: 'absolute',
    top: height * 0.1578, // Calculé par rapport à la hauteur de l'écran
    alignSelf: 'center',
  },
  inputContainer: {
    position: 'absolute',
    top: height * 0.5, // Calculé par rapport à la hauteur de l'écran
    alignSelf: 'center',
  },
  label: {
    color: '#9796A1',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  input: {
    width: 239,
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: 'whitesmoke',
    marginTop: 28,
    padding: 15,
    fontSize: 16,
    color: 'rgba(247.56, 158.44, 24.76, 0.97)',
    fontFamily: 'Inter',
    fontWeight: '500',
    shadowColor: '#E8E8E8',
    shadowOffset: { width: 15, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 45,
  },
  button: {
    width: 239,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#D449AE', // Remplacer le gradient par une couleur unie
    position: 'absolute',
    top: height * 0.7094, // Calculé par rapport à la hauteur de l'écran
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'center',
  },
  score: {
    color: 'rgba(247.56, 158.44, 24.76, 0.97)',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    position: 'absolute',
    top: height * 0.8734,
    left: width * 0.5,
    alignSelf: 'center',
  },
});

export default PlayGround;
