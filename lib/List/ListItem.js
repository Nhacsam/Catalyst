import React, {Component} from "react";
import {View, StyleSheet} from 'react-native';

import {Touchable} from '../index';


var styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  item: {
    alignSelf: 'stretch',
    alignItems: 'center',

    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  }
});

export default class List extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Touchable>
          <View style={styles.item} {...this.props} />
        </Touchable>
      </View>
    );
  }

}

