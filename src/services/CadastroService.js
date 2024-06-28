import {db} from './firebaseConfig';
import {collection , onSnapshot, addDoc} from 'firebase/firestore';

// Função para cadastrar um novo usuário
export const cadastrar = async (nome, telefone, cpf, endereco) =>{
    //firebase
    addDoc(collection(db, 'clientes'),{
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
    }).then(() => {
        console.log("Document successfully written!");
        console.log("Cliente Id: ", docRef.id + " Cadastrado com Sucesso!"); 
    }
    ).catch((error) => {
        console.error("Error adding document: ", error);
    });
}

// Função para pegar informações do usuário pelo CPF
export const getUserByCpf = async (cpf, telefone) => {
    try {
      // Cria uma referência para a coleção "clientes"
      const clientesRef = collection(db, 'clientes');
      
      // Cria uma consulta para buscar o documento com o CPF fornecido
      const q = query(clientesRef, where('cpf', '==', cpf && 'telefone', '==', telefone));

      // Executa a consulta
      const querySnapshot = await getDocs(q);
      
      // Verifica se encontrou algum documento
      if (!querySnapshot.empty) {
        // Percorre os documentos encontrados
        querySnapshot.forEach((doc) => {
          console.log('Cliente encontrado: ', doc.data());
          return doc.data();
        });
      } else {
        console.log('Nenhum cliente encontrado com o CPF fornecido.');
      }
    } catch (error) {
      console.error('Erro ao buscar documento: ', error);
    }
  };
