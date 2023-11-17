import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function cadastrar(email, senha, confirmaSenha) {
  createUserWithEmailAndPassword(auth, email, senha)
  .then((dadosDoUsuario) => {
    console.log(dadosDoUsuario)
  })
  .catch((error) => {
    console.log(error)
  });
}