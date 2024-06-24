
import { firebase } from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Alert, Button } from 'react-native';
import LoadingScreen from './LoadingComponent';

// Obtenez les dimensions de l'écran
const { width, height } = Dimensions.get('window');
  

const Login = ({navigation}) => {
  const [pseudo, setPseudo] = useState('');
  const [wait, setWait] = useState(false)

  const handleSubmit = () => {
    const playerRef = firebase.firestore().collection('player')
    if(pseudo == '')
      {
        Alert.alert(
          'Oups!!!',
          'Veuillez remplir le choix'
        )
        return
      }
      setWait(true)
    playerRef.where('nom', '==', pseudo)
    .get().then((snapshot)=>{
      if(!snapshot.empty){
        navigation.push('join a party', {
          pseudo:pseudo
        })
      }else{
        playerRef.add({
          nom:pseudo,
          positionChosen:[],
          positionPlayed:[]
        })
       
        navigation.push('join a party', {
          pseudo:pseudo
        })
      }
      setWait(false)
    })
    
  };

  return (
    <View style={{ backgroundColor: 'white', padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {
        wait ? LoadingScreen():
        <View>
          <Text>Entrez votre pseudonyme :</Text>
          <TextInput
            placeholder="Pseudonyme"
            onChangeText={setPseudo}
            value={pseudo}
          />
          <Button
            title="Soumettre"
            onPress={handleSubmit}
            color="#007AFF" // Couleur bleue assortie au blanc
          />
        </View>
      }
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
