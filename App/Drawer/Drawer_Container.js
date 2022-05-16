import {Dimensions, View, StatusBar, TouchableOpacity, Image, Linking, Text, Constants} from 'react-native'; 
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'; 
import React from 'react'; 
const width = Dimensions.get('window').width 
export default function DrawerItems(props){ 
  return( 
    <View style={{flex: 1, backgroundColor: 'white'}}> 
    <StatusBar backgroundColor='white'/> 
    <View style={{width: 'auto', height: 110, justifyContent: 'center', backgroundColor: 'gray',}}> 
      <TouchableOpacity style={{width: 90, height: 90, borderRadius: 10, backgroundColor: 'white', }} onPress={()=>{
        Linking.openURL('https://drops-coronadrops.web.app') 
      }}> 
        <Image style={{width: 90, height: 90, }} source={{uri: 'https://drops-coronadrops.web.app/static/media/logo_drops.d2766fbd6fda51e18e27.png'}}/> 
      </TouchableOpacity> 
    </View> 
    <View style={{width: 'auto', backgroundColor: 'red', }}/> 
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: 'white', }}> 
      <DrawerItemList {...props} /> 
    </DrawerContentScrollView>  
    <View style={{flex: 1, }}> 
    <Text>Sobre o DROPS NO MUNDO DA LUA: </Text> 
    <Text style={{fontStyle: 'italic', marginTop:30, }}>"O DROPS.................."</Text> 
    </View> 

    <View style={{width: 'auto', alignItems: 'center'}}> 
    <Text style={{position: 'absolute', bottom: 0, textAlign: 'center'}}>Versão 1.0.0</Text> 
    </View> 
    </View> 
  )
} 
