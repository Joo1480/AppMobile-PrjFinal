import React, { useState } from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    return (
      <View>
        <TextInput 
          label="E-mail"
          value={email}
          onChangeText={texto => setEmail(texto)}
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={texto => setSenha(texto)}
          secureTextEntry
        />
        
        <TouchableHighlight onPress={() => navigation.navigate('Principal')}>LOGAR</TouchableHighlight>
        <TouchableHighlight
          onPress={() => { navigation.navigate('Cadastro') }}
        >
          CADASTRAR USUÁRIO
        </TouchableHighlight>
      </View>
    );
  }