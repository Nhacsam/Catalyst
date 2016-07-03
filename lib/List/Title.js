import React, {Component} from "react";
import {Text, StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  title: {
    color: 'black',
    flex: 1
  }
});

export default class List extends Component {

  render() {
    return <Text style={styles.title} {...this.props} />;
  }

}

