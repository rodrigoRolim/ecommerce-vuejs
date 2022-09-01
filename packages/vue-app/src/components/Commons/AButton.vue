<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
import { iColor, iSize, FixedLengthArray } from '@/type';

type iValuesPossible = 0 | 1;
type iBorderRadius = [iValuesPossible, iValuesPossible, iValuesPossible, iValuesPossible];

interface Props {
  bordersRadius: iBorderRadius;
  color: iColor;
  label?: string;
  size: iSize;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  bordersRadius: () => [1, 1, 1, 1],
  color: "primary",
  size: "medium",
});
const mapArrayToBorderRadius = {
  0: "0rem",
  1: "0.375rem"
}
const getBorderRadius = computed(() => {
  if (props.bordersRadius)
    return props.bordersRadius
      .reduce((previousValue, currentValue) => 
        previousValue + " " + mapArrayToBorderRadius[currentValue], ""
      );
})
</script>
<template>
  <button
    class="AButton"
    :class="{
      'btn btn-primary': color == 'primary',
      'btn btn-sm': size == 'small',
    }"
    :style="{
      borderRadius: getBorderRadius
    }"
    @click=""
  >
    {{ label }}
  </button>
</template>
<style lang="scss" scoped></style>