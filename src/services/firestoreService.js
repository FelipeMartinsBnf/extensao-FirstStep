import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export async function buscarAulasConcluidas() {
  const user = auth.currentUser;
  if (!user) return;

  const docRef = doc(db, "progressoUsuarios", user.uid);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    const dados = snapshot.data();
    console.log("Aulas concluídas:", dados.aulasConcluidas);
    return dados.aulasConcluidas;
  } else {
    console.log("Nenhum progresso encontrado.");
    return [];
  }
}
