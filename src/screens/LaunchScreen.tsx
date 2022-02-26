import React from "react";
import { View, Text, Image, ScrollView,StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity} from "react-native";
import { Routes } from "../navigation/Routes";

export const LaunchScreen = (props) => {

    function navigateToLogin() {
        props.navigation.navigate(Routes.LOGIN_SCREEN);
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={navigateToLogin}>
            
                <ImageBackground source={{ uri: "https://i.pinimg.com/564x/f2/cc/e5/f2cce56aeb4cc3355498979a240c7f9c.jpg",}} style={styles.image}>
                
                </ImageBackground>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

    image: {
        width: '100%', 
        height: '100%'
    },
  
});
  
