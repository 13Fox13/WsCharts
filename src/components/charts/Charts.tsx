import React from 'react';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {observer} from 'mobx-react-lite';
import {COLORS} from '../../constants';
import {chartsStore} from '../../store/chartsStore';
import {styles, inset} from './styles';

export const Charts = observer(() =>
  chartsStore.charts?.length ? (
    <AreaChart
      style={styles.container}
      data={chartsStore.charts}
      contentInset={inset}
      curve={shape.curveNatural}
      svg={{fill: COLORS.primary}}>
      <Grid />
    </AreaChart>
  ) : null,
);
