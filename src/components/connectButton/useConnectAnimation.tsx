import {useState} from 'react';
import {Animated} from 'react-native';
import {COLORS} from '../../constants';

export const useConnectAnimation = (connect: boolean) => {
  const [rotateAnimation] = useState(new Animated.Value(0));

  const iconName = connect ? 'remove' : 'refresh';
  const iconColor = connect ? COLORS.red : COLORS.primary;

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const interpolateOpacity = rotateAnimation.interpolate({
    inputRange: [0, 0.1, 0.2, 0.5, 1],
    outputRange: [1, 0.4, 0.7, 0.9, 1],
    extrapolate: 'clamp',
  });

  const animatedStyle = {
    opacity: interpolateOpacity,
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  return {
    handleAnimation,
    animatedStyle,
    iconName,
    iconColor,
  };
};
