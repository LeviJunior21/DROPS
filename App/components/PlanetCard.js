import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native'; 

import { Feather } from '@expo/vector-icons';
const earth = require('../imagem/earth.png'); 
const mars = require('../imagem/mars.png');
const mercury = require('../imagem/mercury.png'); 
const moon = require('../imagem/moon.png');
const neptune = require('../imagem/neptune.png'); 
const venus = require('../imagem/venus.png'); 
const jupiter = require('../imagem/Jupiter.png'); 
const PlanetCard = ({ planet }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Terra':
        return earth;
      case 'Netuno':
        return neptune;
      case 'Lua':
        return moon;
      case 'Marte':
        return mars;
      case 'Mercúrio':
        return mercury; 
      case 'Vênus': 
      return venus; 
      case 'Júpiter': 
      return jupiter; 
    }
  };
  return (
    <View style={styles.card}>
      <View style={styles.infoCard}>
        <View style={styles.titleCard}>
          <View style={{}}>
            <Text style={styles.title}>{planet.name}</Text>
            <Text style={styles.subTitle}>{'Galáxia Via Láctea'}</Text> 
            <View style={styles.blueStrike}></View>
          </View>
          <Feather
            name="more-vertical"
            size={24} 
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 40,
          }}>
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
      <View style={styles.image}>
        <Image
          source={getImage(planet.name)}
          style={{ width: 80, height: 80}} 
        />
      </View>
    </View>
  );
};


const largura = Dimensions.get('window').width 
const altura = Dimensions.get('window').height 

export default PlanetCard;

const styles = StyleSheet.create({
  blueStrike: {
    height: 2,
    backgroundColor: 'lightblue',
    width: 20,
  },
  card: {
    height: 100,
    width: largura, 
    marginTop: 25,
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  climateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  infoCard: {
    height: 100,
    width: 0.8*largura, 
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#434273', 
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent', 
    position: 'absolute',
    borderRadius: 40,
    top: 10,
    left: 10,
    overflow: 'hidden',
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  titleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 11,
    letterSpacing: 1.1,
  },
});
