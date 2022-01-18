import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

export default function Genius() {
  return (
    <View style={styles.buttons}>
      <Text style={styles.direction}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            console.log('azul');
          }}>
          <View style={styles.blueButton} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            console.log('verde');
          }}>
          <View style={styles.greenButton} />
        </TouchableOpacity>
      </Text>

      <Text style={styles.direction}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            console.log('vermelho');
          }}>
          <View style={styles.redButton} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            console.log('amarelo');
          }}>
          <View style={styles.yellowButton} />
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  direction: {
    flexDirection: 'row',
  },
  blueButton: {
    width: 150,
    height: 150,
    backgroundColor: '#1e90ff',
    borderTopLeftRadius: 100,
  },
  greenButton: {
    width: 150,
    height: 150,
    backgroundColor: '#3cb371',
    borderTopRightRadius: 100,
  },
  redButton: {
    width: 150,
    height: 150,
    backgroundColor: '#fa8072',
    borderBottomLeftRadius: 100,
  },
  yellowButton: {
    width: 150,
    height: 150,
    backgroundColor: '#ffd700',
    borderBottomRightRadius: 100,
  },
});
