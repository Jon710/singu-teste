import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonParts: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    height: 100,
    width: 100,
    margin: 5,
  },
  greenButton: {
    borderTopLeftRadius: 100,
  },
  redButton: {
    borderTopRightRadius: 100,
  },
  yellowButton: {
    borderBottomLeftRadius: 100,
  },
  blueButton: {
    borderBottomRightRadius: 100,
  },
});
