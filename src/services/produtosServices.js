import {db} from './firebaseConfig';
import {collection, getDocs } from 'firebase/firestore';

export const getProdutos = async () => {
  const querySnapshot = await getDocs(collection(db, 'produtos'));
  const produtos = querySnapshot.docs.map((doc) => doc.data());
  return produtos;
}