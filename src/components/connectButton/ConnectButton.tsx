import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {useWs} from '../../hooks/useWs';
import {observer} from 'mobx-react-lite';
import {Icon} from '../icon/Icon';
import {chartsStore} from '../../store/chartsStore';
import {useConnectAnimation} from './useConnectAnimation';
import {styles} from './styles';

export const ConnectButton = observer(() => {
  const {connect} = chartsStore;
  const {onOpen, onClose} = useWs();
  const {handleAnimation, animatedStyle, iconColor, iconName} =
    useConnectAnimation(connect);

  const handleToggle = () => {
    handleAnimation();
    if (connect) {
      onClose();
      return;
    }
    onOpen();
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Icon iconName={iconName} iconColor={iconColor} />
      </Animated.View>
    </TouchableOpacity>
  );
});
