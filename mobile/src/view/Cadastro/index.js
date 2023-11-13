import React, { useState } from 'react';
import { TextInput, TouchableOpacity , View, StyleSheet, Text } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (

    <View style={styles.View}>
      <View style={styles.ViewCard}>
      <Text style={styles.titleText}>Novo Usuário</Text>
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
        <Text style={styles.labelText}>Confirme Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
        />
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={styles.textbutton  }>Cadastrar</Text>
          </View>
        </TouchableOpacity >
      </View>
    </View>
  );
}
