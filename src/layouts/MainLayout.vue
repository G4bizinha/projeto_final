<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <!-- Adicione o botão "Efetuar Cadastro" -->
<<<<<<< HEAD
        <q-btn @click="mostrarFormulario = true" label="Efetuar Cadastro" />
=======
>>>>>>> 6b060c96adc2275099e5bcf398e35382f233e413

        <!-- Adicione um botão de carrinho de compras -->
        <q-btn dense color="purple" round icon="shopping_cart" class="q-ml-md">
          <q-badge color="red" floating>{{ cart.length }}</q-badge>
        </q-btn>
<<<<<<< HEAD

        <!-- Adicione um botão de login -->
        <q-btn @click="$router.push('/login')" label="Login" class="q-ml-sm" />

        <CadastroCompletoPage @efetuarCadastro="salvarCadastro" />
=======
        <CadastroCompletoPage
          @efetuarCadastro="salvarCadastro"
          class="q-ml-sm"
        />
>>>>>>> 6b060c96adc2275099e5bcf398e35382f233e413

        <q-space />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Dialog de cadastro -->
    <q-dialog v-model="mostrarFormulario">
      <CadastroCompletoPage @efetuarCadastro="salvarCadastro" />
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import cartStore from "src/stores/cartStore";
import CadastroCompletoPage from "src/components/CadastroCompletoPage.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    CadastroCompletoPage,
<<<<<<< HEAD
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const mostrarFormulario = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      cart: cartStore.carrinho,
      leftDrawerOpen,
      toggleLeftDrawer,
      mostrarFormulario,
    };
=======
>>>>>>> 6b060c96adc2275099e5bcf398e35382f233e413
  },
  methods: {
    async salvarCadastro(dadosCadastro) {
      try {
        const response = await axios.post(
          "http://localhost:3000/clientes",
          dadosCadastro
        );
        console.log("Cadastro efetuado com sucesso:", response.data);
<<<<<<< HEAD
        this.mostrarFormulario = false; // Fechar o formulário após o cadastro bem-sucedido
=======
>>>>>>> 6b060c96adc2275099e5bcf398e35382f233e413
      } catch (error) {
        console.error("Erro ao salvar cadastro:", error);
      }
    },
<<<<<<< HEAD
=======
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      cart: cartStore.carrinho,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      mostrarFormulario: false, //  botão "Efetuar Cadastro"
    };
>>>>>>> 6b060c96adc2275099e5bcf398e35382f233e413
  },
});
</script>

<style scoped>
<<<<<<< HEAD
.q-ml-sm {
  margin-left: 10px;
}
.q-ml-md {
  margin-left: 20px;
=======
.btn-efetuar-cadastro {
  margin-left: 20px; /* Ajuste da margem  */
>>>>>>> 6b060c96adc2275099e5bcf398e35382f233e413
}
</style>
