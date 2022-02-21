import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';


// You can import from local files


// or any pure javascript modules available in npm

import { Headline } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function LoginScreen () {
   const [text, setText] = React.useState("");
  return (

    <ScrollView>

      <View style={styles.container}>
         <Headline style={styles.headline}>Welcome to StartPort</Headline>
      </View>

        <View>
            <View style={styles.form}>
                <TextInput autoComplete={true} style={styles.input} label="Email" value={text}
                onChangeText={text => setText(text)}/>
                <TextInput  autoComplete={true} style={styles.input} label="Password" value={text}
                onChangeText={text => setText(text)}/>   
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                Login
                </Button>  
            </View>
                <Text style={styles.parag}>Read Conditions and Terms </Text>
        </View> 
    </ScrollView>
   
  );
 
}
  
  



const styles = StyleSheet.create({

  headline: {
     textAlign: "center",
     color: "white",
  },

  container: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 50,
    backgroundColor: "#7950F2"
  },

  form: {
    padding: 50,
  },
   

  input: {
    marginBottom: 20,
    
 },



 parag: {
   textAlign: "center",
   fontSize: 15,
   fontStyle: "italic", 
   fontWeight: "bold",
 }


});
