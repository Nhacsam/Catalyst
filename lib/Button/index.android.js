import React, {Component, PropTypes} from "react";

import {Button as MaterialButton} from 'react-native-material-design';




export default class Button extends Component {

  render() {
    return <MaterialButton {...this.props} />
  }

}
