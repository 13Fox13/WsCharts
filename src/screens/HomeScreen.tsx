import React from 'react';
import {Charts} from '../components/charts/Charts';
import {ConnectButton} from '../components/connectButton/ConnectButton';
import {ScoreButton} from '../components/scoreButton/ScoreButton';

export const HomeScreen = () => (
  <>
    <Charts />
    <ScoreButton />
    <ConnectButton />
  </>
);
