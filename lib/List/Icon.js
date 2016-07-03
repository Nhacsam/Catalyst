import React, {Component, PropTypes} from "react";
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var styles = StyleSheet.create({
  rightIcon: {
    paddingLeft: 15,
  },
  leftIcon: {
    paddingRight: 15,
  }
});

export default class ListItemIcon extends Component {

  static PropTypes = {
    right: PropTypes.bool,
  };

  render() {
    return (
      <View style={this.props.right ? styles.rightIcon : styles.leftIcon}>
        <Icon {...this.props} size={20} />
      </View>
    )
  }

}

