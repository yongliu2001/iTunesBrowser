/**
 * React Native App
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
} from 'react-native';

import styles from './styles';

StatusBarIOS.setStyle('light-content');


class iTunesBrowser extends Component {
  render() {
    return (
      <View style={styles.global.mainContainer}>
        <View style={styles.navbar.appearance}>
          <View style={styles.navbar.button}></View>
          <Text style={styles.navbar.title}>iTunesBrowser</Text>
          <Text style={[styles.navbar.button, {color: '#FEFEFE',textAlign: 'center',}]}>Search</Text>
        </View>
        <View style={styles.global.content}>
          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('iTunesBrowser', () => iTunesBrowser);
