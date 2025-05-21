// src/screens/InfoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <Text style={styles.text}>
        This is a party game consisting of 100 questions across 10 different themes.
      </Text>
      <Text style={styles.text}>
        Swipe left for the next question and right for previous one.
      </Text>
      <Text style={styles.text}>
        Touch the screen after completing a category, it will take you to the next one.
      </Text>
      <Text style={styles.text}>
        The questions are not to be taken serious, as they are of humoristic nature. The questions were created by the meme creators of psykolomeme_warszawa_ 
      </Text>
      <Text style={styles.text}>
        This party game is completely free to use, but.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
     backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
   text: {
     fontSize: 16,
     textAlign: 'center',
     marginBottom: 10,
     color: '#FFFFFF',
   }
});