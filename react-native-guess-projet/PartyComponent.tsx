import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PartyComponent = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/360x640' }}
      style={styles.container}
    >
      <Text style={styles.headerText}>Join a Party</Text>
      <View style={styles.searchBar}>
        <View style={styles.circle} />
        <Text style={styles.searchText}>Search party</Text>
      </View>
      <View style={styles.content}>
        {Array.from({ length: 4 }).map((_, index) => (
          <React.Fragment key={index}>
            <View style={styles.row}>
              <View style={styles.icon} />
              <View>
                <Text style={styles.title}>Password</Text>
                <Text style={styles.subtitle}>Participants</Text>
              </View>
            </View>
            <View style={styles.divider} />
          </React.Fragment>
        ))}
      </View>
      <View style={styles.footerButton}>
        <View style={styles.innerCircle} />
      </View>
    </ImageBackground>
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
    borderRadius: 14,
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
      bottom: 44,
      right: 44,
      width: 32,
      height: 32,
      backgroundColor: '#9F1B82',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'white',
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