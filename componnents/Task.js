import React from 'react';
import {Text , View, StyleSheet, TouchableOpacity,props} from 'react-native';

const Task = (props)=> {
     return (
<View style={styles.item}>
<View style={styles.itemleft}>
    <View style={styles.square}></View>
    <Text style={styles.itemtext} >{props.text} </Text>
    <View style={styles.circular} ></View>
    </View>

   
</View>

     )
}
const styles=StyleSheet.create({
  
    item:{
        backgroundColor:'#FFF',
        margin:10,
        padding:15,
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius:10,

    },
    itemleft:{
        flexDirection:'row',
        alignItems:'center',
       
        flexWrap:'wrap',
    },
 
    square:{
width:24,
height:24,
opacity:0.4,
backgroundColor:'#55BCF6',
marginRight:15,
borderRadius:6,

    },
    itemtext:{
       fontWeight:'bold',
       width:'80%'

    },
    circular:{
        borderWidth:2,
        borderRadius:5,
        borderColor:'#55BCF6',
        width:12,
        height:12,
       


    }
   

});

export default Task;