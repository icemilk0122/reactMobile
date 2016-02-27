'use strict';

import React, {
  AppRegistry,
  Component
} from 'react-native';
import { Provider } from 'react-redux';
import Luncher from './luncher/components/Luncher';
import configureStore from './common/store/store';

class ReactMobile extends Component {

  render() {
    return (
      <Provider store={configureStore()}>
        <Luncher />
      </Provider>
    );
  }

}

AppRegistry.registerComponent('App', () => ReactMobile);
