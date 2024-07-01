<template>
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
</template>

<script>
import { defineComponent } from "vue";
import { getUserByCpf } from "src/services/CadastroService.js";

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      cpf: "",
      telefone: "",
      mostrarFormulario: false,
    };
  },
  methods: {
    async fazerLogin() {
      try {
        getUserByCpf(this.cpf, this.telefone)
          .then(() => {
            console.log(response.data);
            this.$q.notify({
              color: "positive",
              message: "Login efetuado com sucesso!",
              position: "top",
            });
          })
          .catch((error) => {
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