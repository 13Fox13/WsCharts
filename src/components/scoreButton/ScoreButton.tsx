import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import {chartsStore} from '../../store/chartsStore';
import {TITLES} from '../../constants';
import {styles} from './styles';

export const ScoreButton = observer(() => {
  const {toggleScore, scoreValue, connect} = chartsStore;
  const text =
    scoreValue !== 0 ? TITLES.scoreButton.realTime : TITLES.scoreButton.normal;

  return connect ? (
    <TouchableOpacity style={styles.container} onPress={toggleScore}>
      <Text numberOfLines={2} style={styles.label}>
        {text}
      </Text>
    </TouchableOpacity>
  ) : null;
});
