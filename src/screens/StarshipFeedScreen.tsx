import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import {Card } from 'react-native-paper';

import { useStarships } from "../hooks/useStarships";

const renderItem = ({ item }) => {
  
  return (
 
    <Card style={styles.card}>
      <Card.Content>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.model}</Text>
      <Text>{item.cost_in_credits}</Text>
      <Text>{item.crew}</Text>
      <Text>{item.hyperdrive_rating}</Text>
      <Text>{item.cost_in_credits}</Text>
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
    backgroundColor: "#D3D3D3",
    marginBottom: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 12,
  },

});