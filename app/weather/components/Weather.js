'use strict';

import React, {
  Component,
  Text,
  View
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../styles/style.js';
import * as weatherActions from '../actions/weather';


function mapStateToProps(state) {
  return {
    model: state.weather.get('model')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  };
}

class Weather extends Component {

  _onPress() {
    this.props.actions.updateName('I know you will come with me.');
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Google</Text>
        <Text style={styles.welcome}>React Native!</Text>

        <Text style={styles.instructions}>{this.props.model.get('name')}</Text>
        <Button style={styles.button} onPress={this._onPress.bind(this)}> Let's Go </Button>

      </View>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
