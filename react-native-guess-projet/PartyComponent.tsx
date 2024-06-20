import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { handleAuth } from './Startup';

const {width, height} = Dimensions.get('window');
const PartyComponent = ({navigation}) => {
  //handleAuth(navigation);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    // Créez un écouteur en temps réel pour la collection "party"
    const unsubscribe = firestore()
      .collection('party')
      .onSnapshot(querySnapshot => {
        const partyData = [];
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
  
  return (
    <View>
    <Text style={styles.headerText}>Join a Party</Text>
    {/* Votre barre de recherche ici */}
    <View style={styles.content}>
      {parties.map(party => (
        <TouchableOpacity key={party.id}>
          <View style={styles.row}>
            {/* Icône de la fête */}
            <View>
              <Text style={styles.title}>{party.name}</Text>
              <Text style={styles.subtitle}>
                {party.currentPlayers} / {party.maxPlayer} joueurs
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
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F1F4',
    borderRadius: 30,
    margin: 17,
    padding: 14,
  },
  circle: {
    width: 28,
    height: 28,
    backgroundColor: '#9F1B82',
    marginRight: 10,
  },
  searchText: {
    color: '#A2A2A2',
  },
  headerText: {
    color: '#D08A24',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 6,
  },
  content: {
    position: 'absolute',
    top: 147,
    left: 17,
    right: 17,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#D9D9D9',
    marginRight: 18,
  },
  title: {
    color: '#27292E',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 21.60,
  },
    footerButton: {
      position: 'absolute',
      bottom: -height*0.75,
      right: 44,
      width: 32,
      height: 32,
      backgroundColor: '#9F1B82',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      fontSize:20,
      color: 'white',
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


