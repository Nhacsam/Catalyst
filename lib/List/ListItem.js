import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Platform} from 'react-native';
import _ from 'lodash';

import {Touchable} from '../index';
import Title from './Title';
import Icon from './Icon';


var styles = {
  container: {
    alignSelf: 'stretch',
  },
  item: {
    alignSelf: 'stretch',
    alignItems: 'center',

    paddingHorizontal: 16,

    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  itemByStyle: {
    'default': {
      ios: {height: 43},
      android: {paddingVertical: 10}
    },
    simple: {
      ios: {height: 43},
      android: {height: 48},
    },
    icon: {
      ios: {height: 43},
      android: {height: 48},
    },
    avatar: {
      ios: {height: 48},
      android: {height: 56},
    },
    twoLine: {
      ios: {height: 43},
      android: {height: 72},
    },
    iconTwoLine: {
      ios: {height: 43},
      android: {height: 72},
    },
    avatarTwoLine: {
      ios: {height: 48},
      android: {height: 72},
    }
  }
};


export default class List extends Component {

  static Title = Title;
  static Icon = Icon;
  static Avatar = Icon;

  static PropTypes = {
    onPress: PropTypes.func,
    type: PropTypes.oneOf(_.keys(styles.itemByStyle)),
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    const itemStyle = {
      ...styles.item,
      ...Platform.select(styles.itemByStyle[this.props.type])
    };
    console.log(itemStyle);

    return (
      <View style={styles.container} >
        <Touchable onPress={this.props.onPress} opacity={0.9}>
          <View style={itemStyle} {...this.props} />
        </Touchable>
      </View>
    );
  }

}

