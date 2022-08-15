<script lang="ts" setup>
import { Product } from '@ecommerce/core/dist/products/domain/entites/Produto';
import OProductCard from './OProductCard.vue';

interface Props {
  products: Product[];
}
defineProps<Props>();
</script>
<template>
<div class="OProductList">
  <div
    v-for="product in products"
    :key="product.id"
    class="OProductList__Card"
  >
    <o-product-card
      :image="product.image"
      :alternative="product.title"
      :title="product.title"
      :description="product.description"
      :price="product.price"
    />
  </div>
</div>
</template>
<style lang="scss" scoped>
.OProductList {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2rem;
  row-gap: 2rem;
  margin: 0 auto;
}
</style>