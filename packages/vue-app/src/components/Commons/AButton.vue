<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
import { iColor, iSize } from '@/type';

type iValuesPossible = 0 | 1;
type iBorderRadius = [iValuesPossible, iValuesPossible, iValuesPossible, iValuesPossible];

interface Props {
  bordersRadius: iBorderRadius;
  color: iColor;
  label?: string;
  size: iSize;
  icon?: string;
  rounded?: boolean;
  ghost?: boolean;
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
      'bg-primary': color == 'primary',
      'border-primary': color == 'primary',
      'text-primary': color == 'primary',
      'btn btn-sm': size == 'small',
      'rounded-20': rounded,
      'ghost-button': ghost
    }"
    :style="{
      borderRadius: getBorderRadius
    }"
    @click=""
  >
    <em v-if="icon" :class="icon"></em>
    <span v-else>{{ label }}</span>
  </button>
</template>
<style lang="scss" scoped>
.AButton {
  display: flex;
  align-items: center;
}
</style>