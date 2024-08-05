import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import analytics from '@react-native-firebase/analytics';


export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  

  render() {

    analytics().logEvent('interaction_click', {
      id: 3745092,
      item: 'mens grey t-shirt',
      size: 'L',
      element : 'Press Me :: 01'
    })
    
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={ async () =>
          await analytics().logEvent('interaction_click', {
            id: 3745092,
            item: 'mens grey t-shirt',
            size: 'L',
            element : 'Press Me :: 01'
          })
        } title="Press Me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="This looks great!" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});