<template>
  <div class="lista">
    <CardProduto
      v-for="produto in produtos"
      :key="produto.id"
      :produto="produto"
      :comImagem="true"
      @comprar="onComprar"
      @retirar="onRetirar"
      :botoes="botoes"
    />
  </div>
</template>
<script>
import CardProduto from "src/components/CardProduto.vue";
export default {
  name: "ListaProdutos",
  emits: ["comprar", "retirar"],
  components: {
    CardProduto,
  },
  props: {
    produtos: {
      type: Array,
      required: true,
    },
    botoes: {
      type: Array,
      required: false,
      default: () => ["comprar", "retirar"],
    },
  },
  methods: {
    onComprar(produto) {
      this.$emit("comprar", produto);
    },
    onRetirar() {
      this.$emit("retirar", this.produto);
    },
    
  },
};
</script>
<style>
.lista {
  display: flex;
  justify-content: space-around;
  background-color: white;
  border: 1px solid black;
  border-shadow: 5px 5px 5px black;
}
</style>
