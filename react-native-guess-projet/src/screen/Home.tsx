import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // État pour gérer le thème

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme); // Inverse le thème actuel
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? 'black' : 'white' }]}>
      <Text style={{
        position:'absolute',
        top:height/3,
        right:width*0.30,
        fontSize:30,
        color:isDarkTheme ? 'white' : 'Black'
      }}>Tide of war</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkTheme ? 'green' : '#007AFF' }]} onPress={() => navigation.push('playground', {isdarktheme:isDarkTheme})}>
          <Text style={styles.menuText}>Jeux Solo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkTheme ? 'green' : '#007AFF' }]} onPress={() => navigation.push('login', {isdarktheme:isDarkTheme})}>
          <Text style={styles.menuText}>Jeux Multijoueur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkTheme ? 'green' : '#007AFF' }]} onPress={handleThemeChange}>
          <Text style={styles.menuText}>Changer le thème</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
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
