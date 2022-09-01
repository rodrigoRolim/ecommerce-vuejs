<script lang="ts" setup>
import TProducts from '@/templates/TProducts.vue';
import OProductHeader from '@/components/Products/OProductHeader.vue';
import OProductList from '@/components/Products/OProductList.vue';

import { dependencies } from "@ecommerce/core";
import { onMounted, onUnmounted } from "vue";
import { usePlocState } from "@/composables/usePlocState";

const ploc = dependencies.provideProductsPloc();
const { state, subscribe, unsubscribe } = usePlocState(ploc);

onMounted(() => {
  subscribe();
  ploc.search();
})
onUnmounted(() => {
  unsubscribe();
})
</script>
<template>
  <TProducts class="Products">
    <template #header>
      </template>
    <template #navigation>
      <h1>shooppiest</h1>
      <o-product-header
        :amount="234.22"
      />
    </template>
    <template #content>
      <o-product-list
        v-if="state.kind === 'LoadedProductsState'"
        :products="state.products"
        class="Products__List"
      />
      <div class="Products__Loading spinner-border" role="status" v-else>
        <span class="visually-hidden">Loading...</span>
      </div>
    </template>
  </TProducts>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(96, 113, 124)
}
</style>