import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/screens/HomeScreen';
import DetailsScreen from './App/screens/DetailsScreen';
import Home from './App/screens/Home'; 
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer'; 
import {View, Dimensions, StatusBar, Text, TouchableOpacity, Image, Linking} from 'react-native'; 
import Constants from 'expo-constants'; 
import Questionario  from './App/screens/Game'; 
import Pontuacao from './App/screens/pontos'; 
import perguntas from './App/Data/data'; 

function App(){ 
  const Drawer = createDrawerNavigator() 

  return (
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName='Inicio' screenOptions={{headerShown: false}} drawerContent={props=><DrawerItems{...props}/>}> 
        <Drawer.Screen name='Inicio' component={NavigationStack}></Drawer.Screen> 
        <Drawer.Screen name='Planetas' component={HomeScreen}></Drawer.Screen> 
        <Drawer.Screen name='Games' component={Home_Game}></Drawer.Screen> 
      </Drawer.Navigator> 
    </NavigationContainer>
  );
} 

const width = Dimensions.get('window').width 
function DrawerItems(props){ 
  return( 
    <View style={{flex: 1, backgroundColor: 'white'}}> 
      <StatusBar backgroundColor='white'/> 
      <View style={{width: 'auto', height: 110, justifyContent:'space-between', alignItems: 'center',backgroundColor: 'purple', flexDirection: 'row', }}> 
        <TouchableOpacity style={{width: 90, height: 90, borderRadius: 10, backgroundColor: 'white', }} onPress={()=>{
        Linking.openURL('HTTPS://drops-coronadrops.web.app') 
        }}> 
          <Image style={{width: 90, height: 90, }} 
          source={{uri: 'https://drops-coronadrops.web.app/static/media/logo_drops.d2766fbd6fda51e18e27.png'}}/> 
        </TouchableOpacity> 
        <View style = {{width: 200, height: 100, marginLeft: 10, }}> 
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}} numberOfLines={1}>DROPS</Text> 
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14}} numberOfLines={1}>NO MUNDO DA LUA</Text> 
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14, marginTop: 10, }} numberOfLines={1}>Física ... </Text> 
        </View>      
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

function NavigationStack(){ 
  const Stack = createNativeStackNavigator(); 

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName={'Home'}> 
      <Stack.Screen name={'Home'} component={Home} /> 
      <Stack.Screen name={'Homes'} component={HomeScreen} />
      <Stack.Screen name={'Details'} component={DetailsScreen} /> 
      <Stack.Screen name={'Games'} component={Home_Game}/> 
      <Stack.Screen name={'Pontos'} component={Pontuacao}/> 
      <Stack.Screen name = {'Rota1'} component={Questionario}></Stack.Screen> 
      <Stack.Screen name = {'Rota2'} component={Questionario}></Stack.Screen> 
      <Stack.Screen name = {'Rota3'} component={Questionario}></Stack.Screen> 
    </Stack.Navigator>
  )
}

const Home_Game = ({navigation}) => { 
  const pontos = []
  return(
    <View style={{flex:1, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center', }}> 
      <TouchableOpacity style={{width: 300, height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}
      onPress={()=>{navigation.navigate('Rota1', {perguntas: perguntas, id: 0, pontos: pontos})}}> 
        <Text style={{fontWeight: 'bold'}}> TOQUE PARA INICIAR O QUESTIONÁRIO</Text> 
      </TouchableOpacity> 
    </View>
  )
}

export default App; 