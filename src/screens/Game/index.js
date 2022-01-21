/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {timeout} from '../../utils/timeout';
import {styles} from './styles';
import Sound from 'react-native-sound';
import generateRandomNumber from '../../utils/generateRandomNumber';
import useAsyncState from '../../hooks/useAsyncState';

export default function Game() {
  const [pressedButton, setPressedButton] = useState();
  const [gameSequence, setGameSequence] = useAsyncState([
    generateRandomNumber(),
  ]);
  const [playerSequence, setPlayerSequence] = useAsyncState([]);
  const [round, setRound] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    async function waitGame() {
      await timeout(500);
      gameRound();
    }

    waitGame();
  }, [round]);

  async function gameRound() {
    for (let num of gameSequence) {
      playButton(num);
      await timeout(1500);
    }
  }

  async function compareSequences() {
    if (gameSequence.toString().startsWith(playerSequence)) {
      if (gameSequence.toString() === playerSequence.toString()) {
        await setPlayerSequence([]);
        await setGameSequence(listaAntiga => [
          ...listaAntiga,
          generateRandomNumber(),
        ]);
        setRound(round + 1);
      } else {
        return;
      }
    } else if (
      JSON.stringify(gameSequence) !== JSON.stringify(playerSequence)
    ) {
      navigation.push('Restart');
    } else {
      return;
    }
  }

  function playButton(num, user = false) {
    let sound;

    switch (num) {
      case 0:
        setPressedButton(0);
        sound = new Sound(
          'https://www.beepzoid.com/ringtones/Bell-1.mp3',
          null,
          error => {
            if (error) {
              console.error(error);
              return;
            }
            sound.play(async () => {
              sound.release();
              setPressedButton('');
              if (user) {
                playerSequence.push(num);
                await setPlayerSequence(playerSequence);
                compareSequences();
              }
            });
          },
        );
        break;
      case 1:
        setPressedButton(1);
        sound = new Sound(
          'https://www.beepzoid.com/ringtones/Bell-2.mp3',
          null,
          error => {
            if (error) {
              console.error(error);
              return;
            }
            sound.play(async () => {
              sound.release();
              setPressedButton('');
              if (user) {
                playerSequence.push(num);
                await setPlayerSequence(playerSequence);
                compareSequences();
              }
            });
          },
        );
        break;
      case 2:
        setPressedButton(2);
        sound = new Sound(
          'https://www.beepzoid.com/ringtones/Bell-3.mp3',
          null,
          error => {
            if (error) {
              console.error(error);
              return;
            }
            sound.play(async () => {
              sound.release();
              setPressedButton('');
              if (user) {
                playerSequence.push(num);
                await setPlayerSequence(playerSequence);
                compareSequences();
              }
            });
          },
        );
        break;
      case 3:
        setPressedButton(3);
        sound = new Sound(
          'https://www.beepzoid.com/ringtones/Bell-4.mp3',
          null,
          error => {
            if (error) {
              console.error(error);
              return;
            }
            sound.play(async () => {
              sound.release();
              setPressedButton('');
              if (user) {
                playerSequence.push(num);
                await setPlayerSequence(playerSequence);
                compareSequences();
              }
            });
          },
        );
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonParts}>
        <TouchableOpacity onPress={() => playButton(0, true)}>
          <View
            style={[
              styles.greenButton,
              styles.button,
              {backgroundColor: pressedButton === 0 ? '#05FFEB' : '#00CABA'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => playButton(1, true)}>
          <View
            style={[
              styles.redButton,
              styles.button,
              {backgroundColor: pressedButton === 1 ? '#FF9697' : '#EC6869'},
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonParts}>
        <TouchableOpacity onPress={() => playButton(2, true)}>
          <View
            style={[
              styles.yellowButton,
              styles.button,
              {backgroundColor: pressedButton === 2 ? '#FFE124' : '#F9E87E'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => playButton(3, true)}>
          <View
            style={[
              styles.blueButton,
              styles.button,
              {backgroundColor: pressedButton === 3 ? '#38DCFF' : '#00ACD1'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
