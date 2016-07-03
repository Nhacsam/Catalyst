import React, {Component, PropTypes} from "react";
import {View, StyleSheet} from 'react-native';

import {Touchable} from '../index';
import Title from './Title';
import Icon from './Icon';


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
  static Icon = Icon;

  static PropTypes = {
    onPress: PropTypes.func
  };

  render() {
    return (
      <View style={styles.container} >
        <Touchable onPress={this.props.onPress}>
          <View style={styles.item} {...this.props} />
        </Touchable>
      </View>
    );
  }

}

