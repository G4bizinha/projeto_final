<template>
<<<<<<< HEAD
  <q-btn @click="mostrarFormulario = true" label="Login" />
  <q-dialog v-model="mostrarFormulario">
    <q-card>
      <q-card-section>
        <q-input v-model="cpf" label="CPF" />
        <q-input v-model="telefone" label="Telefone" type="password" />
        <q-btn @click="fazerLogin" label="Login" color="primary" class="btn" />
      </q-card-section>
    </q-card>
  </q-dialog>
=======
  <div>
    <q-input v-model="cpf" label="CPF" />
    <q-input v-model="telefone" label="Telefone" type="password" />
    <q-btn @click="fazerLogin" label="Login" color="primary" />
  </div>
>>>>>>> d06f4e66622fbde085b9cf0d3f12397b3856a590
</template>

<script>
import { defineComponent } from "vue";
<<<<<<< HEAD
import { getUserByCpf } from "src/services/CadastroService.js";
=======
import {getUserByCpf} from "src/services/CadastroService.js";

>>>>>>> d06f4e66622fbde085b9cf0d3f12397b3856a590

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      cpf: "",
      telefone: "",
<<<<<<< HEAD
      mostrarFormulario: false,
=======
>>>>>>> d06f4e66622fbde085b9cf0d3f12397b3856a590
    };
  },
  methods: {
    async fazerLogin() {
      try {
<<<<<<< HEAD
        getUserByCpf(this.cpf, this.telefone)
          .then(() => {
            console.log(response.data);
            this.$q.notify({
=======
        getUserByCpf(this.cpf, this.telefone).then(() => {
          console.log(response.data);
          this.$q.notify({
>>>>>>> d06f4e66622fbde085b9cf0d3f12397b3856a590
              color: "positive",
              message: "Login efetuado com sucesso!",
              position: "top",
            });
<<<<<<< HEAD
          })
          .catch((error) => {
            console.error("Erro ao fazer login:", error);
            this.$q.notify({
              color: "negative",
              message: "Erro ao fazer login. Por favor, tente novamente.",
              position: "top",
            });
          });
=======
        }).catch((error) => {
          console.error("Erro ao fazer login:", error);
          this.$q.notify({
            color: "negative",
            message: "Erro ao fazer login. Por favor, tente novamente.",
            position: "top",
          });
        });
>>>>>>> d06f4e66622fbde085b9cf0d3f12397b3856a590
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        this.$q.notify({
          color: "negative",
          message: "Erro ao fazer login. Por favor, tente novamente.",
          position: "top",
        });
      }
    },
  },
});
</script>

<style scoped>
<<<<<<< HEAD
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 7px solid #05ff00;
}
.border {
  border: 2px solid #05ff00;
}
.btn {
  width: 12rem;
}
</style>
=======
/* Estilos específicos para o componente de login */
</style>
>>>>>>> d06f4e66622fbde085b9cf0d3f12397b3856a590
