import React, {useState} from 'react'; 
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native'; 
import { Feather } from '@expo/vector-icons';
const earth = require('../imagem/earth.png'); 
const mars = require('../imagem/mars.png');
const mercury = require('../imagem/mercury.png');
const moon = require('../imagem/moon.png');
const neptune = require('../imagem/neptune.png');
import { LinearGradient } from 'expo-linear-gradient'; 
import * as Speech from 'expo-speech'; 

const PlanetCardDetails = ({ planet }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Earth':
        return earth;
      case 'Neptune':
        return neptune;
      case 'Moon':
        return moon;
      case 'Mars':
        return mars;
      case 'Mercury':
        return mercury;
    } 
  }; 
  function leitura(){ 
  const leitura = planet.name+". É um planeta que se encontra na "+planet.location+"."+planet.description  
  const options = {
    rate: 2, 
    pause: true, 
  } 
  Speech.speak(leitura, options) 
  
  }  
  const [ler, setLer] = useState(false) 
  return (
    <LinearGradient
      colors={[
        '#3E3963',
        '#3E3963',
        '#3E3963',
        '#3E3963',
      ]}
      style={styles.infoCardParent}>
      <View style={styles.infoCard}>
        <View style={styles.infoCardChild}>
          <Image
            source={getImage(planet.name)}
            style={{ width: 80, height: 80 }}
          />
          <TouchableOpacity style={[styles.sound, {backgroundColor: ler? 'green':'red'}]} onPress={()=>{leitura(); setLer(!ler)}}> 
            <Feather name='volume-2' color={'white'} size={30}></Feather> 
          </TouchableOpacity>
          <Text style={styles.title}>{planet.name}</Text>
          <Text style={styles.subTitle}>{planet.location}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.climateInfo}>
              <Image
                source={require('../imagem/ic_distance.png')} 
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.distance}</Text>
            </View>
            <View style={styles.climateInfo}>
              <Image
                source={require('../imagem/ic_gravity.png')} 
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.gravity}</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          height: 0.4*altura, 
          width: largura, 
          overflow: 'hidden',
          paddingHorizontal: 10, 
          bottom: 80,
        }}> 
        <Text style={styles.title}>VISÃO GERAL</Text>
        <View style={styles.blueStrike}></View>

        <ScrollView>
          <Text style={styles.subTitle}>{planet.description}</Text>
        </ScrollView>
      </View>
      <LinearGradient colors={['#3E3963','#3E3963','#3E3963','#3E3963',]} style={styles.bottomBtn}>
        <View>
          <Text style={{ fontSize: 10, color: 'white', fontWeight: '100' }}>
            FONTE
          </Text>
          <Text style={styles.title}>{'NASA'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.title}>{'VER MAIS'}</Text>
          <Feather name="arrow-right" size={20} color="white" />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default PlanetCardDetails;

const largura = Dimensions.get('window').width 
const altura = Dimensions.get('window').height 

const styles = StyleSheet.create({
  bottomBtn: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0, 
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },

  infoCardParent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 0.6*altura,    
    zIndex: 99,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  climateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  sound: {
    position: 'absolute', 
    top: 50, 
    right: 10, 
    zIndex: 10, 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  infoCard: {
    backgroundColor: '#434273',
    height: 130,
    position: 'absolute',
    top: -50,
    left: 20,
    right: 20,
    borderRadius: 10,
  },
  infoCardChild: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -40,
    alignItems: 'center',
  }, 
  title: { fontSize: 20, color: 'white', fontWeight: '600', 
},
  subTitle: {
    fontSize: 14, 
    color: 'white', 
    letterSpacing: 1.1,
  },
  blueStrike: {
    height: 2,
    backgroundColor: 'lightblue',
    width: 20,
  },
});

