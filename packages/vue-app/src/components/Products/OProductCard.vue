<script lang="ts" setup>
import MPrice from "@/components/Commons/MPrice.vue";
import { computed } from "vue";

interface Props {
  alternative: string;
  title: string;
  description: string;
  image: string;
  price: number;
}
const props = defineProps<Props>();

const truncatedTitle = computed(() => {
  if (props.title.length > 26) {

    return props.title.substring(0, 23) + "..."
  } 
  return props.title;
});
</script>
<template>
<div class="MProductCard card px-3 ">
  <img :src="image" class="card-img-top p-0" :alt="alternative">
  <div class="MProductCard__Body card-body py-2">
    <h6 class="card-title p-0 m-0 truncate-text">{{ title }}</h6>
  </div>
  <div class="MProductCard__Price card-body">
    <m-price 
      label="price"
      currency="BRL"
      :value="price"
    />
  </div>
</div>
</template>
<style lang="scss" scoped>
.MProductCard {
  width: 18rem;
  & img {
    width: 100%;
    height: 15rem;
    align-self: center;
  }
}
.MProductCard__Body {
  width: 100%;
  margin: 0;
}
.truncate-text {
  width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>