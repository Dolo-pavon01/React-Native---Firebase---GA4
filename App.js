import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBasics from './src/screens/ButtonBasics';
import analytics from '@react-native-firebase/analytics';

analytics().logEvent('login', {
  id: 3745092,
  item: 'mens grey t-shirt',
  size: 'L',
  element : 'Press Me :: 01'
})


export default function App() {
  return (
    <ButtonBasics></ButtonBasics>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

