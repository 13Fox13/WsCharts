import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {useWs} from '../../hooks/useWs';
import {observer} from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <Icon name={iconName} size={60} color={iconColor} />
      </Animated.View>
    </TouchableOpacity>
  );
});
