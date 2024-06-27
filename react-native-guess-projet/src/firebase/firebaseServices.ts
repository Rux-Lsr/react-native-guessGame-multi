import { firebase } from "@react-native-firebase/firestore";
import { useEffect } from "react";

interface PionPosition {
    x: number;
    y: number;
  } 
  const firestore = firebase.firestore()
  export const setPionPosition = async (positions:PionPosition[], pseudo:string, hostName:string) => {
    try {
      await firestore
        .collection('games')
        .doc(hostName)
        .collection('players')
        .doc(pseudo)
        .set({ pionPositions: positions }, { merge: true });
    } catch (error) {
      console.error('Error setting pion positions: ', error);
    }
  };
  
  // Fonction pour définir les positions des croix
  export const setCroixPosition = async (positions:PionPosition[], pseudo:string, hostName:string) => {
    try {
      await firestore
        .collection('games')
        .doc(hostName)
        .collection('players')
        .doc(pseudo)
        .set({ croixPositions: positions }, { merge: true });
    } catch (error) {
      console.error('Error setting croix positions: ', error);
    }
  };
  
  // Fonction pour obtenir les positions des pions
  export const getPionPositions = (hostName:string, callback) => {
    return firestore
      .collection('games')
      .doc(hostName)
      .collection('players')
      .onSnapshot(snapshot => {
        const positions: any[] = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.pionPositions) {
            positions.push(...data.pionPositions);
          }
        });
        callback(positions);
      });
  };
  
  // Fonction pour obtenir les positions des croix
  export const getCroixPositions = (hostName:string, callback) => {
    return firestore
      .collection('games')
      .doc(hostName)
      .collection('players')
      .onSnapshot(snapshot => {
        const positions: any[] = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.croixPositions) {
            positions.push(...data.croixPositions);
          }
        });
        callback(positions);
      });
  };