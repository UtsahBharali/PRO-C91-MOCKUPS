import React from 'react';
import {Text , View , StyleSheet} from 'react-native';


export default class App extends React.Component
 {
   constructor(){
     super()
     this.state = {
       
     }
   }
   render(){
return (
  <View style={styles.container}> 
    <View style={styles.header}>
      <Text>
        My To-Do List App
      </Text>
    </View>
  </View>

 );
}
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0066',
    alignItems: 'center',
    justifyContent: 'top',
    
  },
  header: {
    backgroundColor: 'pink',
    padding: 10,
    marginTop:0,
  },
});
