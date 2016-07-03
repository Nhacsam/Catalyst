import React, {Component} from "react";
import {View, StyleSheet} from 'react-native';

import {Touchable} from '../index';
import Title from './Title';


var styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  item: {
    alignSelf: 'stretch',
    alignItems: 'center',

    paddingHorizontal: 15,
    height: 43,

    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  }
});

export default class List extends Component {

  static Title = Title;

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

