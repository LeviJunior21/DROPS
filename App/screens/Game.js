import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, StatusBar, ScrollView, Image, FlatList} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons'; 
import Icons from 'react-native-vector-icons/FontAwesome5'; 
import Constants from 'expo-constants';

export default App; 

function App({route, navigation}) { 
  const {perguntas, id, pontos} = route.params 
  const rota = id 
  const main = perguntas[id] 
  const enunciado = main.enunciado 
  const rotas = main.prox  
  const resposta = main.resposta  
  const [moedas, setMoedas] = useState(main.moedas) 
  const imagem = main.imagem  
  const resp = main.resp 
  const [toque, setToque] = useState('a')    
  const coins_storage = moedas 
  const initialValue = 0; 
  const acumulo = pontos.reduce( 
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor = {'white'}></StatusBar> 
      <View style={styles.top}>
        <TouchableOpacity style={[styles.button_top, {justifyContent: 'flex-start'}]} > 
          <Icon name='arrow-back' size={30} color={'white'}></Icon> 
        </TouchableOpacity>
        <Text style={styles.drops}>DROPS</Text>
        <TouchableOpacity style={[styles.button_top,{justifyContent: 'flex-end'}]}>  
          <Text style={styles.moedas}>{acumulo}</Text> 
          <Icons name='coins' size={20} color={'white'}></Icons> 
        </TouchableOpacity>
      </View> 
      <ScrollView style={body.body}>
        <View style = {body.top_question}>
          <Text style={body.question}>{enunciado}</Text> 
        </View>
        <View style={body.body_img}> 
          <Image style={body.image} source={{uri: imagem}}></Image> 
        </View>
        <View style={body.respostas}> 
          <View style={body.resp}> 
            <Text style={body.resposta_text}>Resposta valendo {moedas} moedas: </Text> 
          </View>
          <View style = {body.escolha}> 
          <FlatList
          data = {resposta} 
          renderItem={(itens)=>( 
            <TouchableOpacity style={[body.escolher, {backgroundColor: (toque==itens.item.id)?'green': 'white'}]} onPress={()=>{setToque(itens.item.id)}}> 
              <Text style={body.choice}>{itens.item.alternativa}</Text> 
            </TouchableOpacity> 
          )}/> 
          </View> 
          <View style={body.touch_next}> 
            <TouchableOpacity onPress={()=>{ 
              setTimeout(()=>{
                pontos.push(moedas) 
              }, 1000)
            
              setTimeout(()=>{ 
              navigation.navigate(rotas, {perguntas: perguntas, id: id+1, pontos: pontos}); 
             }, 1000) }}> 
              <Text style={body.next}>PRÓXIMO</Text> 
            </TouchableOpacity> 
          </View> 
        </View>
      </ScrollView> 
    </View>
  );
}

const {width, height} = Dimensions.get('window') 
const styles = StyleSheet.create({
  container: {
    width: width, 
    height: height, 
    overflow: 'hidden', 
    backgroundColor: '#ecf0f1',
  }, 
  top: {
    width: width, 
    height: 50, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: 'black', 

  }, 

  drops: {
    fontSize: 18, 
    color: 'white', 
    fontWeight: 'bold', 

  }, 
  moedas: {
    fontSize: 14, 
    color: 'white', 
    fontWeight: 'bold', 
    marginRight: 10, 
  }, 
  button_top:{
    flexDirection: 'row',
     width: 70, 
  }, 
});

const body = StyleSheet.create({
  body: {
    width: width, 
    backgroundColor: 'purple', 
    height: height-50, 
  }, 
  top_question:{
    width: width,  
    minHeight: 50, 
    backgroundColor: 'white', 
    borderBottomColor: 'black', 
    borderBottomWidth: 2, 
    padding: 10, 
    justifyContent: 'center', 
  }, 

  question: {
    fontSize: 18, 
    fontWeight: '500', 
    color: 'black', 
    flexWrap: 'wrap',  
  }, 
  body_img:{
    width: width, 
    minHeight: 140, 
    paddingHorizontal: 0.05*width, 
    marginTop: 10, 
  }, 
  image: {
    width: 0.9*width, 
    minHeight: 140, 
    borderRadius: 10, 
    overflow: 'hidden', 
    resizeMode: 'cover', 
    backgroundColor: 'gray', 
  }, 
  respostas: {
    width: width, 
    marginTop: 10, 
    minHeight: height-260, 
    backgroundColor: 'transparent', 
  }, 
  resp: {
    width: width, 
    height: 40, 
    justifyContent: 'center', 
    backgroundColor: 'white', 
    paddingHorizontal: 0.05*width, 
  }, 
  resposta_text: {
    fontWeight: 'bold', 
    color: 'black', 
    fontSize: 18, 
  }, 
  escolha: {
    paddingHorizontal: 20, 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginTop: 10, 
  }, 
  escolher: {
    width: 0.9*width, 
    minHeight: 30, 
    borderRadius: 4, 
    paddingVertical: 10, 
    backgroundColor: 'white', 
    marginTop: 10, 
  }, 
  touch_next: { 
    marginTop: 30, 
    width: width, 
    height: 30, 
    alignItems: 'center', 
  }, 
  next: {
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: 20, 
    backgroundColor: 'green', 
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    height: 50, 
    borderRadius: 10, 
  }, 
  choice: {
    fontWeight: 'bold', 
    color: 'black', 
    fontSize: 18, 
    paddingHorizontal: 10, 
  }
})
