import React, { useState } from 'react';
import { TextInput, TouchableOpacity , View, StyleSheet, Text } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (

    <View style={styles.View}>
      <View style={styles.ViewCard}>
        <Text style={styles.titleText}>Entrar</Text>
        <Text style={styles.labelText}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
        />
        <Text style={styles.labelText}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
        />
        <TouchableOpacity onPress={() => { navigation.navigate('Principal') }}>
          <View style={styles.button}>
            <Text style={styles.textbutton}>Entrar</Text>
          </View>
        </TouchableOpacity >
        <Text style={styles.labelTextOu}>ou</Text>
        <TouchableOpacity  onPress={() => { navigation.navigate('Cadastro') }}>
          <View style={styles.buttonCad}>
            <Text style={styles.textbuttonCad}>Novo Usuario</Text>
          </View>
        </TouchableOpacity >
      </View>
    </View>
  );
}
