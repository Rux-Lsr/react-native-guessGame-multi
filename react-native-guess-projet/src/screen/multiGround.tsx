import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { setCroixPosition, setPionPosition } from '../firebase/firebaseServices';

const {width, height} = Dimensions.get("window")
const desiredHeight: Float = height * 0.9;
const desiredWidth: Float = width * 1;
const heightFootmenu: Float = height - desiredHeight
const WidthFootmenu: Float = width * 1
const TERRAIN_DE_JEUX1 = 1
const TERRAIN_DE_JEUX2 = 2
enum GameStates{
  PLACE_PIONS,
  POSITIONNE_CROIX,
  ATTEND_JOUEUR_ADVERSE,
  TOUR_JOUEUR2_TERMINE,
  TOUR_JOUEUR1_TERMINE,
  ANIMATION,
  JEU_TERMINE,
  DEBUT_DU_JEU
}
let state = GameStates.PLACE_PIONS

interface PionPosition {
  x: number;
  y: number;
}

// Utiliser pour restreindre  la position d'un element 
const restreindre = (pos: Float, maxPos: Float, minPos: Float) => {
  
    if(pos > maxPos - 25)
    {
      return maxPos - 25;
    }
    if(pos < minPos )
    {
      return minPos 
    }
  
    return pos;
  }

  function genererNombreEntier(min: number, max: number): number {
    const randomFloat = Math.random(); 
    const difference = max - min;
    const randomInteger = Math.floor(randomFloat * difference) + min; 
  
    return randomInteger;
  }
  
  function getPositionAleatoire(
    minPositionX: Float, 
    maxPositionX: Float, 
    maxPositionY: Float,
    minPositionY: Float): PionPosition
  {
    let position: PionPosition = {
      x: genererNombreEntier(minPositionX, maxPositionX),
      y: genererNombreEntier(minPositionY, maxPositionY),
    }
  
    return position
  
  }

  function Multi(navigation, route): React.JSX.Element {
    const {pseudo} = route.params
    const hostName = ''

    const [position, setPosition] = useState({x: 0,y: 0});
    /* ::::::::::::::::::::::::: Mettre tout ceci en BD ::::::::::::::::::::::::::::::: */
    const [pionPositions, setPionPositions] = useState<PionPosition[]>([]);
    const [pionPositions2, setPionPositions2] = useState<PionPosition[]>([]);
    const [croixPositions1, setCroixPositions1] = useState<PionPosition[]>([]);
    const [croixPositions2, setCroixPositions2] = useState<PionPosition[]>([]);
    /* ::::::::::::::::::::::::: Mettre tout ceci en BD ::::::::::::::::::::::::::::::: */
    const [terrainVisible, setTerrainVisible] = useState<Boolean>(true)
    const [currentGameState, setCurrentGameState] = useState(GameStates.PLACE_PIONS) 
    const nombreMaxPion = 5;
    const [gameFinish, setGameFinish] = useState(false)
  
  
    // Utiliser pour positionner les pions
    const handlePress = (event: any) => {
      const { locationX, locationY } = event.nativeEvent;
      // Ajoutez la position du pion à l'état
  
      if(currentGameState === GameStates.PLACE_PIONS)
      {
        
        if(pionPositions.length == nombreMaxPion)
        {
          return
        }
        else
        {
          setPionPositions([...pionPositions, 
            { x: restreindre(locationX, desiredWidth, 0), y: restreindre(locationY, desiredHeight, 0) }])
            ;
          
            setPionPosition([...pionPositions, 
              { x: restreindre(locationX, desiredWidth, 0), y: restreindre(locationY, desiredHeight, 0) }],
              pseudo, hostName
            )
        }
      }
      
    }
    const handlePressPosCroix = (event: any) =>
    {
      // recuperation des coodonnees ecrans
      const { locationX, locationY } = event.nativeEvent;
  
      if(currentGameState == GameStates.POSITIONNE_CROIX)
      {
        
        if( croixPositions2.length >= 1)
        {
  
        }
        setCroixPositions2 ([...croixPositions2, 
          { x: restreindre(locationX, desiredWidth, 0), y: restreindre(locationY, desiredHeight, 0) }]);
          setCroixPosition([...croixPositions2, 
            { x: restreindre(locationX, desiredWidth, 0), y: restreindre(locationY, desiredHeight, 0) }], pseudo, hostName)
        // changement de l'etat du jeu
        setCurrentGameState(GameStates.TOUR_JOUEUR1_TERMINE)
      }
    }
    // Utiliser pour gerer l'affichage des terrains
    const handleChangeTerrain = () =>
    {
      setTerrainVisible(!terrainVisible)
    }
    
    // Utiliser pour ajouter les pions de maniere aleatoire sur le terrain 2
    const handlerAutoAjoutPion = () => {
      if (pionPositions2.length === nombreMaxPion) {
        return; // Si l'array est déjà plein, sortir de la fonction
      }
      
      const newPionPositions = []; // Créer un nouvel array pour stocker les nouvelles positions
      
      for (let i = 0; i < nombreMaxPion; i++) {
        const pos = getPositionAleatoire(0, desiredWidth, 0, desiredHeight);
        newPionPositions.push({ x: restreindre(pos.x, desiredWidth, 0), y: restreindre(pos.y, desiredHeight, 0) }); // Ajouter la nouvelle position à l'array temporaire
      }
    
      setPionPositions2([...pionPositions2, ...newPionPositions]); // Ajouter toutes les nouvelles positions à l'array existant
    };
  
    // Utiliser pour effacer les pions sur un terrain
    const handleresetTerrain = (terrainDejeux: number) => {
      
      if(terrainDejeux === TERRAIN_DE_JEUX1)
      {
        setPionPositions([])
      }
      else if(terrainDejeux === TERRAIN_DE_JEUX2)
      {
        setPionPositions2([])
      }
    }
    
    // Utiliser pour dire si 2 elements se touchent 
    function pionsSeTouchent(
      pion1: PionPosition, 
      pion2: PionPosition, 
      rayon1: number, rayon2: number): boolean {
        
        const distanceEntrePions = Math.sqrt((pion2.x - pion1.x) ** 2 + (pion2.y - pion1.y) ** 2);
        const sommeRayons = rayon1 + rayon2;
        
        return distanceEntrePions <= sommeRayons;
    }
      
    // utiliser pour savoir si un joueur a toucher des pions
    function hitPions()
    {
      for(let i = 0; i < pionPositions2.length; i++)
      {
        let touche = pionsSeTouchent(croixPositions2[croixPositions2.length-1], pionPositions2[i], 25, 25) 
        if(touche)
        {
          ToastAndroid.show("Touche", ToastAndroid.SHORT);    
          return
        }
      }
    }
  
    // Utiliser pour simuler l'action du 2en joueur(CPU)
    function cpuPlay()
    {
      ToastAndroid.show("CPU", ToastAndroid.SHORT)
  
      if(true)
      {
        if( croixPositions1.length >= 1)
        {
          
        }
  
        // generation d'une position aleatoire
        const pos = getPositionAleatoire(0, desiredWidth, 0, desiredHeight);
        // ajout de la position
        setCroixPositions1 ([...croixPositions1, 
        { x: restreindre(pos.x, desiredWidth, 0), y: restreindre(pos.y, desiredHeight, 0) }]);
        setCurrentGameState(GameStates.TOUR_JOUEUR2_TERMINE)
      }
      
        
    }
  
    function actionsCpu()
    {
      // le CPU poositionne sa croix
      cpuPlay()
      
    }
  
    
    // Utiliser pour l'ancer le jeu
    const handleStartGame = () =>
    {
      if(pionPositions.length == nombreMaxPion)
      {
        // Ajout des pions automatiquement sur le terrain2 par cpu
        handlerAutoAjoutPion()
        // state = GameStates.POSITIONNE_CROIX
        setCurrentGameState(GameStates.POSITIONNE_CROIX)
  
        // changement du terrain de jeu
        handleChangeTerrain()
  
        Alert.alert('Partie commencée', 'La partie a commencé, positionnez votre croix où vous pensez que les pions adverses peuvent se trouver.', [{ text: 'OK' }]);
  
      }
  
      
      
    }
    const handleJouer = () =>
    {
      setCurrentGameState(GameStates.POSITIONNE_CROIX)
  
      handleChangeTerrain()
    }
  
    const handleCedeTour = () => {
  
      if(croixPositions2.length > 0)
      {
        // On change le terrain et l'etat du jeu
        setCurrentGameState (GameStates.ATTEND_JOUEUR_ADVERSE)
        handleChangeTerrain()
  
        // On planifie le temps que le CPU vas faire avant de jouer
        setTimeout(() => {
  
          actionsCpu()
          ToastAndroid.show("apres 3 segonde", ToastAndroid.SHORT)
          //
          setTimeout(() => 
          {
            setCurrentGameState(GameStates.TOUR_JOUEUR2_TERMINE)
          }, 500)
  
        }, 3000)
  
      }
      else
      {
        ToastAndroid.show("Vous n'avez pas encore jouer!!!", ToastAndroid.SHORT)
      }
      
    }
  
    
  
    function setState(etat:number)
    {
      state = etat
    }
  
    const MenuStatePlacePions = () =>
    { 
      return (
        <View style={styles.container2FootMenu}>
          <TouchableOpacity style={styles.button} onPress={() => {handleresetTerrain(TERRAIN_DE_JEUX1)}}>
            <Text style={styles.buttonText}>Reset pion</Text>
          </TouchableOpacity>
  
          <View style={{width: 100}} />
  
          <TouchableOpacity style={styles.button} onPress={handleStartGame}>
            <Text style={styles.buttonText}>Continuer</Text>
          </TouchableOpacity>
        </View>
      )
    }
    
    // Mes composants locaux
    const MenuStateTourJoueur1termine = () =>
    {
      GameStates.TOUR_JOUEUR1_TERMINE
      return (
        <View style={styles.container2FootMenu}>
          <TouchableOpacity style={styles.button} onPress={handleCedeTour}>
            <Text style={styles.buttonText}>Céder le tour</Text>
          </TouchableOpacity>
        </View>
      )
      
    }
  
    const MenuStateAttenteCpu = () =>
    {
      return(
        <View style={styles.container2FootMenu}>
          <TouchableOpacity style={styles.button} onPress={handleJouer}>
            <Text style={styles.buttonText}>Jouer</Text>
          </TouchableOpacity>
        </View>
      )
    }
  
  
    
    
  
    // Declaration des UseEffects
    useEffect( () => {
      hitPions()
    }
      , [croixPositions2])
    
    useEffect(() => {
      
      // Affiche la boîte de dialogue au démarrage du jeu quand le jeu est lance
      Alert.alert("Bienvenue", "Prêt à jouer ? place tes pions sur le terrain");
  
    }, []);
  
  
  
    
    return (
      <View style={styles.container}>
        
        {/* terrain de jeu1  */}
        {terrainVisible && <View>
          <TouchableOpacity
          style={{backgroundColor: "#011111", height: desiredHeight, width: desiredWidth}}
          onPress={handlePress}>
          </TouchableOpacity>
  
          <View style={{height: desiredHeight, width: desiredWidth, position:"absolute", pointerEvents: "none"}}>
            {pionPositions.map((pion, index) => (
  
              <View
              key={index}
              style={[styles.element, { left: pion.x, top: pion.y }]}/>
  
            ))}
  
            {croixPositions1.map((pion, index) => (    
              <View
              key={index}
              style={[styles.element3, { left: pion.x, top: pion.y }]}/>
            ))}
          </View>
  
        </View>}
  
        {/* terrain de jeu 2 */}
        {!terrainVisible && <View>
          <TouchableOpacity
          style={{backgroundColor: "#01110", height: desiredHeight, width: desiredWidth}}
          onPress={handlePressPosCroix}>        
          </TouchableOpacity>
  
          <View style={{height: desiredHeight, width: desiredWidth, position:"absolute", pointerEvents: "none" }}>
            {pionPositions2.map((pion, index) => (
            
              <View
              key={index}
              style={[styles.element2, { left: pion.x, top: pion.y }]}/>
  
            ))}
  
            {croixPositions2.map((pion, index) => (
            
              <View
              key={index}
              style={[styles.element3, { left: pion.x, top: pion.y }]}/>
  
            ))}
            
          </View>
  
        </View>}
  
        <View style={{height: heightFootmenu, width: WidthFootmenu, backgroundColor: "white"}}> 
          { currentGameState == GameStates.PLACE_PIONS && <MenuStatePlacePions/>}
          { currentGameState == GameStates.TOUR_JOUEUR1_TERMINE && <MenuStateTourJoueur1termine/>}
          { currentGameState == GameStates.TOUR_JOUEUR2_TERMINE  && <MenuStateAttenteCpu/>}
        </View>    
  
      </View>
  
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    element: {
      width: 25,
      height: 25,
      backgroundColor: 'blue',
      position: 'absolute',
    },
    element2: {
      width: 25,
      height: 25,
      backgroundColor: 'red',
      position: 'absolute',
    },
    element3: {
      width: 25,
      height: 25,
      backgroundColor: 'orange',
      position: 'absolute',
    },
    button: {
      backgroundColor: "#007AFF",
      padding: 10,
      marginVertical: 10,
      borderRadius: 8,
      width: 130,
      height: 50,
      justifyContent:"center",
      alignItems: "center",
  
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    container2FootMenu: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  
  });

  export default Multi;