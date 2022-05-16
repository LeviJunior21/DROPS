import React, {useState, useRef} from 'react';  
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions, 
  ScrollView, 
  TextInput, 
  Animated, 
  Easing, 
} from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { planets } from '../modal/planets';
import PlanetCard from '../components/PlanetCard';
import { LinearGradient } from 'expo-linear-gradient'; 

function HomeScreen({ navigation }){  
  
  const [search, setSearch] = useState(true)  
  const values = useRef(new Animated.Value(largura)).current; 
  const rotate = useRef(new Animated.Value(0)).current; 
  const [giro, setGiro] = useState(false) 
  function Animado(){ 
    Animated.timing(rotate, 
    { 
      toValue: 1, 
      useNativeDriver: true, 
      easing: Easing.linear, 
      duration: 1000, 
    }  
    ).start() 
}
  const spin = rotate.interpolate({
    inputRange: [0,1], 
    outputRange: ['0deg', giro?'90deg': '0deg'], 
  }) 
  
  function Aparecer(){
    Animated.timing(values, {
      toValue: 0, 
      duration: 300, 
      useNativeDriver: true, 
    }).start() 
  }
  function Desaparecer(){ 
    Animated.timing(values, { 
      toValue: largura, 
      duration: 300, 
      useNativeDriver: true, 
    }).start() 
  }

const [texto, setText] = useState("") 
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#3E3963','#3E3963','#3E3963','#3E3963',]} style={styles.header}>
        <TouchableOpacity style={{transform: [{rotate: spin}]}} onPress={()=>{navigation.openDrawer()}}>  
          <Feather name="menu" size={24} color="white" /> 
        </TouchableOpacity> 
        <Text style={styles.title}>DROPS</Text> 
        <TouchableOpacity style={{width: 30, height: 30, }} onPress={()=>{setSearch(!search); search? Aparecer(): Desaparecer(); }}> 
          <Feather name="search" size={24} color="white" /> 
        </TouchableOpacity> 
        <Animated.View style={[styles.pesquisa,{transform:[{translateX: values,}]}]}> 
          <TouchableOpacity onPress={()=>{ setSearch(!search); Desaparecer(); setText("")}}> 
            <Feather name='arrow-left' size={30} color={'white'}></Feather> 
          </TouchableOpacity>
          <TextInput onChangeText={(el)=>{setText(el)}} style={{width: 0.88*largura, height: 40, color: 'white', marginLeft: 10, }} placeholder={'Pesquisar'} placeholderTextColor={'white'}></TextInput>  
        </Animated.View> 
      </LinearGradient> 
      <ScrollView style={styles.planetList}>
        {planets.filter((val, key)=>{ 
          if (texto.toLowerCase() == ""){ 
            return val; 
          }
          else if (val.name.toLowerCase().includes(texto.toLowerCase())){ 
            return val; 
          } 
        }).map((item, key) => 
            <TouchableOpacity key={key} 
              onPress={() => navigation.navigate('Details', { planet: item })}>
              <PlanetCard planet={item} /> 
            </TouchableOpacity>
          )} 
      </ScrollView> 
    </View>
  );
} 

const largura = Dimensions.get('window').width 
export default HomeScreen;
const altura = Dimensions.get('window').height; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    flexDirection: 'column',
    backgroundColor: '#3E3963',
    overflow: 'hidden', 
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50, 
  },
  planetList: {
    height: altura-50, 
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  pesquisa: {
    width: largura, 
    height: 50, 
    backgroundColor: 'black', 
    position: 'absolute', 
    zIndex: 10, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
});
