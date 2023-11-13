import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  return (

    <View style={styles.View}>
      <View style={styles.Cabeçalho}>
      <Text style={styles.CabText}>Senha</Text>
      </View>
    </View>
  );
}
