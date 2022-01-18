import React from 'react';
import {TouchableOpacity, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Start() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Genius')}>
        <Text style={styles.playButton}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  playButton: {
    padding: 50,
    backgroundColor: 'green',
    fontSize: 40,
    borderRadius: 20,
    color: 'white',
    overflow: 'hidden',
  },
});
