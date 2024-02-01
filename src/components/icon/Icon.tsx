import React from 'react';
import {Platform, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

type IconProps = {
  iconName: string;
  iconColor: string;
};
export const Icon = ({iconName, iconColor}: IconProps) => {
  const textIcon = iconName !== 'refresh' ? '❌' : '🔄';
  return Platform.OS === 'web' ? (
    <Text style={[styles.text, {color: iconColor}]}>{textIcon}</Text>
  ) : (
    <FontAwesome name={iconName} size={60} color={iconColor} />
  );
};
