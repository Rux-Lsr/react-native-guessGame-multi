import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/bt-nav.jpeg')}
        style={styles.headerImage}
      />
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={navigation.push('playground')}>
          <Text style={styles.menuText}>Jeux Solo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={navigation.push('login')}>
          <Text style={styles.menuText}>Jeux Multijoueur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={navigation.goBack()}>
          <Text style={styles.menuText}>Quitter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%',
    height: height/2,
    resizeMode: 'cover',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#007AFF', // Belle couleur pour les éléments du menu
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
