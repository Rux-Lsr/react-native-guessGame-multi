import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

// Récupère les dimensions de l'écran de l'appareil
const { width, height } = Dimensions.get('window');

const CreateParty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Party</Text>
      <View style={styles.divider} />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Your Name" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Number of participants</Text>
        <TextInput style={styles.input} placeholder="number" keyboardType="numeric" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Temps max</Text>
        <TextInput style={styles.input} placeholder="number" keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#D08A24',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 29,
    marginTop: 28,
  },
  divider: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(231, 156, 215, 0.48)',
    marginTop: 71.02,
  },
  inputGroup: {
    width: '85%',
    marginVertical: 10,
  },
  label: {
    color: '#9796A1',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 28,
    padding: 20,
    fontSize: 17,
    fontFamily: 'Inter',
    color: '#C4C4C4',
    shadowColor: '#E8E8E8',
    shadowOffset: { width: 15, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 45,
  },
  button: {
    width: 252,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 501 - 350, // Ajustez en fonction de la position souhaitée
    backgroundColor: '#D449AE', // Linear gradient non pris en charge nativement, utilisez une bibliothèque tierce si nécessaire
    alignItems: 'center',
    justifyContent: 'center',
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

export default CreateParty;
