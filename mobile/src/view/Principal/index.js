import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function Login({ navigation }) {
  return (

    <View style={styles.View}>
      <View style={styles.Cabeçalho}>
        <Text style={styles.CabText}>Bem Vindo!</Text>
        <TouchableOpacity style={styles.CabBotao} onPress={() => { navigation.navigate('Login') }}>
          <Icon
            name={'log-out'}
            size={20}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Menu}>
        <View style={styles.MenuColuna  }>
          <View style={styles.MenuItem}>
            <TouchableOpacity style={styles.MenuBotao} >
              <Icon
                name={'camera'}
                size={50}
                color="#d41e73"
              />
            </TouchableOpacity>
            <Text style={styles.MenuLabel}>Camera</Text>
          </View>
          <View style={styles.MenuItem}>
            <TouchableOpacity style={styles.MenuBotao} >
              <Icon
                name={'message-square'}
                size={50}
                color="#d41e73"
              />
            </TouchableOpacity>
            <Text style={styles.MenuLabel}>Mensagens</Text>
          </View>
          <View style={styles.MenuItem}>
            <TouchableOpacity style={styles.MenuBotao} >
              <Icon
                name={'mail'}
                size={50}
                color="#d41e73"
              />
            </TouchableOpacity>
            <Text style={styles.MenuLabel}>E-mail</Text>
          </View>
          <View style={styles.MenuItem}>
            <TouchableOpacity style={styles.MenuBotao} >
              <Icon
                name={'map-pin'}
                size={50}
                color="#d41e73"
              />
            </TouchableOpacity>
            <Text style={styles.MenuLabel}>Localização</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
