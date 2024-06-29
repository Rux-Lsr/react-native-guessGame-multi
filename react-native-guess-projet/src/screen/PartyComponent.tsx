import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, Alert } from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore'
import LoadingScreen from './LoadingComponent';
import { GameStates } from './GameStates';

const {width, height} = Dimensions.get('window');
const PartyComponent = ({route, navigation}) => {
  //handleAuth(navigation);
  const [parties, setParties] = useState<[]>([]);
  const { pseudo, isdarktheme } = route.params
  const [wait, setWait] = useState(false)

  useEffect(() => {
    // Créez un écouteur en temps réel pour la collection "party"
    const unsubscribe = firestore()
      .collection('party')
      .onSnapshot(querySnapshot => {
        const partyData = Array()
        querySnapshot.forEach(doc => {
          const { host, maxPlayer} = doc.data();
          partyData.push({ id: doc.id, host, maxPlayer });
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
        const gameId = partyRef.add({
          host: pseudo,
          pions_positions1: [],
          pions_positions2: [],
          croixPosition1: [],
          croixPosition2: [],
          opponent: '',
          gameState: GameStates.PLACE_PIONS,
          terrainVisible: true
        }).then((val)=>{
          Alert.alert('Success', 'En attente de participant')
          setWait(false);
          navigation.push('playgroundonline', {
            pseudo: pseudo,
            gameId: val.id
          })
        }).catch((e)=>{
            Alert.alert('Erreur', e)
            setWait(true)
          }
        )
      }
    }) 
  }
  const handleSelectRoom = (hostName:string)=>{
    //navigation.push('playground',{pseudo:pseudo})
    setWait(true)
    const partyRef = firebase.firestore().collection('party')
    partyRef.where('oponent', '==', pseudo).get().then((snapshoot:any)=>{
      if(!snapshoot.empty){
        console.log(snapshoot.docs.length)
        if(snapshoot.docs[0].data().host == pseudo && snapshoot.docs[0].data().status==0){
          setWait(false)
          navigation.navigate('playgroundonline', {pseudo:pseudo})
        }else{
          setWait(false)
        }
      }else{
        navigation.navigate('playgroundonline', {pseudo:pseudo})
        setWait(false)
      }
    }) 
  }

  function gameListComponent(){
    return <>
         <Button
          title="Creer une partie"
          onPress={handleCreateAparty}
          color= {isdarktheme ? "green":'#007AFF'} // Couleur bleue assortie au blanc
        />
      {parties.map((party:any) => (
        <TouchableOpacity key={party.id} onPress={()=>{handleSelectRoom(party.host)}}
        disabled={party.oponent==undefined?false:true}
        >
          <View style={styles.row}>
            <View>
              <Text style={[styles.title, {color:isdarktheme?'white':'black'}]}>{party.host}</Text>
              <Text style={[styles.subtitle, {color:isdarktheme?'whitesmoke':'black'}]}>
                  {party.oponent==undefined?"En attente: 1/2":"En cours"}
              </Text>
            </View>
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>
      ))}
    </>
  }
  console.log(isdarktheme)

  return (
    <View style={[styles.container, {backgroundColor:isdarktheme?'black':'white'}]}>
      <View style={styles.content}>
      {wait?LoadingScreen():
        gameListComponent()
      }
      </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
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


