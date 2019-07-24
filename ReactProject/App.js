import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native';


callFun = () =>
  {
    var RandomGenerate = Math.floor((Math.random() * 10) + 1);
    if (RandomGenerate <= 5){
      alert("Head")
      // alert(RandomGenerate)
    }
    else(alert("Tail")
    // alert(RandomGenerate)
    )
  }


export default function App() { 

    return (
      <View style={styles.container}>
        <Text style={styles.styling}>TOSS IT</Text>
        <TouchableOpacity activeOpacity = { 0 } onPress={ this.callFun }>
       <Image 
        source={require('../ReactProject/assets/coin3d.gif')}  
        style={{width: 400, height: 400 }} 
        id = {"imgAnimate"}
    /> 
    </TouchableOpacity>
    <Text>{callFun()}</Text>
    {/* <Button/> */}
      </View>
    );
    }
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  styling:{
    fontSize: 100,
    color:'gold',
    textAlignVertical: 'top',
    fontWeight: 'bold',
  }
})
