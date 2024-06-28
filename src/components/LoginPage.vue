<template>
  <div>
    <q-input v-model="cpf" label="CPF" />
    <q-input v-model="telefone" label="Telefone" type="password" />
    <q-btn @click="fazerLogin" label="Login" color="primary" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {getUserByCpf} from "src/services/CadastroService.js";


export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      cpf: "",
      telefone: "",
    };
  },
  methods: {
    async fazerLogin() {
      try {
        getUserByCpf(this.cpf, this.telefone).then(() => {
          console.log(response.data);
          this.$q.notify({
              color: "positive",
              message: "Login efetuado com sucesso!",
              position: "top",
            });
        }).catch((error) => {
          console.error("Erro ao fazer login:", error);
          this.$q.notify({
            color: "negative",
            message: "Erro ao fazer login. Por favor, tente novamente.",
            position: "top",
          });
        });
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
/* Estilos específicos para o componente de login */
</style>
