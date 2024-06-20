import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { handleAuth } from './Startup';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

// Récupère les dimensions de l'écran de l'appareil
const { width, height } = Dimensions.get('window');

const CreateParty = ({navigation}) => {
  const [name, setName] = useState('')
  const [max, setMax] = useState(0)
  //handleAuth(navigation);
  

  function saveToPartyCollection(name:string, number:number) {
    
    const user = auth().currentUser;
      console.log(user)
      if(user == null)
        return;
      const email = user.email;
      firestore()
      .collection('player')
      .where('mail', '==', email)
      .get()
      .then(querySnapshot => {
        const playerRef = querySnapshot.docs[0].ref; // Get the first document matching the email
        firestore()
          .collection('party')
          .add({
            host: playerRef,
            name: name,
            maxPlayer: number,
            players: [playerRef],
            state: 0 // status de la partie 0|1|-1
          })
          .then(() => {
            console.log('Party saved!');
            navigation.push('playground')
          })
          .catch(error => {
            console.error('Error writing document: ', error);
          });
        })
        .catch(error => {
          console.error('Error finding player: ', error);
        });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Party</Text>
      <View style={styles.divider} />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Party Name" value={name} onChangeText={setName}/>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Number of participants</Text>
        <TextInput style={styles.input} placeholder="number" keyboardType="numeric" value={max} onChangeText={setMax}/>
      </View>
      {/* <View style={styles.inputGroup}>
        <Text style={styles.label}>Temps max</Text>
        <TextInput style={styles.input} placeholder="number" keyboardType="numeric" />
      </View> */}
      <TouchableOpacity style={styles.button} onPress={()=>{
          if(name=='' || max <= 0){
              Alert.alert('veuillez remplir tous les champs')
              return
          }
          saveToPartyCollection(name, max)
        }}>
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
