import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {TITLES} from '../../constants';

type Props = {error: Error; resetError: () => void};

export const Fallback = ({error, resetError}: Props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>{TITLES.fallback.title}</Text>
      <Text style={styles.subtitle}>{TITLES.fallback.subtitle}</Text>
      <Text style={styles.error}>{error.toString()}</Text>
      <TouchableOpacity style={styles.button} onPress={resetError}>
        <Text style={styles.buttonText}>{TITLES.fallback.button}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
