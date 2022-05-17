import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView} from 'react-native'; 
import React, {useRef} from 'react'; 
export default function App() { 

  const scrollx = useRef() 
  const touchprox = () =>{
    scrollx.current?.scrollTo({
      x: 0.9*width, 
      animated: true,   
    })
  }

  const touchback= () =>{ 
    scrollx.current?.scrollTo({
      x: 0, 
      animated: true,   
    })
  }

  const update = [
    {image: '', frase: 'A nova atualização do DROPS no Mundo da Lua trás novos recursos 3D' , }, 
    {image: '', frase: '', }, 
    {image: '', frase: '', }, 
  ] 
  
  return ( 
    <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.texto1}>Novidades da Atualização</Text> 
          <ScrollView horizontal={true} style={{width: 0.9*width}} scrollEnabled={false} ref={scrollx}> 
          <View style={styles.scroll} horizontal={true} > 
            <Image style={styles.img} source={{uri: ''}}></Image>
          </View>
          <View style={styles.scroll} horizontal={true} > 
            <Image style={styles.img} source={{uri: 'https://s2.glbimg.com/eQGZA6fAV14LhKmFxQX4LIelNmQ=/0x0:1600x1018/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/x/x/8OLmCLSzKxakvyBtY2NQ/desabafo-capa-edit.jpg'}}></Image>
          </View> 
          </ScrollView> 
          <View style={styles.botoes}> 
            <TouchableOpacity style={[styles.opacity, {backgroundColor: 'gray'}]} onPress={()=>{touchback()}}> 
              <Text style={styles.textobotao}>Voltar</Text> 
            </TouchableOpacity> 
            <TouchableOpacity style={[styles.opacity, {backgroundColor: 'green'}]} onPress={()=>{touchprox()}}> 
              <Text style={styles.textobotao}>Próximo</Text>  
            </TouchableOpacity> 
          </View>
        </View>
    </View>
  );
}
const {width , height} = Dimensions.get('window') 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple', 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  main: {
    width: 0.9*width, 
    height: 0.96*height, 
    borderRadius: 10, 
    backgroundColor: 'white', 
    alignItems: 'center', 
  }, 
  texto1: {
    marginTop: 10, 
    fontSize: 26, 
    color: 'black', 
    fontWeight: 'bold', 
  }, 
  scroll: {
    width: 0.8*width, 
    height: 0.7*height, 
    marginLeft: 0.05*width,
    marginRight: 0.05*width, 
    marginTop: 0.05*height, 
    backgroundColor: 'red', 
    borderRadius: 10, 
  }, 
  img: {
    width: 0.8*width, 
    height: 0.7*height, 
    backgroundColor: 'blue', 
    borderRadius: 10, 
  }, 
  botoes: {
    width: 0.8*width, 
    height: 0.1*height, 
    marginLeft: 0.05*width, 
    position: 'absolute', 
    bottom: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 

  }, 
  opacity: {
    width: 0.3*width, 
    height: 50, 
    borderRadius: 10, 
    backgroundColor: 'gray', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 

  textobotao: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20, 
  }, 
});
