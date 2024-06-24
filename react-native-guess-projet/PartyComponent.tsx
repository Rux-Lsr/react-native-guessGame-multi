import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, Alert } from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore'

const {width, height} = Dimensions.get('window');
const PartyComponent = ({route, navigation}) => {
  //handleAuth(navigation);
  const [parties, setParties] = useState([]);
  const { pseudo } = route.params
  const [wait, setWait] = useState(false)

  useEffect(() => {
    // Créez un écouteur en temps réel pour la collection "party"
    const unsubscribe = firestore()
      .collection('party')
      .onSnapshot(querySnapshot => {
        const partyData = Array()
        querySnapshot.forEach(doc => {
          const { name, maxPlayer, players , state} = doc.data();
          const currentPlayers = players ? players.length : 0; 
          partyData.push({ id: doc.id, name, maxPlayer, currentPlayers, state });
        });
        setParties(partyData);
      });

    // Nettoyez l'écouteur lorsque le composant est démonté
    return () => unsubscribe();
  }, []);

  
  const handleCreateAparty = () =>{
    setWait(true)
    const partyRef = firebase.firestore().collection('party')
    
    partyRef.where('host', '==', pseudo).get().then((snapshoot)=>{
      if(!snapshoot.empty){
        Alert.alert('Impossible', 'Vous avez deja un sallon ouvert')
        return
      }else{
        partyRef.add({
          host: pseudo,
          maxPlayer:2,
          hostPlayerSet:[],
          openentSet:[],
          oponent:''
        }).then(()=>{
          setWait(false);
          Alert.alert('Success', 'En attente de participant')
        }).catch((e)=>{
            Alert.alert('Erreur', e)
            setWait(true)
          }
        )
      }
    })
    
  }

  return (
    <View style={styles.container}>
      
    {/* Votre barre de recherche ici */}
    <View style={styles.content}>
    <Button
        title="Creer une partie"
        onPress={handleCreateAparty}
        color="#007AFF" // Couleur bleue assortie au blanc
      />
      {parties.map((party:any) => (
        <TouchableOpacity key={party.id}>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>{party.host}</Text>
              <Text style={styles.subtitle}>
                 {party.oponent==undefined?"En attente":"En cours"}
              </Text>
            </View>
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    padding: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1
  },
  content: {
    position: 'absolute',
    top: 20,
    left: 17,
    right: 17,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    color: '#27292E',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 21.60,
  },
    subtitle: {
      color: 'rgba(93, 95.54, 102.06, 0.46)',
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '600',
      lineHeight: 18.90,
    },
    divider: {
      height: 1,
      backgroundColor: '#EDEDED',
      marginVertical: 14,
    },
  })

  export default PartyComponent;


