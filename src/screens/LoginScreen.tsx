import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// You can import from local files


// or any pure javascript modules available in npm

import { Colors, Headline } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Routes } from '../navigation/Routes';

export default function LoginScreen (props) {

   const [text, setText] = React.useState("");
 

  function navigateToFeed() {
    props.navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }
  
  function navigateToTerms() {
    props.navigation.navigate(Routes.TERMS_SCREEN);
  }

  return (

    <ScrollView style={styles.back}>

      <View style={styles.container}>
         <Headline style={styles.headline}>Welcome to StartPort</Headline>
      </View>

        <View style={styles.form}>
            <React.Fragment>
                <TextInput autoComplete={true} style={styles.input} label="Email" value={text}
                onChangeText={text => setText(text)}/>
                <TextInput  autoComplete={true} style={styles.input} label="Password" value={text}
                onChangeText={text => setText(text)}/>

                <Button mode="contained" style={styles.btn} onPress={navigateToFeed}>
                    <Text style={styles.text}> Login </Text>
                </Button>  

            </React.Fragment>
        </View> 
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.parag}> Read conditions and Tearms </Text>
        </TouchableOpacity>
    </ScrollView>
   
  );
 
}
  
  
//------ using <></> is just like using </React.Fragment>


const styles = StyleSheet.create({

  back: {
   backgroundColor: 'black', 
  },

  headline: {
     textAlign: 'center',
     fontWeight: 'bold',
     fontStyle: 'italic',
     fontSize: 37,
     color: "#F2DD65",
   
   
  },

  container: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 50,
  
  },
 

  btn: {
    backgroundColor: "#F2DD65",
    padding: 8,
    marginTop:18,
    alignSelf:'center',
    width: '60%',
    borderRadius: 50,
  },

  text: {
    color: "black",
    fontWeight: 'bold',
  },

  form: {
    padding: 30,
   
  },
   

  input: {
    marginBottom: 20,
    
 },

 parag: {
   textAlign: "center",
   fontSize: 15,
   fontStyle: "italic", 
   fontWeight: "bold",
   color: "#F2DD65",
 
 }


});
