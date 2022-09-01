<script lang="ts" setup>
import { iColor } from "@/type";
import { withDefaults, ref } from "vue";
import { AButton } from "@/components/Commons";

interface iProps {
  color: iColor;
  max: number;
  min: number;
  noButtons: boolean;
  step: number;
}

withDefaults(defineProps<iProps>(), {
  color: "default",
  max: Infinity,
  min: -Infinity,
  noButtons: false,
  step: 1
});

const input = ref();
</script>
<template>
  <div class="MInputNumber">
    <a-button 
      @click="input.parentNode.querySelector('input[type=number]').stepDown()"
      class="MInputNumber__Button"
      :borders-radius="[1, 0, 0, 1]"
      label="-"
    />
    <input
      ref="input"
      :min="min"
      :max="max" 
      :step="step"
      readonly
      type="number"
      class="MInputNumber__Input" 
    />
    <a-button 
      @click="input.parentNode.querySelector('input[type=number]').stepUp()" 
      class="MInputNumber__Button"
      :borders-radius="[0, 1, 1, 0]"
      label="+"
    />
  </div>
</template>
<style lang="scss" scoped>
.MInputNumber {
  display: flex;
}
.MInputNumber__Input {
  width: 100%;
  min-width: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  color: rgb(58, 57, 57);
  font-size: 15px;
  text-align: center;
}
.MInputNumber__Button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
}
.plus::after {
  content: "+"
}
.minus::before {
  content: "-"
}
</style>
