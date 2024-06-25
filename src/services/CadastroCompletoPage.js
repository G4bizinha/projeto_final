import {firebaseConfig} from './firebaseConfig';
import {collection , onSnapshot, addDoc} from 'firebase/firestore';

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


