import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, Alert } from 'react-native';
import { cadastrar } from '../../Service/requisicoesFirebase'

import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  async function realizarCadastro() {
    if (email === '') {
      Alert.alert(
        "Email invalido!",
        "digite um email!"
      );
      return
    }
    if (senha === '') {
      Alert.alert(
        "senha invalido!",
        "digite uma senha!"
      );
      return
    }
    if (confirmaSenha === '') {
      Alert.alert(
        "confirmação de senha invalido!",
        "digite uma senha!"
      );
      return
    }
    if (senha != confirmaSenha) {
      Alert.alert(
        "Senha não compativel",
        "senhas nao confere nos dois campos!"
      );
      return
    }
    await cadastrar(email, senha, confirmaSenha);
    navigation.navigate('Login')
  }


  return (

    <View style={styles.View}>
      <View style={styles.ViewCard}>
        <Text style={styles.titleText}>Novo Usuário</Text>
        <Text style={styles.labelText}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={texto => setEmail(texto)}
        />
        <Text style={styles.labelText}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={texto => setSenha(texto)}
        />
        <Text style={styles.labelText}>Confirme Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme Senha"
          onChangeText={texto => setConfirmaSenha(texto)}
        />
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={styles.textbutton} onPress={() => realizarCadastro()}>Cadastrar</Text>
          </View>
        </TouchableOpacity >
      </View>
    </View>
  );
}
