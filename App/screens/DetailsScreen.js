import React, {useState} from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,  
  Animated, 
  Share, 
} from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import PlanetDetailsCard from '../components/PlanetDetailsCard';
const DetailsScreen = ({ navigation, route }) => {
  const { planet } = route.params;
  const [share, setShare] = useState(true) 
  const value = React.useRef(new Animated.Value(200)).current; 

  /**async function compartilhar(){
    const result = await Share.share({ 
      message: 'Estou lendo sobre o planeta '+ planet.name + ' no Drops no Mundo da Lua, venha embarcar no mundo da lua conosco!\n\nRESUMO:\n\n'+planet.description+'\n\nDisponível em play.google.com/...'
    })
  }**/ 
  function Aparecer(){
    Animated.timing(value, {
      toValue: 0, 
      duration: 300, 
      useNativeDriver: true, 
    }).start() 
  }
  function Desaparecer(){ 
    Animated.timing(value, {
      toValue: 200, 
      duration: 300, 
      useNativeDriver: true, 
    }).start() 
  }
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>{
          setShare(!share) 
          share? Aparecer(): Desaparecer(); 
          
          }}> 
          <Feather name="share" size={24} color="white" />  
        </TouchableOpacity> 
        <TouchableOpacity style={[styles.opcoes, {transform: [{translateX: value}]}]}> 
          <Text>Compartilhar</Text> 
        </TouchableOpacity> 
      </View>
      <View style={styles.coverImageParent}>
        <Image
          source={{ uri: planet.picture }}
          style={{ width: largura+100, height: altura }} 
        />
      </View>
      <PlanetDetailsCard planet={planet} />
    </View>
  );
};

const largura = Dimensions.get('window').width 
const altura = Dimensions.get('window').height 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  navBar: {
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100,
  },

  coverImageParent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: altura , 
     zIndex: 99,
    overflow: 'hidden',
  },
  opcoes: {
    position: 'absolute', 
    top: 50, 
    right: 0, 
    backgroundColor: 'white', 
    width: 140, 
    height: 50, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 10, 
  }, 
});

export default DetailsScreen;
