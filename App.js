import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View ,TextInput, Keyboard ,FlatList } from 'react-native';
import {  Appbar } from 'react-native-paper';
import Task from './componnents/Task';
export default function App() {
const[task , settask] = useState();
const[taskitems , settaskitems] = useState([]);
const Addtask =( ) =>{
 
settaskitems([...taskitems , task])
settask(null);


}

  return (
    <View style={styles.container}>
      <Appbar.Header>
      <Appbar.Content title="App Title"/>
    </Appbar.Header>
<View style={styles.item}>
  {
    taskitems.map((item , index) => {
     
       
    
    
    } 
    )
  }
 {/*<Task text={'Task 1'}/>
 <Task text={'Task 1'}/>
 <Task text={'Task 1'}/>
 */}
</View>
<View style={styles.input} >

    <TextInput style={styles.inputfiled}  placeholder="Write a Task" value={task} onChangeText ={ text => settask(text)}  />
   <View style={styles.plus} > 
   
   <Text style={styles.text} onPress={() => Addtask()} > + </Text>


   </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  } ,
 input:{
   flexDirection:'row',
   position:'absolute',
   justifyContent:'space-between',
   
   bottom:60,
   width:'100%'
 },
 inputfiled:{
   marginLeft:10,
   backgroundColor:'#FFF',
   borderRadius:10,
   width:250,
   height:50,
   borderColor:'#55BCF6',
   
 },
 plus:{
  borderWidth:2,
  borderRadius:5,
  borderColor:'#55BCF6',
  width:50,
  height:50,
  borderRadius:50,
  backgroundColor:'#FFF',
  justifyContent:'center',
  alignItems:'center',
  marginRight:10,
 },
 text:{
   fontWeight:'bold',
   fontSize:20,
 }
});
