<script lang="ts" setup>
interface Props {
  amount: number;
}
defineProps<Props>();

</script>
<template>
  <div class="OProductsHeader">
    {{ amount }}
  </div>
</template>
<style lang="scss" scoped></style>