import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Image, Platform} from 'react-native';

import Avatar from '../Avatar';

var styles = StyleSheet.create({
  rightIcon: {
    paddingLeft: 15,
    alignItems: Platform.select({
      ios: 'center',
      android: 'flex-end'
    })
  },
  leftIcon: {
    paddingRight: 15,
    alignItems: Platform.select({
      ios: 'center',
      android: 'flex-start'
    })
  },
  icon: Platform.select({
    ios: {
      width: 45,
    },
    android: {
      width: 61
    }
  })
});

export default class ListItemIcon extends Component {

  static PropTypes = {
    right: PropTypes.bool,
    image: PropTypes.shape({ type: PropTypes.oneOf([Image]) }),
    icon: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
  };

  isSimpleIcon() {
    return (this.props.icon || this.props.name) && ! this.props.backgroundColor;
  }

  render() {

    const size = Platform.select({
      ios: 29,
      android: this.isSimpleIcon() ? 35 : 40,
    });

    return (
      <View style={[styles.icon, this.props.right ? styles.rightIcon : styles.leftIcon]}>
        <Avatar size={size} style={{backgroundColor: this.props.backgroundColor}}
                icon={this.props.name || this.props.icon}
                noBackground={! this.props.backgroundColor} {...this.props} />
      </View>
    )
  }

}

