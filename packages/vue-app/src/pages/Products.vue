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
  ploc.search();
  subscribe();
  console.log(state)
})
onUnmounted(() => {
  unsubscribe();
})
</script>
<template>
  <TProducts>
    <template #header>
      <o-product-header
        :amount="234.22"
      /> {{state}}
    </template>
    <template #navigation>
      <h1>shooppiest</h1>
    </template>
    <template #content>
      <o-product-list
        v-if="state.kind === 'LoadedProductsState'"
        :products="state.products"
      />
      <div class="spinner-border" role="status" v-else>
        <span class="visually-hidden">Loading...</span>
      </div>
    </template>
  </TProducts>
</template>