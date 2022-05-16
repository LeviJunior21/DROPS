import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'; 
import Ionicons from '@expo/vector-icons/Ionicons'; 
import astronauta from '../imagem/astronauta.webp'; 
import  levi from '../imagem/levi10.png'; 
import whatsapp from '../imagem/WhatsAppsvg.webp'; 
import vialactea from '../imagem/vialactea.jpg'; 
import {useNavigation} from '@react-navigation/native'; 

export default function App({navigation}) { 
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}> 
          <Ionicons name='menu' size={30} color={'white'}/>  
        </TouchableOpacity> 
        <Ionicons name='notifications' size={30} color={'white'}/> 
      </View>
      <View style={styles.scroll}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Homes')}}> 
        <View style={styles.scrollx}> 
          <Image style={styles.imgs} source={astronauta}/> 
          <Text style={styles.bemvindo}>Seja bem vindo ao</Text> 
          <Text style={styles.bemvindo}>DROPS NO MUNDO DA LUA! </Text> 
        </View> 
        </TouchableOpacity>
       </View> 
      <Text style={styles.conheca}>Conheça nossas Redes Sociais e Contato</Text> 
        <View style={styles.redes}>
        <TouchableOpacity style={styles.logo} onPress={()=>{navigation.navigate('Games')}}> 
          <Ionicons name='game-controller' color='white' size={30}/> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.logo}> 
          <Ionicons name='logo-instagram' color='white' size={30}/> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.logo}> 
          <Ionicons name='logo-youtube' color='white' size={30}/> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.logo}> 
          <Ionicons name='mail-open' color='white' size={30}/> 
        </TouchableOpacity> 
      </View> 
    <View style={styles.body}>
      <Image style={styles.levi} source={levi}/> 
      <View style={styles.apresentacao}> 
        <Text style={styles.conheca2}>O Drops agora está utilizando TypeScript JSX trazendo melhores e fluidas tecnologias para fazer você entrar no MUNDO DA LUA.</Text>  
      </View> 
    </View> 
    <Image source={whatsapp} style={styles.whatsapp} /> 
    <Image source={vialactea } sty={ styles.via } /> 
    </View> 
  ); 
} 

const largura = Dimensions.get('window').width 
const altura = Dimensions.get('window').height 

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    backgroundColor: 'black', 
    overflow: 'hidden', 
    borderWidth:0, 
  }, 
  top:{
    backgroundColor: '#303030', 
    height: 50, 
    width: largura, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 

  }, 
  scroll:{
    width: largura, 
    flexWrap: 'wrap', 
    height: 200, 
    overflow: 'hidden', 
    flexDirection: 'row', 

  }, 
  scrollx: {
    width: largura, 
    height: 200, 
    backgroundColor: 'gray', 
    justifyContent: 'center', 
    alignItems: 'center', 

  }, 
  imgs: {
    width: largura, 
    height: 200, 
    resizeMode: 'cover', 
    zIndex:1, 
    position: 'absolute', 
    opacity: 0.6,   

  }, 

  bemvindo: {
    zIndex: 2, 
    color: 'white',  
    fontSize: 20, 
    fontWeight: '500', 
    opacity: 1, 

  }, 
  redes:{
    width: largura, 
    height: 70, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    backgroundColor: 'black', 
    borderBottomWidth: 2, 
    borderBottomColor: 'white', 
  }, 
  logo: {
    width: 50,  
    height: 50, 
    borderRadius: 4,  
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'purple', 
  }, 
  conheca:{
    width: largura, 
    backgroundColor: 'black', 
    flexDirection: 'row', 
    color: 'white', 
    fontWeight: '500', 
  }, 
  levi:{
    height: 180, 
    width: 100,  
  }, 
  body:{
    width: largura, 
    marginTop: 30, 
    height: 200, 
    flexDirection: 'row', 
    backgroundColor: 'black',  
  }, 
  apresentacao: { 
    width: largura-200, 
    height: 200, 
    marginLeft: 10, 
  }, 
  
  conheca2:{ 
    width: largura-200,   
    backgroundColor: 'black', 
    flexDirection: 'row', 
    color: 'white', 
    fontWeight: '500', 
  }, 
  whatsapp: {
    width: 80, 
    height: 80, 
    resizeMode: 'cover', 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    zIndex: 3, 
  }, 
  via: {
    width: largura, 
    height: 'auto', 
  }
}); 
 
