import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Sound from 'react-native-sound';
import {styles} from './styles';

export default function Restart() {
  const navigation = useNavigation();

  useEffect(() => {
    let sound = new Sound(
      'https://www.beepzoid.com/ringtones/GameOver.mp3',
      null,
      error => {
        if (error) {
          console.error(error);
          return;
        }
        sound.play(() => {
          sound.release();
        });
      },
    );
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OPA! Sequência errada!</Text>
      <Button title="Reiniciar" onPress={() => navigation.push('Game')} />
    </View>
  );
}
