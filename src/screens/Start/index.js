import React from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export default function Start() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text style={styles.playButton}>Jogar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
