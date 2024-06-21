import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,TextInput, Alert } from 'react-native';
import { useRef, useState } from 'react';
import firestore from '@react-native-firebase/firestore'

const { width, height } = Dimensions.get('window');

GoogleSignin.configure({
  webClientId: '822618260133-chbi6545d5ntqo78n7sitj8p1erd447m.apps.googleusercontent.com',
});
export default function App({navigation}) {
  
  const [email, setEmail] = useState('')
  const [mdp, setMdp] = useState('')
  async function onEmailSignUp(email:string, password:string) {
    try {
      // Créer un utilisateur avec un e-mail et un mot de passe
      const authResult = await auth().createUserWithEmailAndPassword(email, password);
      // Vous pouvez maintenant obtenir les données de l'utilisateur avec authResult.user
      Alert.alert('Inscription réussie avec l\'e-mail : ' + authResult.user.email);
      // Naviguer vers 'party' après l'inscription
      navigation.push('party');
    } catch (e) {
      console.log(JSON.stringify(e));
      Alert.alert('Inscription échouée: ' + e);
    }
  }

  
  const handleVerify = (email:string, password:string) => {
    if(email == '' || password == ''){
      Alert.alert('fill All the inputs')
      return
    }
    onEmailSignUp(email, password)
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
          placeholder="Your email "
          placeholderTextColor="#C4C4C4"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#C4C4C4"
          secureTextEntry={true}
          value={mdp}
          onChangeText={setMdp}
        />
      </View>
      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={()=>{handleVerify(email, mdp)}}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    margin:5
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
    marginTop:40
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


