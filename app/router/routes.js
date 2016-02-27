'use strict';
import Weather from '../weather/components/Weather';
import News from '../news/components/News';
import Immutable from 'immutable';

export default Immutable.fromJS({
  weather: {
    component: Weather,
    title: 'Weather'
  },
  news : {
    component: News,
    title: 'News'
  }
});
