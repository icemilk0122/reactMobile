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
import * as newsActions from '../actions/news';


function mapStateToProps(state) {
  return {
    model: state.news.get('model')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

class News extends Component {

  _onPress() {
    this.props.actions.updateContent('I know you will come with me.');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the news page</Text>
        <Text style={styles.instructions}>{this.props.model.get('content')}</Text>
        <Button style={styles.button} onPress={this._onPress.bind(this)}> Let's Go </Button>
      </View>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(News);
