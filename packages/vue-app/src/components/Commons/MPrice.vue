<script lang="ts" setup>
import { computed } from "vue";
import { CurrencyCode, CurrencySymbol } from "@/type";

interface Props {
  value: number;
  currency: CurrencyCode;
  label: string;
}
const props = defineProps<Props>();
const mapCurrencyCodeToSymbol: { [code in CurrencyCode]: CurrencySymbol } = {
  "USD": "$",
  "BRL": "R$",
  "EUR": "€"
}
const getCurrencySimbol = computed(() =>  mapCurrencyCodeToSymbol[props.currency]);

</script>
<template>
<div class="MPrice">
  <span class="MPrice__Label">{{ label }}</span>
  <div class="MPrice__Currency">
    <span class="MPrice__Symbol">{{ getCurrencySimbol }}</span>
    <span class="MPrice__Value">{{ value }}</span>
  </div>
</div>
</template>
<style lang="scss">

</style>