const firebaseErrorMessages = {
  "auth/email-already-in-use": "Este e-mail já está em uso.",
  "auth/invalid-email": "E-mail inválido.",
  "auth/weak-passw  ord": "A senha deve ter pelo menos 6 caracteres.",
  "auth/user-not-found": "Usuário não encontrado.",
  "auth/wrong-password": "Senha incorreta.",
  "auth/invalid-credential": "Credenciais inválidas.",
  "auth/missing-password": "Digite a senha.",
  "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
};

export function traduzirErroFirebase(codigo) {
  console.log(codigo);
  return firebaseErrorMessages[codigo] || "Erro desconhecido. Tente novamente.";
}
