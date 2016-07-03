import React, {Component} from "react";
import {View, StyleSheet} from 'react-native';

import {Touchable} from '../index';

import ListItem from './ListItem';

var styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    borderTopColor: 'rgba(0,0,0,.2)',
    borderTopWidth: 1
  }
});

export default class List extends Component {

  static ListItem = ListItem;

  render() {
    return <View style="styles.list" {...this.props} />;
  }
}

export {ListItem};
