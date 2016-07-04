import React, {Component, PropTypes} from "react";
import {View, Image, Text, Platform} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

export default class Avatar extends Component {

  static propTypes = {
    image: PropTypes.shape({ type: PropTypes.oneOf([Image]) }),
    icon: PropTypes.string,
    size: PropTypes.number,
    text: PropTypes.string,
    style: PropTypes.object,
    noBackground: PropTypes.bool,
    color: PropTypes.string,
  };

  static defaultProps = {
    size: 40
  };

  render() {
    const {image, icon, text, size, noBackground} = this.props;

    const styles = {
      container: {
        width: size,
        height: size,
        borderRadius: Platform.select({
          ios: size / 4,
          android: size / 2
        }),
        backgroundColor: noBackground ? null : '#0076FF',
        alignItems: 'center',
        justifyContent: 'center',
        ...this.props.style,
      }
    };

    const color = this.props.color || (noBackground ? 'black' : 'white');
    const iconSize = noBackground ?  0.8 * size : 0.6 * size;

    if (image) {
      return React.cloneElement(image, {style: styles.container});
    }

    if (icon) {
      return (
          <View style={styles.container}>
            <Icon
              name={icon}
              color={color}
              size={iconSize}
              />
          </View>
      );
    }

    if (text) {
      return (
          <View style={styles.container}>
            <Text style={{ color: color }}>{text}</Text>
          </View>
      );
    }

    return null;
  }
}
