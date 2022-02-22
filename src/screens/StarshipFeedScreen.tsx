import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import {Card } from 'react-native-paper';

import { useStarships } from "../hooks/useStarships";

const renderItem = ({ item }) => {
  
  return (
 
    <Card style={styles.card}>
      <Card.Content>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.txt}>{item.model}</Text>
      <Text style={styles.txt}>{item.cost_in_credits}</Text>
      <Text style={styles.txt}>{item.crew}</Text>
      <Text style={styles.txt}>{item.hyperdrive_rating}</Text>
      <Text style={styles.txt}>{item.cost_in_credits}</Text>
      </Card.Content>
    </Card>

  
  )
  };

export const StarshipFeedScreen = () => {
  const {isLoading, isError, data}= useStarships()
   console.log("bonjour", isLoading)
   console.log("bonjour", data)
  
  if (isLoading) {
   return  <Text>loading</Text>
  }

  if (isError) {
    return <Text>We are sorry something bad happend ... </Text>
  }
 console.log(data)

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
    
          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#7B5095",
    marginBottom: 20,
  },

  txt:{
    color:"#ffb687",
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    color:"#ffb687",
    
    marginBottom: 12,
  },

});