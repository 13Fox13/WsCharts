import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    flex: 0,
    borderRadius: 50,
    borderColor: COLORS.primary,
    borderWidth: 2,
    padding: 16,
    width: 150,
  },
  label: {
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
