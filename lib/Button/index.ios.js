import React, {Component, PropTypes} from "react";
import {View, Text} from 'react-native';
import {Touchable} from '../index';



export default class Button extends Component {

  render() {
    const { text, value} = this.props;
    return (
      <Touchable>
        <View>
          <Text>
            {text || value}
          </Text>
        </View>
      </Touchable>
    );
  }

}
