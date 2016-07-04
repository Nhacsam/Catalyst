import React, {Component, PropTypes} from "react";
import {Text, View, StyleSheet, Platform} from 'react-native';

var styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: Platform.select({
      ios: 17,
      android: 16
    }),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  subTitle: Platform.select({
    ios: {
      color: 'black',
      fontSize: 12,
      fontWeight: '300'
    },
    android: {
      color: 'gray',
      fontSize: 16,

    }
  })
});

export default class Title extends Component {

  static PropTypes = {
    subTitle: PropTypes.string,
    styles: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} {...this.props} />
        {this.props.subTitle ? (
          <Text style={styles.subTitle}>{this.props.subTitle}</Text>
        ) : null}
      </View>
    );
  }

}

